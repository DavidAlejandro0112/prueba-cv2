"use client"

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from "../contexts/ThemeContext";

const GitHubToggle = () => {
    const { theme } = useTheme();

    return (
        <div className="fixed left-6 top-70">
        <Link 
            href="https://github.com/DavidAlejandro0112"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center p-2 rounded-[50%] font-semibold text-blue-300 transition-all duration-300 ease-in-out
                ${
                    theme === "light"
                        ? "text-blue-300 hover:text-blue-700"
                        : "text-blue-300 hover:text-blue-500"} transition-colors`
                }
        >
            <FontAwesomeIcon icon={faGithub} className="lucide w-5 h-5 mr-3" size="lg"style={{ verticalAlign: 'middle' }} />
            <span style={{ verticalAlign: 'middle' }}>GitHub</span>
        </Link>
        </div>
    );
};

export default GitHubToggle;

