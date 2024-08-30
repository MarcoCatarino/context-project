import Dashboard from "@/components/Dashboard";
import MainContent from "@/components/MainContent";

import Layout from "./Layout";
import './App.css';

function App() {
  console.log("App");
  return (
    <Layout>
      <Dashboard />
      <MainContent />
    </Layout>
  );
}

export default App;
