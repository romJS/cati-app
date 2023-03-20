import { RecoilRoot } from "recoil";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <RecoilRoot>
      <div className="absolute inset-0 overflow-hidden">
        <Header />
        <Main />
        <Sidebar />
      </div>
    </RecoilRoot>
  );
}

export default App;
