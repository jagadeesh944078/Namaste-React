import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handlerOnline = () => {
      setIsOnline(true);
    };

    const handlerOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handlerOnline);
    window.addEventListener("offline", handlerOffline);

    return () => {
      window.removeEventListener("online", handlerOnline);
      window.removeEventListener("offline", handlerOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
