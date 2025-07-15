
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

const PageLoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Active loader à chaque changement de page
    setLoading(true);

    // Cache loader au bout de 700ms
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) return <Loader />;

  return <>{children}</>;
};

export default PageLoaderWrapper;
