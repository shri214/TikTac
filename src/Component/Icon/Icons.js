import { FaRegCircle, FaTimes } from "react-icons/fa";

const Icon = ({ ic }) => {
  switch (ic) {
    case "circle":
      return <FaRegCircle />;
    case "cross":
      return <FaTimes />;
  }
};

export default Icon;
