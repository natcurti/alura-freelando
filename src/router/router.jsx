import { createBrowserRouter } from "react-router-dom";
import SelectCustomer from "../pages/Register/SelectCustomer";
import LayoutBaseRegister from "../pages/Register/LayoutBaseRegister";
import Interests from "../pages/Register/Interests";
import LayoutBase from "../pages/LayoutBase";
import PersonalDataForm from "../pages/Register/PersonalDataForm";
import Concluded from "../pages/Register/Concluded";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cadastro",
        element: <LayoutBaseRegister />,
        children: [
          {
            path: "",
            element: <SelectCustomer />,
          },
          {
            path: "interesses",
            element: <Interests />,
          },
          {
            path: "dados-pessoais",
            element: <PersonalDataForm />,
          },
          {
            path: "concluido",
            element: <Concluded />,
          },
        ],
      },
    ],
  },
]);
