import TodosProvider from "@/providers/TodosProvider";

import Dashboard from "@/components/Dashboard";
import MainContent from "@/components/MainContent";

import "./App.css"

function App() {
  return (
    <TodosProvider>
      <Dashboard />
      <MainContent />
    </TodosProvider>
  );
}

export default App;
