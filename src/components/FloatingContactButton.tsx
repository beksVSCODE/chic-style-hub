import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 animate-fade-in">
          <a
            href="https://wa.me/79991234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#229ED9] text-white px-4 py-3 rounded-full shadow-lg whitespace-nowrap"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.1.154.232.17.324.015.093.033.302.019.467z"/>
            </svg>
            <span className="font-medium">Telegram</span>
          </a>
          <a
            href="tel:+79991234567"
            className="flex items-center gap-3 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">Позвонить</span>
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-foreground text-background rotate-90" : "bg-primary text-primary-foreground"
        }`}
        aria-label="Связаться с нами"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingContactButton;
