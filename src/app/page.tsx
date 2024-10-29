import Script from 'next/script'

export default function Test() {
    return (
        <>
            <Script
                src="https://code.jquery.com/jquery-3.7.1.min.js"
                integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
                crossOrigin="anonymous"
            />
            <div id="iframe-wrapper">
                <Script type="text/javascript" src="https://www-app-dev.mybundle.tv/js/iframeResizer.min.js" />

                <iframe
                    id="myIframe"
                    src="https://www-app-dev.mybundle.tv/ezee/start?iframe" // Change this to what ever iFrame you would like to load in.
                    scrolling="no"
                    style={{ width: '100%', display: 'block' }}
                ></iframe>
                <Script type="text/javascript" src="https://www-app-dev.mybundle.tv/js/ezee.js" />
            </div>
        </>
    )
}
