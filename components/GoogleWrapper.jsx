import { useEffect } from 'react';

const GoogleTranslate = () => {
    useEffect(() => {
        const addScript = document.createElement('script');
        addScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        addScript.async = true;
        document.body.appendChild(addScript);

        // Define the callback function that will be called when the script loads
        window.googleTranslateElementInit = () => {
            // Initialize the translation element here
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    autoDisplay: false
                },
                'google_translate_element'
            );
        };
    }, []);

    return <div id="google_translate_element" className="bg-light "></div>;
};

export default GoogleTranslate;
