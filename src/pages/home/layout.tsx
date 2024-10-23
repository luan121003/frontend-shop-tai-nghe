import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import { Outlet } from "react-router-dom";


function LayoutPages() {
  return (
    <div className="flex flex-col h-screen">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default LayoutPages;