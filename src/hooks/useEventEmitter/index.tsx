import { DependencyList, useCallback, useContext, useEffect } from "react";
import { EmitterOutsideContext } from "./context";
import { BaseEvents } from "./emitter";

function useEmit<Events extends BaseEvents>() {
  const context: any = useContext(EmitterOutsideContext);
  return useCallback(
    <E extends keyof Events>(type: E, ...args: Events[E]) => {
      context?.emit(type, ...args);
    },
    [context]
  );
}

export function useEventEmitter<Events extends BaseEvents>(): any {
  const emit = useEmit();
  return {
    useListener: <E extends keyof Events>(
      type: E,
      listener: (...args: Events[E]) => void,
      deps: DependencyList = []
    ) => {
      const context: any = useContext(EmitterOutsideContext);
      useEffect(() => {
        context?.add(type, listener);
        return () => {
          context?.remove(type, listener);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [listener, type, ...deps]);
    },
    emit,
  };
}
