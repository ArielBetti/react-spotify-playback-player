import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme/default";

// components
import Form from "./Form";
import Header from "./Header";
import PlaygroundGlobalStyles from "../theme/globals";
import { Container } from "./Container";
import { SpotifyPlaybackPlayer } from "react-spotify-playback-player";

// ::
const Playground = () => (
  <ThemeProvider theme={defaultTheme()}>
    <PlaygroundGlobalStyles />
    <Container>
      <Header />
      <Form />
    </Container>
  </ThemeProvider>
);

export default Playground;
