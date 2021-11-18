import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import Details from "./components/Details";
import { Modal } from "antd";
import React from 'react';
import 'antd/dist/antd.css';
import Chart from "./components/Chart";
import { Input } from 'antd';


function App() {

  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    Axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`
    ).then((res) => {
      setCrypto(res.data.coins);
    });
  }, []);

  const handleClick = (id) => {
    setIsModal(true)
    const dataDetals = crypto.find((item) => item.id === id);
    setData(dataDetals)
  }

  return (
    <>
      <div className="App">
        <h1 style={{color : "#4894b9"}}>All Cryptocurrencies</h1>
        <div className="input">
        <Input 
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        </div>
       
        <table className="table">
          <thead>
            <tr>
              <th scope="col" >Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Available Supply</th>
              <th scope="col">Volume(24hrs)</th>
            </tr>
          </thead>
          <tbody>
            {crypto
              .filter((val) => {
                return val.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((val, id) => {
                return (
                  <>
                    <tr id={id}>
                      <th scope="row" className="rank">{val.rank}</th>
                      <td className="logo" onClick={() => handleClick(val.id)} >
                        <img style={{cursor: "pointer"}} onClick={() => handleClick(val.id)} src={val.icon} alt="logo" width="30px" />
                        <p className="title" onClick={() => handleClick(val.id)}>{val.name}</p>
                      </td>
                      <td className="symbol padding_tbody">{val.symbol}</td>
                      <td className="padding_tbody"><strong>$ {val.price.toFixed(2)}</strong></td>
                      <td className="padding_tbody">$ {val.marketCap}</td>
                      <td className="padding_tbody">{val.availableSupply}</td>
                      <td className="padding_tbody">{val.volume.toFixed(0)}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>

      <Modal
        title="Kiểm tra ví contract"
        visible={isModal}
        onCancel={() => {
          setIsModal(false)
        }}
        onOk={() => {
          setIsModal(false)
        }}
        width="80%"
      >
        <Details data={data} />
        <Chart symbol={data} />
      </Modal>
    </>
  );
}

export default App;