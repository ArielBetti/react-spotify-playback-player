import { ReactElement, FC, createContext } from "react";
import { EventEmitter } from "./emitter";

export const EmitterOutsideContext = createContext<EventEmitter<any>>(
  null as any
);

export const EventEmitterContext: FC<any> = ({
  children,
}: {
  children: ReactElement;
}) => (
  <EmitterOutsideContext.Provider value={new EventEmitter()}>
    {children}
  </EmitterOutsideContext.Provider>
);
