
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { siteConfig } from "../../data/siteConfig.js";
import { getImageDimensions } from "../../data/imageDimensions.js";
import "./Navbar.css";

const logoDimensions = getImageDimensions("/elefriendride-logo.svg");

const translationLanguages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  { code: "de", label: "German" },
  { code: "ru", label: "Russian" },
  { code: "ar", label: "Arabic" },
  { code: "zh-CN", label: "Chinese" },
  { code: "ja", label: "Japanese" },
];

const includedLanguages = translationLanguages
  .filter((language) => language.code !== "en")
  .map((language) => language.code)
  .join(",");

export default function Navbar({ currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [translationError, setTranslationError] = useState("");
  const languageControlRef = useRef(null);

  useEffect(() => {
    const translatedLanguage = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("googtrans="))
      ?.split("/")
      .pop();

    if (translationLanguages.some((language) => language.code === translatedLanguage)) {
      setSelectedLanguage(translatedLanguage);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const initializeTranslator = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );

    };

    window.googleTranslateElementInit = initializeTranslator;

    if (window.google?.translate?.TranslateElement) {
      initializeTranslator();
    } else {
      let script = document.querySelector(
        'script[src^="https://translate.google.com/translate_a/element.js"]'
      );

      if (!script) {
        script = document.createElement("script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.onerror = () => {
          setTranslationError(
            "Language translation could not load. Check your connection and try again."
          );
        };
        document.head.appendChild(script);
      }
    }
    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLanguageMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!languageMenuOpen) return;

    const closeOnOutsideClick = (event) => {
      if (!languageControlRef.current?.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [languageMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const changeLanguage = (language) => {
    setLanguageMenuOpen(false);
    setSelectedLanguage(language);

    if (language === "en") {
      const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
      const domains = [undefined, window.location.hostname, `.${window.location.hostname}`];

      domains.forEach((domain) => {
        const domainAttribute = domain ? `; domain=${domain}` : "";
        document.cookie = `googtrans=; ${expires}; path=/${domainAttribute}`;
      });
    } else {
      document.cookie = `googtrans=/en/${language}; path=/; SameSite=Lax`;
    }

    window.location.reload();
  };

  return (
    <>
      <header
        className={`site-navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-container">

          {/* BRAND LOGO */}
          <a
            href="/"
            className="navbar-brand"
            aria-label="Jaipur Elephant Ride homepage"
            onClick={closeMenu}
          >
            <img
              className="brand-mark"
              src="/elefriendride-logo.svg"
              alt=""
              width={logoDimensions.width}
              height={logoDimensions.height}
            />
            <span className="brand-copy">
              <span className="brand-name">
                JAIPUR ELEPHANT RIDE
              </span>

              <span className="brand-location">
                JAIPUR · RAJASTHAN
              </span>
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="desktop-navigation"
            aria-label="Main navigation"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
                aria-current={isCurrentPage(currentPath, item.href) ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div
            ref={languageControlRef}
            className={`language-control ${
              menuOpen ? "mobile-language-active" : ""
            }`}
          >
            <button
              type="button"
              className="language-control-trigger"
              aria-haspopup="listbox"
              aria-expanded={languageMenuOpen}
              onClick={() => setLanguageMenuOpen((isOpen) => !isOpen)}
            >
              <span className="notranslate" translate="no">Select Language</span>
              <ChevronDown size={13} aria-hidden="true" />
            </button>
            {languageMenuOpen && (
              <div
                className="language-control-menu notranslate"
                translate="no"
                role="listbox"
                aria-label="Website languages"
              >
                {translationLanguages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    role="option"
                    aria-selected={selectedLanguage === language.code}
                    onClick={() => changeLanguage(language.code)}
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DESKTOP CTA */}
          <a
            href="/contact"
            className="navbar-cta desktop-cta"
          >
            <span>Plan Your Visit</span>
            <ArrowUpRight size={17} />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>
      </header>
      <div
        id="google_translate_element"
        className="google-translate-engine"
        aria-hidden="true"
      />

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`mobile-navigation ${
          menuOpen ? "mobile-navigation-open" : ""
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-navigation-inner">

          <div className="mobile-menu-heading">
            <span>EXPLORE JAIPUR ELEPHANT RIDE</span>
            <span>JAIPUR · INDIA</span>
          </div>

          <nav aria-label="Mobile navigation">
            {siteConfig.navigation.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="mobile-nav-link"
                aria-current={isCurrentPage(currentPath, item.href) ? "page" : undefined}
              >
                <span className="mobile-nav-number">
                  0{index + 1}
                </span>

                <span>{item.label}</span>

                <ArrowUpRight
                  size={18}
                  className="mobile-nav-arrow"
                />
              </a>
            ))}
          </nav>

          <a
            href="/contact"
            className="mobile-booking-button"
            onClick={closeMenu}
          >
            Plan Your Visit
            <ArrowUpRight size={18} />
          </a>

          <div className="mobile-menu-footer">
            <span>JAIPUR ELEPHANT RIDE</span>
            <span>AN EXPERIENCE IN RAJASTHAN</span>
          </div>

        </div>
      </div>
      {translationError && (
        <p className="language-error" role="status">
          {translationError}
        </p>
      )}
    </>
  );
}

function isCurrentPage(currentPath, href) {
  if (href === "/") return currentPath === "/";
  return currentPath === href || currentPath.startsWith(`${href}/`);
}
