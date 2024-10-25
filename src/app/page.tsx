import Script from 'next/script'

export default function EzeeFiberPage() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Find My Bundle */}
        <section className="py-20">
          {/* Find My Bundle: Testing iframe */}
          <div id="find-my-bundle-test-wrapper">
            <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="beforeInteractive" />
            <Script src="https://app-stg-744688.mybundle.tv/js/iframeResizer.min.js" strategy="afterInteractive" />
            <iframe
              id="find-my-bundle-test"
              style={{ border: 'none', overflow: 'hidden' }}
              src="https://app-stg-744688.mybundle.tv/ezee/start?iframe"
              height="550vh"
              width="100%"
            />
            <Script src="https://app-stg-744688.mybundle.tv/js/ezee.js" strategy="afterInteractive" />
          </div>

          {/* Find My Bundle: Production iframe */}
          <div id="find-my-bundle-prod-wrapper">
            <Script src="https://mybundle.tv/js/iframeResizer.min.js" />
            <iframe
              id="find-my-bundle-prod"
              style={{ border: 'none' }}
              src="https://mybundle.tv/ezee/start?iframe"
              height="550vh"
              width="100%"
              scrolling="no"
            />
            <Script src="https://mybundle.tv/js/ezee.js" />
          </div>

          {/* Marketplace iframes */}
          {/* Marketplace: Testing iframe */}
          <div id="marketplace-test-wrapper">
            <Script src="https://app-stg-744688.mybundle.tv/js/iframeResizer.min.js" />
            <iframe
              id="marketplace-test"
              style={{ border: 'none', overflow: 'hidden' }}
              src="https://app-stg-744688.mybundle.tv/ezee/discover?iframe"
              height="3700vh"
              width="100%"
              scrolling="no"
            />
            <Script src="https://app-stg-744688.mybundle.tv/js/ezee.js" />
          </div>

          {/* Marketplace: Production iframe */}
          <div id="marketplace-prod-wrapper">
            <Script src="https://mybundle.tv/js/iframeResizer.min.js" />
            <iframe
              id="marketplace-prod"
              style={{ border: 'none' }}
              src="https://mybundle.tv/ezee/discover?iframe"
              height="3700vh"
              width="100%"
              scrolling="no"
            />
            <Script src="https://mybundle.tv/js/ezee.js" />
          </div>

          {/* Confirmation Page iframes */}
          {/* Confirmation Page: Testing iframe */}
          <div id="confirmation-test-wrapper">
            <Script src="https://app-stg-744688.mybundle.tv/js/iframeResizer.min.js" />
            <iframe
              id="confirmation-test"
              style={{ border: 'none' }}
              src="https://app-stg-744688.mybundle.tv/ezee/isp-confirmation?iframe"
              height="600vh"
              width="100%"
              scrolling="no"
            />
            <Script src="https://app-stg-744688.mybundle.tv/js/partner.js" />
          </div>

          {/* Confirmation Page: Production iframe */}
          <div id="confirmation-prod-wrapper">
            <Script src="https://mybundle.tv/js/iframeResizer.min.js" />
            <iframe
              id="confirmation-prod"
              style={{ border: 'none' }}
              src="https://mybundle.tv/ezee/isp-confirmation?iframe"
              height="630vh"
              width="100%"
              scrolling="no"
            />
            <Script src="https://mybundle.tv/js/partner.js" />
          </div>
        </section>
      </main>
    </div>
  )
}
