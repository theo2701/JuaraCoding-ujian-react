import React from "react";
import LoginPage from "./loginPage";
import ProductCatalogPage from "./components/Product/ProductCatalog";
import { CartProvider } from "./Context/CartContext";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import AddProduct from "./components/Product/AddProduct";
import LayoutPage from "./components/LayoutPage";
import OtherPage from "./components/OtherPage";
import MissingPage from "./components/MissingPage";
import PricingPage from "./components/PricingPage";
import FeaturePage from "./components/FeaturePage";
import CartPage from "./components/Cart/Cart";

// function App() {
//   return (
//     // <LoginPage/>
//     <CartProvider>
//       <Router>
//         <Switch>
//           <Route path="/" exact component={LoginPage} />
//           <Route path="/catalog" component={ProductCatalogPage} />
//           {/* <Route path="/cart" component={CartPage} /> */}
//         </Switch>
//       </Router>
//     </CartProvider>
//   );
// };
// const App = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layouts />,
//     children: [
//       {
//         path: "/",
//         index: true,
//         element: <LoginPage />,
//       },
//       {
//         path: "/catalog",
//         element: <ProductCatalogPage />,
//       },
//       {
//         path: "/addcart",
//         element: <AddProduct />,
//       },
//     ],
//   },
// {
//   path:'/catalog',
//   element:<ProductCatalogPage/>
// },
// {
//   path:'/addcart',
//   element:<AddProduct/>
// }
// ]);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" index element={<LoginPage />} />
          <Route path="catalog" element={<ProductCatalogPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="feature" element={<FeaturePage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>

        <Route path="/other" element={<OtherPage />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
