import { MessageCircle } from "lucide-react";

export interface WhatsAppBtn {
  className?: string;
  text?:string,
  textMessage : string,
}


const WhatsAppButton = ({className = "",text,textMessage}: WhatsAppBtn) => {
  const phoneNumber = '121781343642'; 
  const message = encodeURIComponent(`${textMessage}`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const base = "btn bg-main-color duration-300 hover:bg-hover-main-color  hover:scale-90 transition-all text-white rounded-full font-bold shadow-md border border-none shadow-cyan-500/50 py-6"
    
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`}
    >
       <MessageCircle/> {text}
    </a>
  );
};

export  {WhatsAppButton};
