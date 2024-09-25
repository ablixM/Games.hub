import { Game } from "../hooks/UseGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        {game.parent_platform.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </CardBody>
    </Card>
  );
}

export default GameCard;
