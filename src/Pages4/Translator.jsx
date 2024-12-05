import React, { useState, useEffect } from "react";
import styles from './Translator.module.css';

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "de", name: "German" },
  { code: "fr", name: "French" },
  { code: "pt", name: "Portuguese" },
  { code: "ja", name: "Japanese" },
  { code: "it", name: "Italian" },
];

const Translator = () => {
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [sourceText, setSourceText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (sourceText) {
      const delay = setTimeout(() => {
        handleTranslate();
      }, 500);

      return () => clearTimeout(delay);
    }
  }, [sourceText, targetLang, sourceLang]);

  const handleTranslate = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${sourceText}!&langpair=${sourceLang}|${targetLang}`
      );

      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }

      const data = await response.json();

      setTranslatedText(data.responseData.translatedText);
    } catch (err) {
      setError(`Error translating: ${err.message}. Try again`);
    } finally {
      setIsLoading(false);
    }
  };

  const swapTranslate = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <div className={styles.Trcontainer}>
      <div className={styles.TrinnerContainer}>
        <h1 className={styles.Trheader}>Translator</h1>

        <main className={styles.TrmainContent}>
          <div className={styles.TrcardContainer}>
            <div className={styles.TrcardHeader}>
              <select
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
                className={styles.Trselect}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>

              <button
                onClick={swapTranslate}
                className={styles.Trbutton}
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </button>

              <select
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className={styles.Trselect}
              >
             
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name} 
                  </option>
                  
                ))} 
              </select>
            </div>

            <div className={styles.TrtextContainer} >
              <div >
                <textarea
                  value={sourceText}
                  onChange={(e) => setSourceText(e.target.value)}
                  placeholder="Type your text"
                  className={styles.Trtextarea}
                ></textarea>
              </div>

              <div className={styles.TrtranslatedTextContainer}>
                {isLoading ? (
                  <div className={styles.TrloadingSpinner}>
                    <div></div>
                  </div>
                ) : (
                  <p className={styles.Trp} > {translatedText} </p>
                )}
              </div>
            </div>

            {error && (
              <div className={styles.TrerrorMessage}>
                {error}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Translator;
