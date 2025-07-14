export interface TitleProps {
    title?: string;
    color?:boolean
    className?:string
    
   
}

const Title = ({ title,color, className =" " }: TitleProps) => {
     const baseStyle = color
    ? `main-color font-extrabold text-4xl md:text-5xl leading-tight tracking-wider transition-all duration-500 `
    : `secondary-color font-extrabold text-4xl md:text-5xl leading-tight tracking-wider transition-all duration-500  `;
    return (
        <h1 className={`${baseStyle} ${className}`}>
            {title}
        </h1>
    );
}

export { Title };