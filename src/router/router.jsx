import { createBrowserRouter } from "react-router-dom";
import SelectCustomer from "../pages/Register/SelectCustomer";
import LayoutBaseRegister from "../pages/Register/LayoutBaseRegister";
import LayoutBase from "../pages/LayoutBase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        path: "cadastro",
        element: <LayoutBaseRegister />,
        children: [
          {
            path: "",
            element: <SelectCustomer />,
          },
          {
            path: "cliente",
            element: <h1>Interesses</h1>,
          },
          {
            path: "dados-pessoais",
            element: <h1>Dados Pessoais</h1>,
          },
          {
            path: "concluido",
            element: <h1>Concluído</h1>,
          },
        ],
      },
    ],
  },
]);
