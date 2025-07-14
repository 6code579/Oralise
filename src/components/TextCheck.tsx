import { Check } from "lucide-react";
export interface TextCheckProps {
    text?: string | number,
    table?: String[]
    color?: string

}
const TextCheck = ({ text, table ,  color }: TextCheckProps) => {
    return (
        <>
            {table && Array.isArray(table) ? (
            <ul className="list-disc pl-5">
                {table.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                    <Check size={20} className={color} />
                    <span className="text-base font-medium">{item}</span>
                </li>
                ))}
            </ul>
            ) : (
            <div className="flex gap-2">
                <Check size={20} className={color} />
                <span className="text-base font-medium">{text}</span>
            </div>
            )}
        </>
    )
}


export { TextCheck }
