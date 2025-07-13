export interface ButtonProps {
    onClick?: () => void;
    label?: string;
    children?: React.ReactNode;
   
}

function Button({ label }: ButtonProps) {
    return (
        <button className="btn bg-main-color duration-300 hover:bg-hover-main-color text-white rounded-full font-bold shadow-md  border border-none shadow-cyan-500/50 py-6">
            {label}
        </button>
    );
}


export { Button };