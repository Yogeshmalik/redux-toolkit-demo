import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <div>
      <h1>Vite React Redux Toolkit (RTK) Demo</h1>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
