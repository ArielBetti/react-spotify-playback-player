import { usePlayerDevice } from "react-spotify-web-playback-sdk";

// components
import * as Atom from "./atoms";
import Input from "../Input";

// ::
const Status = () => {
  const status = usePlayerDevice();

  if (!status) return null;

  return (
    <Atom.StatusContainer>
      <Input label="DeviceId" readOnly value={status?.device_id || ""} />
      <Input label="Status" readOnly value={status?.status || ""} />
    </Atom.StatusContainer>
  );
};

export default Status;
