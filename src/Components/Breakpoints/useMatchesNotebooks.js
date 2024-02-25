import Breakpoints from "./BreakpointsDefault";
import useMediaQuery from "@mui/material/useMediaQuery";

const useMatchesNotebooks = () => useMediaQuery(Breakpoints["desktop"]);
export default useMatchesNotebooks;
