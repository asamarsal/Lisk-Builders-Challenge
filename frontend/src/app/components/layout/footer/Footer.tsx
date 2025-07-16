import React, { useEffect, useState } from "react";
const Footer = () => {
  const [footerData, setfooterData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/footer-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setfooterData(data?.footerData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="xl:pt-20 pb-6">
      <div className="container">
        <div className="flex justify-center mt-8">
          <p className="text-dark_black/60 dark:text-white/60">
            {footerData?.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
