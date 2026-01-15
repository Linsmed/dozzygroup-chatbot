import './globals.css'

export const metadata = {
  title: 'Dozzy Group',
  description: 'Redefining the Future through Innovation and Creativity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/* Kommunicate Chatbot Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, m){
                var kommunicateSettings = 
                  {"appId":"1942e243204bc19d23715ed36e7001ecd","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); 
                s.type = "text/javascript"; 
                s.async = true;
                s.src = "https://widget.kommunicate.io/kommunicate-widget-3.0.min.js";
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
