import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space, Avatar } from "antd";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Exchanges from "./components/Exchanges";
import CryptoCurrencies from "./components/CryptoCurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/cryptos/:uuid" element={<CryptoDetails />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoworld <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
