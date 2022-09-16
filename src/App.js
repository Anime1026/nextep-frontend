
import './App.css';
import Layout from './Components/global/Layout';
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import BlockchainProvider from "./context";
import "./Assets/css/nucleo-icons.css"
import "./Assets/css/app.css"
import "./Assets/css/nucleo-svg.css"
import "./Assets/css/index.css"
import "./Assets/css/custom.css"
import "./Assets/css/mycss.css"
function App() {
  return (
    <>
      <BlockchainProvider>
        <Layout />
      </BlockchainProvider>
      <NotificationContainer />
    </>
  );
}

export default App;