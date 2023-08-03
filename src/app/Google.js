import Script from 'next/script';

const GoogleTagManager = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-F4RNYGL5SL"
      strategy="afterInteractive"
    />
    <Script strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-F4RNYGL5SL');
      `}
    </Script>
  </>
);

export default GoogleTagManager;
