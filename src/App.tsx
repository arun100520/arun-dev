import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import WorkPage from "./pages/Work/WorkPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title =
      pathname === "/work"
        ? "Selected Work — Arun Kumar"
        : "Arun Kumar — Web Designer & Developer";
    if (hash) {
      requestAnimationFrame(() =>
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    } else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MotionConfig>
  );
}
