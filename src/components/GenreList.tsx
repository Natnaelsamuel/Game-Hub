import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Box, Heading, HStack, Image, Link, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <Box>
        {data?.results.map((genre) => (
          <li key={genre.id} style={{ listStyle: "none", padding: "5px 0" }}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
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
    </>
  );
};

export default GenreList;
