import { FC } from "react";

// types
import type { IPopoverProps } from "./types";

// icons
import { MdMenu, MdMenuOpen } from "react-icons/md";

// components
import * as RadixPopover from "@radix-ui/react-popover";
import * as Atom from "./atoms";
import { PlayerButton } from "../Controls/atoms";
import { useTheme } from "styled-components";

// ::
const InfosPopover: FC<IPopoverProps> = ({ children, open, setOpen }) => {
  const theme = useTheme();

  return (
    <RadixPopover.Root open={open} defaultOpen>
      <Atom.PlayerPopoverTrigger>
        <PlayerButton onClick={() => setOpen(!open)}>
          {open ? (
            <MdMenuOpen size={20} color={theme.highLightColor} />
          ) : (
            <MdMenu size={20} color={theme.highLightColor} />
          )}
        </PlayerButton>
      </Atom.PlayerPopoverTrigger>
      <Atom.PlayerPopoverContent collisionPadding={15} side="top">
        {children}
        <Atom.PlayerPopoverArrow />
      </Atom.PlayerPopoverContent>
    </RadixPopover.Root>
  );
};

export default InfosPopover;
