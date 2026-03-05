import { GitHub } from "react-feather";

const Footer = () => {
    return (
        <div className="flex items-center justify-center py-8">
            <span className="text-sm font-bold text-gray-900 dark:text-gray-100">Created by&nbsp;</span>
            <a
                href="https://github.com/TheBobTheBlob/Experiments-from-Modern-Physics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-bold text-gray-900 dark:text-gray-100
                    hover:text-modblue-500 dark:hover:text-modblue-300 transition-colors"
            >
                Punit Turlapati
                <GitHub size={16} />
            </a>
        </div>
    );
};

export default Footer;
