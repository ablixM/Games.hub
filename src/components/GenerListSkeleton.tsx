import { HStack, Skeleton, SkeletonCircle } from "@chakra-ui/react";

export const GenreListSkeleton = () => {
  return (
    <HStack width={"100%"} marginY={2}>
      <SkeletonCircle boxSize={8} borderRadius={8} />
      <Skeleton height={6} width={"50%"}></Skeleton>
    </HStack>
  );
};

export default GenreListSkeleton;
