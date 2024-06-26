import { GithubIcon } from "../../Icons/github";
import { GmailIcon } from "../../Icons/gmail";
import { LinkedInIcon } from "../../Icons/linked-in";
import { MoonIcon } from "../../Icons/moon";
import type { MouseEventHandler } from "react";
import ReactGA from "react-ga4";
import { ResumeIcon } from "../../Icons/resume";
import { SunIcon } from "../../Icons/sun";
import type { Theme } from "../../context/utils";
import { TwitterIcon } from "../../Icons/twitter";
import { WhatsappIcon } from "../../Icons/whatsapp";
import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";

interface SocialSidebarProps {
  theme?: Theme;
  toggleTheme?: () => void;
}

export function SocialSidebar({
  theme,
  toggleTheme,
}: SocialSidebarProps): JSX.Element {
  const handleResumeClick: MouseEventHandler<HTMLAnchorElement> = () => {
    ReactGA.event({
      category: "Resume",
      action: "open_resume",
    });
  };
  return (
    <>
      {/* z-index is provided because this component is getting overlaid by Introduction and Footer. */}
      <div className="fixed bottom-0 left-0 p-4 flex flex-col gap-4 z-[1]">
        <Fade cascade damping={0.5} triggerOnce>
          <a
            href="https://www.linkedin.com/in/raushang4/"
            title="LinkedIn"
          >
            <LinkedInIcon className="h-6 hover:scale-150 transition-transform fill-primary hover:fill-[#0077B5]" />
          </a>
          <a href="https://twitter.com/raushang_4" title="Twitter">
            <TwitterIcon className="h-6 hover:scale-150 transition-transform fill-primary hover:fill-[#1DA1F2]" />
          </a>
          <a href="https://github.com/raushang4/raushang4" title="Github">
            <GithubIcon className="h-6 hover:scale-150 transition-transform fill-primary hover:fill-black dark:hover:fill-white" />
          </a>
          <a href="https://wa.me/+9304995677" title="Whatsapp">
            <WhatsappIcon className="h-6 hover:scale-150 transition-transform fill-primary hover:fill-[#25D366]" />
          </a>
          <a href="mailto:raushang4@gmail.com" title="Email">
            <GmailIcon className="h-6 hover:scale-150 transition-transform fill-primary hover:fill-[#F2A60C]" />
          </a>
        </Fade>
      </div>
      {/* z-index is provided because this component is getting overlaid by Introduction and Footer. */}
      <div className="fixed right-0 top-2 z-[1]">
        <Slide direction="right" triggerOnce delay={5 * 500}>
          <a
            href="mailto:raushang4@gmail.com"
            className="hover:text-red-600"
            style={{ writingMode: "vertical-rl" }}
          >
            raushang4@gmail.com
          </a>
        </Slide>
      </div>
      <div className="absolute z-10 right-8 top-2 flex flex-row gap-4">
        <AttentionSeeker effect="bounce" cascade triggerOnce delay={1500}>
          <button
            onClick={toggleTheme}
            title={
              theme === "dark"
                ? "Toggle to Light Theme"
                : "Toggle to Dark Theme"
            }
          >
            {theme === "dark" ? (
              <SunIcon className="h-8 fill-[#01CBC6] hover:scale-150 transition-transform" />
            ) : (
              <MoonIcon className="h-8 fill-[#01CBC6] hover:scale-150 transition-transform" />
            )}
          </button>
          <a
            href="/portfolio/Qurban-Ahmad-Latest.pdf"
            onClick={handleResumeClick}
            target="_blank"
          >
            <button title="resume">
              <ResumeIcon className="h-8 fill-[#25CCF7] hover:scale-150 transition-transform" />
            </button>
          </a>
        </AttentionSeeker>
      </div>
    </>
  );
}
