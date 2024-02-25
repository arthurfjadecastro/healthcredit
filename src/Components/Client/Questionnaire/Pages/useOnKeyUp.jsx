import { useRef } from "react";
import useSkippableEffect from "./useSkippableEffect";

const useOnKeyUp = (handler) => {
  const ref = useRef(null);

  useSkippableEffect(() => {
    ref.current.addEventListener("keyup", (event) => handler(event, ref));
    return () => {
      ref.current.removeEventListener("keyup", (event) => handler(event, ref));
    };
  }, [ref.current]);

  return ref;
};

export default useOnKeyUp;
