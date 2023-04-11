import React, { useEffect, useState } from "react";

export default function Home() {
  const [fetchData, setFetchData] = useState([]);
  const url = "https://localhost:44371/Novatech";
  const fetchDataFromBackend = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setFetchData(result);
      });
  };

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  return (
    <table class="table-auto">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {fetchData.length > 0 ? (
          fetchData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                <td>{data.status}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              Loading...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
