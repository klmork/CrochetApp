import React from "react";
import { Box, Image, Text, Heading, VStack } from "@chakra-ui/react";

interface Dimensions {
  weightInOunces?: number;
  weightInGrams?: number;
  sizeInYards?: number;
  sizeInMeteres?: number;
}

interface Material {
  material: string;
  percent: number;
}

export interface SkeinProps {
  _id: string;
  color: string;
  description?: string;
  brand?: string;
  brandColorName?: string;
  dimensions?: Dimensions;
  weight?: { weight: number; description: string };
  material?: Material[];
  image?: string;
  imageUrl: string;
}

export const Skein: React.FC<SkeinProps> = (skein: SkeinProps) => {
  const { _id, color, brand, description, imageUrl } = skein;
  return (
    <Box
      key={_id}
      display="flex"
      p={5}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      maxW="600px"
      mb={4}
    >
      <Image
        src={imageUrl}
        alt={`${color} skein`}
        boxSize="150px"
        objectFit="cover"
        borderRadius="md"
        mr={5}
      />
      <VStack align="flex-start" flex="1">
        <Heading size="md" color="#55B5A6">
          {brand ? `${brand} - ${color}` : color}
        </Heading>
        {description && (
          <Text fontSize="sm" color="gray.600">
            {description}
          </Text>
        )}
      </VStack>
    </Box>
  );
};
