import { Container } from "@mui/material";
import AppBar from "~/components/AppBar";
import BoardBar from "./BoardBar";
import BoxContent from "./BoardContent";

function Board() {
  return (
    <Container disableGutters maxWidth="false" sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar />
      <BoxContent />
    </Container>
  );
}

export default Board;
