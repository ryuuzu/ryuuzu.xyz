import React, { useEffect, useState } from 'react';

// Using React.FC (Functional Component) defines the component's type.
// It's a good practice, though not strictly required for this component.
const CookieConsentBanner: React.FC = () => {
  // Explicitly type the state variable as a boolean.
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    // localStorage can return null, so we check for its absence.
    const consent = localStorage.getItem('clarity-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  // Type the function's argument as a boolean and its return type as void.
  const handleConsent = (consentGranted: boolean): void => {
    // Create a strongly-typed variable for the consent value.
    const consentValue: 'granted' | 'denied' = consentGranted
      ? 'granted'
      : 'denied';

    localStorage.setItem('clarity-consent', consentValue);

    // The `if (window.clarity)` check acts as a type guard,
    // ensuring the function exists before calling it.
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

  // The JSX remains the same, using Tailwind CSS classes.
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
