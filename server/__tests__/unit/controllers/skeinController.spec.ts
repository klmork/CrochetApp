import { getAllSkeins } from '../../../src/controllers/skeinController';
import { Skein } from '../../../src/models/skeinModel';
import { Request, Response } from 'express';

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
    (Skein.find as jest.Mock).mockResolvedValue([]);
    await getAllSkeins(request, response);

    expect(Skein.find).toHaveBeenCalled();
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({
      status: 'success',
      results: 0,
      data: { skeinsWithImageUrl: [] },
    });
  });
  it('returns skeins when skeins', async () => {});
  it('attaches imageUrl when image included in req', async () => {});
  it('attaches imageUrl when no image included in req', async () => {});
});
