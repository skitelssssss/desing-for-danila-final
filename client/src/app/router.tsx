import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Header from "@/widgets/header/ui/Header";
import Footer from "@/widgets/footer/ui/Footer";
import Home from "@/pages/home/ui/Home";
import Products from "@/pages/products/ui/Products";
import ProductDetail from "@/pages/product-detail/ui/ProductDetail";
import Services from "@/pages/services/ui/Services";
import About from "@/pages/about/ui/About";
import Contact from "@/pages/contact/ui/Contact";
import Cart from "@/pages/cart";
import NotFound from "@/pages/not-found/ui/NotFound";

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export function Router() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}
