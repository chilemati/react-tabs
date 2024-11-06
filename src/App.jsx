import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Layout = lazy(() => import("./components/onboarding/Layout"));
const Home = lazy(() => import("./components/home/Home"));

export default function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flexCenter h-[100vh] text-2xl font-bold text-pri ">BravoNet</div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}
