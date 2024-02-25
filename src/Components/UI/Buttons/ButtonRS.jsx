import React, { useState } from "react";
import { RenderIf } from "../../../Utils";
import useMatchesSmartphone from "../../Breakpoints/useMatchesSmartphone"


const ButtonRS = ({ textButton, variant }) => {
  const isMobile = useMatchesSmartphone();

  const [isHovered, setIsHovered] = useState(true);

  const buttonStyle = {
    cursor: "pointer",
    backgroundColor: !isHovered ? "#25D365" : " #1eaf57",
    border: "1px solid #25D366",
    padding: "5px",
    position: "relative",
    width: !isHovered ? "3.2em" : "100%",
    height: "3em",
    transition: "0.5s",
    fontSize: "17px",
    borderRadius: "0.4em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const appStoreStyle = {
    backgroundColor: !isHovered ? "#0070c9" : "#0060ad",
    border: "1px solid #0070c9",
    color: "#fff",
  };

  const googlePlayStyle = {
    backgroundColor: !isHovered ? "#D93025" : "#B61C11",
    border: "1px solid #D93025",
    color: "#fff",
  };

  const openFinanceStyle = {
    backgroundColor: !isHovered ? "#0070c9" : "#0070c9",
    border: "1px solid #0070c9",
    color: "#fff",
  };

  const textManager = {
    // fontSize: !isHovered ? "16px" : "0",
    margin: "0",
    padding: "8px",
    transition: ".5s",
    color: "#25D366",
    textWrap: "noWrap",
    // display: isMobile ? "none": {}
  };
  const textManageriOS = {
    color: "#0060ad",
  };

  const textManagerAndroid = {
    color: "#D93025",
  };

  const textFinance = {
    color: "#0060ad",
  };

  const textStyle = {
    // fontSize: !isHovered ? "0px" : "16px",
    display: isMobile ? "none" : {},
    transition: ".5s",
    // color: isHovered ? "#fff" : "#fff",
    textWrap: "noWrap",
    top: "35%",
    margin: "0",
    padding: "0",
    left: "0",
    textAlign: "justify",
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    marginTop: 8,
  };

  const svgStyle = {
    position: "absolute",
    top: "50%",
    right: "0.5em",
    margin: "0",
    padding: "0",
    opacity: 1,
    transition: "0.5s",
    height: "3em",
    width: "32px",
    fill: "mix(#25D366, black, 10%)",
    color: "white",
    transform: "translateY(-50%)",
  };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

  const handleOpenAppiOS = () => {
    window.open("https://apps.apple.com/br/app/caixa/id490813624", "_blank");
  };

  const handleOpenAppAndroid = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=br.com.gabba.Caixa&hl=pt_BR",
      "_blank"
    );
  };

  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=8001040104", "_blank");
  };

  const handleOpenFinance = () => {
    window.open(
      "https://www.caixa.gov.br/open-finance/Paginas/default.aspx",
      "_blank"
    );
  };

  return (
    <>
      <button
        onClick={
            variant === "iOS"
            ? handleOpenAppiOS
            : variant === "googlePlay"
            ? handleOpenAppAndroid
            : variant === "openFinance"
            ? handleOpenFinance
            : () => {}
        }
        style={
          variant === "whatsapp"
            ? buttonStyle
            : variant === "iOS"
            ? { ...buttonStyle, ...appStoreStyle }
            : variant === "googlePlay"
            ? { ...buttonStyle, ...googlePlayStyle }
            : variant === "openFinance"
            ? { ...buttonStyle, ...openFinanceStyle }
            : {}
        }
        // onMouseEnter={isMobile ? null : handleMouseEnter}
        // onMouseLeave={isMobile ? null : handleMouseLeave}
      >
        <RenderIf predicate={variant === "whatsapp"}>
          <p style={textStyle}>WhatsApp CAIXA</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
            style={svgStyle}
          >
            <path
              fillRule="evenodd"
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
            ></path>
          </svg>
        </RenderIf>
        <RenderIf predicate={variant === "openFinance"}>
          <p style={textStyle}>Open Finance</p>
          <svg
            width="40"
            height="40"
            viewBox="0 0 111 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48.512 64.2013L70.5664 41.925L89.1498 78.7941H55.8634L48.512 64.2013Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.807373 78.7941H34.0937L70.5663 41.925H37.28L0.807373 78.7941Z"
              fill="#F39200"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.3992 1.31322L55.6677 1.29523L74.2689 38.1823H40.9825L22.3992 1.31322Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M77.4728 1.31348L63.0369 15.9064L74.2688 38.1826L110.741 1.31348H77.4728Z"
              fill="#F39200"
            />
          </svg>
        </RenderIf>
        <RenderIf predicate={variant === "googlePlay"}>
          <p style={textStyle}>Google Play</p>

          <svg
            style={svgStyle}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-google-play"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"
            />
          </svg>
        </RenderIf>
        <RenderIf predicate={variant === "iOS"}>
          <p style={textStyle}>App Store</p>
          <svg
            style={svgStyle}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-apple"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"
            />
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
          </svg>
        </RenderIf>
      </button>
      {/* <p
        style={
          variant === "whatsapp"
            ? textManager
            : variant === "iOS"
            ? { ...textManager, ...textManageriOS }
            : variant === "googlePlay"
            ? { ...textManager, ...textManagerAndroid }
            : variant === "openFinance"
            ? { ...textManager, ...textFinance }
            : {}
        }
      >
        {textButton}
      </p> */}
    </>
  );
};

export default ButtonRS;
