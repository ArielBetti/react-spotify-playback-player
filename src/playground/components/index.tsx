import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme/default";

// components
import Form from "./Form";
import { Container } from "../../components";
import Header from "./Header";

// ::
const Playground = () => (
  <ThemeProvider theme={defaultTheme()}>
    <Container>
      <Header />
      <Form />
    </Container>
  </ThemeProvider>
);

export default Playground;
