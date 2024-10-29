import Script from 'next/script'

export default function EzeeFiberPage() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Find My Bundle */}
        <section className="py-20">
          {/* Find My Bundle: Testing iframe */}
          <div id="find-my-bundle-test-wrapper">
            <Script
              src="https://code.jquery.com/jquery-3.7.1.min.js"
              strategy="afterInteractive"
              integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
              crossOrigin="anonymous"
            />
            <Script src="https://app-stg-744688.mybundle.tv/js/iframeResizer.min.js" strategy="afterInteractive" />
            <iframe
              id="find-my-bundle-test"
              src="https://app-stg-744688.mybundle.tv/ezee/start?iframe"
              scrolling="no"
              style={{ width: '100%', display: 'block', border: 'none' }}
            />
            <Script src="https://app-stg-744688.mybundle.tv/js/ezee.js" strategy="afterInteractive" />
          </div>

          {/* Find My Bundle: Production iframe */}
          <div id="find-my-bundle-prod-wrapper">
            <Script
              src="https://code.jquery.com/jquery-3.7.1.min.js"
              strategy="afterInteractive"
              integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
              crossOrigin="anonymous"
            />
            <Script src="https://mybundle.tv/js/iframeResizer.min.js" strategy="afterInteractive" />
            <iframe
              id="find-my-bundle-prod"
              src="https://mybundle.tv/ezee/start?iframe"
              scrolling="no"
              style={{ width: '100%', display: 'block', border: 'none' }}
            />
            <Script src="https://mybundle.tv/js/ezee.js" strategy="afterInteractive" />
          </div>

          {/* Marketplace iframes */}
          {/* Marketplace: Testing iframe */}
          <div id="marketplace-test-wrapper">
            <Script
              src="https://code.jquery.com/jquery-3.7.1.min.js"
              strategy="afterInteractive"
              integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
              crossOrigin="anonymous"
            />
            <Script src="https://app-stg-744688.mybundle.tv/js/iframeResizer.min.js" strategy="afterInteractive" />
            <iframe
              id="marketplace-test"
              src="https://app-stg-744688.mybundle.tv/ezee/discover?iframe"
              scrolling="no"
              style={{ width: '100%', display: 'block', border: 'none' }}
            />
            <Script src="https://app-stg-744688.mybundle.tv/js/ezee.js" strategy="afterInteractive" />
          </div>

          {/* Marketplace: Production iframe */}
          <div id="marketplace-prod-wrapper">
            <Script
              src="https://code.jquery.com/jquery-3.7.1.min.js"
              strategy="afterInteractive"
              integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
              crossOrigin="anonymous"
            />
            <Script src="https://mybundle.tv/js/iframeResizer.min.js" strategy="afterInteractive" />
            <iframe
              id="marketplace-prod"
              src="https://mybundle.tv/ezee/discover?iframe"
              scrolling="no"
              style={{ width: '100%', display: 'block', border: 'none' }}
            />
            <Script src="https://mybundle.tv/js/ezee.js" strategy="afterInteractive" />
          </div>

          {/* Confirmation Page iframes */}
          {/* Confirmation Page: Testing iframe */}
          <div id="confirmation-test-wrapper">
            <Script
              src="https://code.jquery.com/jquery-3.7.1.min.js"
              strategy="afterInteractive"
              integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
              crossOrigin="anonymous"
            />
            <Script src="https://app-stg-744688.mybundle.tv/js/iframeResizer.min.js" strategy="afterInteractive" />
            <iframe
              id="confirmation-test"
              src="https://app-stg-744688.mybundle.tv/ezee/isp-confirmation?iframe"
              scrolling="no"
              style={{ width: '100%', display: 'block', border: 'none' }}
            />
            <Script src="https://app-stg-744688.mybundle.tv/js/partner.js" strategy="afterInteractive" />
          </div>

          {/* Confirmation Page: Production iframe */}
          <div id="confirmation-prod-wrapper">
            <Script
              src="https://code.jquery.com/jquery-3.7.1.min.js"
              strategy="afterInteractive"
              integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
              crossOrigin="anonymous"
            />
            <Script src="https://mybundle.tv/js/iframeResizer.min.js" strategy="afterInteractive" />
            <iframe
              id="confirmation-prod"
              src="https://mybundle.tv/ezee/isp-confirmation?iframe"
              scrolling="no"
              style={{ width: '100%', display: 'block', border: 'none' }}
            />
            <Script src="https://mybundle.tv/js/partner.js" strategy="afterInteractive" />
          </div>
        </section>
      </main>
    </div>
  )
}
