import React from "react";
import { usePlayerDevice } from "react-spotify-web-playback-sdk";
import { FormContainer } from "./components/Form/atoms";
import Input from "./components/Input";

const Status = () => {
  const status = usePlayerDevice();

  return (
    <FormContainer>
      <Input label="DeviceId" readOnly value={status?.device_id || ''}/>
      <Input label="Status" readOnly value={status?.status || ''}/>
    </FormContainer>
  );
};

export default Status;
