import logo from "app/assets/apple-touch-icon.png";
import { HeartIcon } from "../icons";

export const InfoSection = () => {
  return (
    <>
      <img src={logo} alt="Logo" className="w-20" />
      <p className="mt-5">
        Made with <HeartIcon className="w-4 h-4 inline text-red-500" /> in
        Melbourn by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/_didley"
          className="text-blue-500 font-bold"
        >
          @_didley
        </a>
        <br />
        <br />
        View the projects code on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/didley/lp-track"
          className="text-gray-500 font-bold"
        >
          GitHub
        </a>
      </p>
    </>
  );
};
