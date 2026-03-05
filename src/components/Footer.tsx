import { GitHub } from "react-feather";

const Footer = () => {
    return (
        <div className="flex items-center justify-center py-8">
            <span className="text-sm text-slate-500 dark:text-slate-400">Created by&nbsp;</span>
            <a
                href="https://github.com/TheBobTheBlob/Experiments-from-Modern-Physics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-accent-blue dark:text-blue-400
                    hover:opacity-80 transition-opacity"
            >
                Punit Turlapati
                <GitHub size={16} className="text-accent-blue" />
            </a>
        </div>
    );
};

export default Footer;
