import { useState, useEffect, useMemo, FC } from "react";

// icons
import {
  MdVolumeMute,
  MdVolumeOff,
  MdVolumeDown,
  MdVolumeUp,
} from "react-icons/md";
import { useTheme } from "styled-components";

// components
import * as Atom from "./atoms";
import { useCallback } from "react";
import { IPlayerDevice } from "./types";

const Device: FC<IPlayerDevice> = ({ player }) => {
  const theme = useTheme();

  // local: states
  const [volume, setVolume] = useState<number>(50);

  const VolumeStates = useMemo(() => {
    if (volume === 0) {
      return <MdVolumeOff size={30} color={theme?.disabledColor} />;
    }
    if (volume > 60) {
      return <MdVolumeUp size={30} color={theme?.highLightColor} />;
    }
    if (volume < 40) {
      return <MdVolumeMute size={30} color={theme?.highLightColor} />;
    }
    if (volume > 40) {
      return <MdVolumeDown size={30} color={theme?.highLightColor} />;
    }

    return <MdVolumeMute size={30} color={theme?.highLightColor} />;
  }, [volume, theme]);

  const onChangeVolume = useCallback(
    (volume: number | string) => {
      const newVolume = Number(volume) / 100;

      player?.setVolume(newVolume);
      setVolume(Number(volume));
    },
    [player]
  );

  const initialVolume = async () => {
    return await player?.getVolume().then(
      (res) => {
        setVolume(res * 100);
      },
      () => {
        onChangeVolume(50);
      }
    );
  };

  useEffect(() => {
    initialVolume();
  }, []);

  return (
    <Atom.DeviceControlsContainer>
      <Atom.DeviceVolumeContainer>
        {VolumeStates}
        <Atom.DeviceVolumeSlider
          volumeBar={Number(volume)}
          value={volume}
          type="range"
          min={0}
          max={100}
          onChange={(e) => onChangeVolume(e.target.value)}
        />
      </Atom.DeviceVolumeContainer>
    </Atom.DeviceControlsContainer>
  );
};

export default Device;
