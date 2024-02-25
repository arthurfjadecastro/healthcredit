import Breakpoints from "./BreakpointsDefault";
import useMediaQuery from "@mui/material/useMediaQuery";
const useMatchesSmartphone = () => useMediaQuery(Breakpoints["mobile"]);
export default useMatchesSmartphone;
