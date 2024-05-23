import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../config";

const GetAPIData = (urlPath) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const res = await axios.get(`${baseUrl}` + urlPath);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPIData();
  }, [urlPath]);

  return data;
};

export default GetAPIData;
