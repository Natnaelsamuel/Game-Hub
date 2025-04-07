import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Box, HStack, Image, Link, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Box>
      {data.map((genre) => (
        <li key={genre.id} style={{ listStyle: "none", padding: "5px 0" }}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              _hover={{
                textDecoration: "underline",
                textDecorationColor: "white",
              }}
            >
              {genre.name}
            </Link>
          </HStack>
        </li>
      ))}
    </Box>
  );
};

export default GenreList;
