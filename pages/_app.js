import "../styles/global.css";
import "nextra-theme-docs/style.css";
import Prism from 'prism-react-renderer/prism';
import { initGoogleGtm } from '../components/gtm';

initGoogleGtm();

(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-kotlin")
require("prismjs/components/prism-csharp")
require("prismjs/components/prism-solidity")
require("prismjs/components/prism-shell-session")
require("prismjs/components/prism-swift")


function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default App;
