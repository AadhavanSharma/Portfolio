// import {isMobile} from 'react-device-detect'
// Hook to detect if the device is mobile or tablet

import useWindowDimensions from "@/hooks/window-dimensions";

const CallButton: React.FC = () => {
  const phoneNumber = "+918447103820";
  return (
    <div style={CallButtonStyle} id = "call-me-button" className='size-16'>
        <a href={`tel:${phoneNumber}`}>
        <img src="call-now.svg" alt="Dial now"/>
        </a>
    </div>
  );
};

const CallButtonStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  // padding: "12px 13px",
  padding: "7px 6px",
  paddingRight:"7px",
  paddingBottom:"0px",
  // backgroundColor: "#68ca51",
  color: "white",
  // borderWidth: "3px",
  borderWidth: "2px",
  borderColor:"#ffffff",
  borderRadius: "90px",
  boxShadow: "0px 0px 4px 0px rgba(12,12,120,1)",

  cursor: "pointer",
  zIndex: 1000,
};

const EmailMeButton = ()=>{
    return (
        <div id="call-me-button"  style = {MailbuttonStyle} className="border-2 bg-black">
            <a href="mailto:aadhavansharma5700@gmail.com" className="size-10 flex items-center justify-center" onClick={()=>window.open("https://www.gmail.com")}>
                <img src="/gmail/gmail26.svg" alt="Mail Me" className="w-full" />
            </a>
        </div>
    )
}

const MailbuttonStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "12px 13px",
  // backgroundColor: "#d7efff",
  // color: "white",
  borderWidth: "3px",
  borderColor:"#ba5a88",
  borderRadius: "90px",
  // boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  boxShadow: "1px 2px 10px 0px rgba(172,22,20,0.75)",
  cursor: "pointer",
  zIndex: 1000,
};

function CallMeButton(){
  // return <></>
    const {width} = useWindowDimensions();
    if(width>=760){return (<></>)}
    return <CallButton/>
}

export default CallMeButton;
