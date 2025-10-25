import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import useWindowDimensions from "@/hooks/window-dimensions";
import ResumeWindow from "./resume-window";

export const FirstPrint = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="flex items-center justify-end backdrop-blur-lg border-1 rounded-3xl border-gray-300">
      <CenterElement />
      <div
        className={`border-0 grid grid-rows-1 items-center  h-full ${
          width < 760 ? "w-2/4" : "w-33/100"
        }`}
      >
        {width < 760 && <NamePlate />}
        <AboutAtTop />
      </div>
    </div>
  );
};

const NamePlate = () => {
  return (
    <div className="mx-2  rounded-2xl border-black-200 border-2 flex items-center justify-evenly p-4 md:gap-10 -space-x-1 sm:flex grid-cols-2 sm:-space-x-10">
      <div
        className="text-md border-0 md:text-xl lg:text-3xl relative right-2"
        style={{ fontFamily: "Michroma" }}
      >
        Aadhavan Sharma
      </div>
      <img
        className="border-0 size-4 relative top-1 right-2 lg:right-0 lg:top-1 lg:size-6"
        src="/verified.png"
      />
    </div>
  );
};

const CenterElement = () => {
  const { width } = useWindowDimensions();
  return (
    <div
      className={`w-50/100 border-0 flex items-center ${
        width >= 760
          ? "w-67/100 grid-cols-2 gap-0 h-full justify-end"
          : "flex-wrap pr-0 grid-rows-2 gap-0 h-3/4 relative bottom-10"
      }`}
    >
      <Avatar className={`border-0 flex items-center h-full`}>
        <AvatarImage
          src="/pfp6.jpg"
          alt="@aadhavan"
          className="max-h-[10rem] justify-end cursor-pointer rounded-full border-2 p-0.5 border-gray-300"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {width < 760 && (
        <div className=" m-1 grid grid-cols-2 border-0 border-red-200 gap-0 md:justify-items-center">
          <img src="/gmail/gmail26.svg" className="border-0" />
          <div className="border-0 w-min relative right-16">
            aadhavansharma5700
            <p className="text-xs border-0 border-green-400 text-gray-500 relative bottom-1 left-16">
              @gmail.com
            </p>
          </div>
        </div>
      )}

      {width >= 760 && <NamePlate />}
    </div>
  );
};

export const AboutAtTop = () => {
  const { width } = useWindowDimensions();
  var items = [
    "+918447103820",
    "Bengaluru, Karnatake, IND.",
    "aadhavan-sharma.netlify.app",
    "resume",
  ];
  var bulletIcon = [
    "/dial.svg",
    "/location/loc50.png",
    "website/web100.png",
    "resume.png",
  ]; // your icon link

  if (width >= 760) items = ["aadhavansharma5700@gmail.com", ...items];
  if (width >= 760) bulletIcon = ["./gmail/gmail48.svg", ...bulletIcon];
  return (
    <ul className="grid items-center border-spacing-3 p-4 justify-center border-gray-300 bg-gray-300/10 rounded-2xl">
      {items.map((item, index) => (
        <li
          className="text-sm lg:text-xl border-0"
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "6px",
            marginBottom: "8px",
          }}
        >
          <img
            src={bulletIcon[index]}
            alt="bullet icon"
            style={{ height: "20px", marginRight: "8px" }}
          />

          {item === "aadhavan-sharma.netlify.app" && (
            <a href={`https://${item}`} target="_blank">
              {item}
            </a>
          )}
          {item !== "aadhavan-sharma.netlify.app" && item !== "resume" && item}
          {item === "resume" && <ResumeWindow />}
        </li>
      ))}
      {/* <ResumeWindow/> */}
    </ul>
  );
};

export default AboutAtTop;
