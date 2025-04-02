import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <Box>
      {data.map((genre) => (
        <li key={genre.id} style={{ listStyle: "none", padding: '5px 0' }} >
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </li>
      ))}
    </Box>
  );
};

export default GenreList;
