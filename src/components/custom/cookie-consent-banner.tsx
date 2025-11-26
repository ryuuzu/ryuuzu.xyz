import React, { useEffect, useState } from 'react';

const CookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('clarity-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (consentGranted: boolean): void => {
    const consentValue: 'granted' | 'denied' = consentGranted
      ? 'granted'
      : 'denied';

    localStorage.setItem('clarity-consent', consentValue);

    if (window.clarity) {
      window.clarity('consentv2', {
        ad_Storage: consentValue,
        analytics_Storage: consentValue,
      });
      console.log(`Clarity consent has been ${consentValue}.`);
    }

    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-4 sm:flex-row">
        <p className="mb-2 flex-grow text-center text-sm sm:mb-0 sm:text-left">
          We use cookies to analyze site traffic and improve your experience. By
          clicking "Accept," you agree to our use of cookies for analytics
          purposes.
        </p>
        <div className="flex flex-shrink-0 gap-x-4">
          <button
            onClick={() => handleConsent(false)}
            className="rounded-md bg-gray-700 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-600"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
