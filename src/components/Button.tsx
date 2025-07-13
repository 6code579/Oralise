import { Link } from "react-router-dom";
export interface ButtonProps {
    onClick?: () => void;
    label?: string;
    children?: React.ReactNode;
    className?: string;
    to?: string; // For Link navigation
   
}



const Button: React.FC<ButtonProps> = ({ label, to, ...props }) => {
  if (to) {
    return (
      <Link to={to} {...props}>
        <button type="button" className=" btn bg-main-color duration-300 hover:bg-hover-main-color hover:scale-90 transition-all text-white rounded-full font-bold shadow-md  border border-none shadow-cyan-500/50 py-6">{label}</button>
      </Link>
    );
  }
  return <button className=" btn bg-main-color duration-300 hover:bg-hover-main-color hover:scale-90 transition-all text-white rounded-full font-bold shadow-md  border border-none shadow-cyan-500/50 py-6" {...props}>{label}</button>;
};


export default Button;
