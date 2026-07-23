import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-paper px-6">
      <div className="text-center">
        <p className="section-index mb-4">404</p>
        <h1 className="font-display text-4xl text-ink mb-3">Lost the signal</h1>
        <p className="text-ink-mid mb-8">That page isn&apos;t in the field notes.</p>
        <a href="/" className="btn-terra">
          Back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
