// components
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import * as Atom from "./atoms";

// ::
const Header = () => {
  return (
    <Atom.HeaderContainer>
      <a target="_blank" href="https://github.com/ArielBetti" rel="noreferrer">
        <Atom.HeaderItem>
          <BsGithub size="20" />
        </Atom.HeaderItem>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ariel-betti/"
        rel="noreferrer"
      >
        <Atom.HeaderItem>
          <BsLinkedin size="20" />
        </Atom.HeaderItem>
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/@arielbetti"
        rel="noreferrer"
      >
        <Atom.HeaderItem>
          <BsYoutube size="20" />
        </Atom.HeaderItem>
      </a>
    </Atom.HeaderContainer>
  );
};

export default Header;
