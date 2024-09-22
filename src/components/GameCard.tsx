import {Game} from "../hooks/UseGames.ts";
import {Card, CardBody, Heading, Image} from "@chakra-ui/react";


interface  props{
    game: Game
}
function GameCard({game}: props) {
    return (
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;