import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TermekCard from './TermekCard';

function Data() {
  const [termekData, setTermekData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jwt.sulla.hu/termekek', {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('LoginToken')}`
          }
        });
        setTermekData(response.data);
        setLoading(false);
        console.log("Data successfully retrieved:", response.data);
      } catch (error) {
        console.error("Data failed to be retrieved:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ width: '50%', margin: 'auto' }}>
        <h1>Data</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {termekData.map((data, index) => (
              <TermekCard key={index} data={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Data;
