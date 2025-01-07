import { getAllSkeins } from '../../../src/controllers/skeinController';
import { Skein } from '../../../src/models/skeinModel';
import { Request, Response } from 'express';
import { getSignedUrlFromS3 } from '../../../src/aws/s3Service';

jest.mock('../../../src/models/skeinModel');
jest.mock('../../../src/aws/s3Service');

const request = {} as Request;
const response = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
} as unknown as Response;

describe('Getting all skeins', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Ensure mocks are cleared between tests
  });
  it('returns empty array when no skeins', async () => {
    (Skein.find as jest.Mock).mockImplementationOnce(() => ({
      lean: jest.fn().mockReturnValue([]),
    }));
    await getAllSkeins(request, response);

    expect(Skein.find).toHaveBeenCalled();
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({
      status: 'success',
      results: 0,
      data: { skeinsWithImageUrl: [] },
    });
  });
  it('returns skeins when skeins have images', async () => {
    const mockSkeins = [
      { color: 'Red', image: 'image1.png' },
      { color: 'Blue', image: 'image2.png' },
    ];
    (Skein.find as jest.Mock).mockImplementationOnce(() => ({
      lean: jest.fn().mockReturnValue(mockSkeins),
    }));

    (getSignedUrlFromS3 as jest.Mock).mockImplementation(
      (bucket, key) => `https://mock-s3.com/${key}`,
    );

    await getAllSkeins(request, response);

    expect(Skein.find).toHaveBeenCalled();
    expect(getSignedUrlFromS3).toHaveBeenCalledTimes(mockSkeins.length);
    expect(response.status).toHaveBeenCalledWith(200);

    // Note: mongoose adds _doc property to bundle up the skein data,
    // but we don't need that in the unit tests
    expect(response.json).toHaveBeenCalledWith({
      status: 'success',
      results: 2,
      data: {
        skeinsWithImageUrl: [
          { ...mockSkeins[0], imageUrl: 'https://mock-s3.com/image1.png' },
          { ...mockSkeins[1], imageUrl: 'https://mock-s3.com/image2.png' },
        ],
      },
    });
  });
  it('attaches imageUrl with skeins without images', async () => {
    // One skein does not have an image provided
    const mockSkeins = [
      { color: 'Red', image: 'image1.png' },
      { color: 'Blue' },
    ];
    (Skein.find as jest.Mock).mockImplementationOnce(() => ({
      lean: jest.fn().mockReturnValue(mockSkeins),
    }));

    (getSignedUrlFromS3 as jest.Mock).mockImplementation(
      (bucket, key) => `https://mock-s3.com/${key}`,
    );

    await getAllSkeins(request, response);

    expect(Skein.find).toHaveBeenCalled();
    expect(getSignedUrlFromS3).toHaveBeenCalledTimes(mockSkeins.length);
    expect(response.status).toHaveBeenCalledWith(200);

    // Note: mongoose adds _doc property to bundle up the skein data,
    // but we don't need that in the unit tests
    expect(response.json).toHaveBeenCalledWith({
      status: 'success',
      results: 2,
      data: {
        skeinsWithImageUrl: [
          { ...mockSkeins[0], imageUrl: 'https://mock-s3.com/image1.png' },
          {
            ...mockSkeins[1],
            imageUrl: 'https://mock-s3.com/skeins/no-image.png', // default image attached
          },
        ],
      },
    });
  });
});
