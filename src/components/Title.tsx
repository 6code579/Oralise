export interface TitleProps {
    title?: string;
    
   
}

const Title = ({ title }: TitleProps) => {
    return (
        <h1 className="main-color font-extrabold text-4xl md:text-5xl leading-tight tracking-wider transition-all duration-500">
            {title}
        </h1>
    );
}

export { Title };