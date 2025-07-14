import { Link } from "react-router-dom";

export interface ButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
  to?: string;
  changeColor?: boolean
}

const Button = ({ label, className = "", to, onClick, changeColor }: ButtonProps) => {
  const baseStyle = changeColor
    ? `btn bg-main-color duration-300 hover:bg-hover-main-color 
     hover:scale-90 transition-all text-white rounded-full 
     font-bold shadow-md border border-none shadow-cyan-500/50 py-6`
    : `btn bg-secondary-color duration-300 hover:bg-secondary-color-hover 
     hover:scale-90 transition-all text-white rounded-full 
     font-bold shadow-md border border-none  py-6`;


  const buttonElement = (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyle} ${className}`}
    >
      {label}
    </button>
  );

  if (to) {
    return <Link to={to}>{buttonElement}</Link>;
  }

  return buttonElement;
};

export default Button;
