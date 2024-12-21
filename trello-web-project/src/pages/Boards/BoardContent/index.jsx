import Box from "@mui/material/Box";

function BoxContent() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        backgroundColor: "primary.main",
      }}
    >
      Box Content
    </Box>
  );
}

export default BoxContent;
