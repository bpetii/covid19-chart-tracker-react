import React, { useEffect, useState } from "react";

import styles from "./App.module.css";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { fetchData } from "./api";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedData = await fetchData();
      setData({ ...fetchedData });
    };

    fetchAPI();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker onChangeCountry={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
