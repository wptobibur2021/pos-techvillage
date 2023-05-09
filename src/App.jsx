import PointofSales from "./pages/POS/PointofSales";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Provider store={store}>
      <PointofSales />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Provider>
  );
}

export default App;
