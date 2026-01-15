
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, m){
                var kommunicateSettings = {
                  "appId": "1942e243204bc19d23715ed36e7001ecd"
                };
                var s = document.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0];
                h.appendChild(s);
                window.kommunicate = m;
                m._globals = kommunicateSettings;
              })(document, window.kommunicate || {});
            `,
          }}
        />
      </body>
    </html>
  )
}
