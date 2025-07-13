export interface ButtonProps {
    onClick?: () => void;
    label?: string;
    children?: React.ReactNode;
    className?: string;
   
}

function Button({ label }: ButtonProps) {
    return (
        <button className=" btn bg-main-color duration-300 hover:bg-hover-main-color hover:scale-90 transition-all text-white rounded-full font-bold shadow-md  border border-none shadow-cyan-500/50 py-6">
            {label}
        </button>
    );
}


export default Button;