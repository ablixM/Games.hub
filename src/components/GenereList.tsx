import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/UseGenre";
import getCroppedImageUrl from "../Services/image-url";
import GenreListSkeleton from "./GenerListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenereList = ({ onSelectedGenre }: Props) => {
  const { data, isLoadig, error } = useGenres();

  if (error) return null;
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  return (
    <List>
      {isLoadig &&
        skeletons.map((skeleton) => (
          <HStack key={skeleton}>
            <GenreListSkeleton />
          </HStack>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize={8}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontSize={"large"}
              variant="link"
              onClick={() => {
                onSelectedGenre(genre);
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
