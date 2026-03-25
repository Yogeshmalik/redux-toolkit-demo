import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <div className="app-container">
      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <h2>Redux Toolkit Showcase</h2>
          <h3>✨ Special Offer: Free Ice Cream per cake 🎉</h3>
        </section>

        {/* Features Grid */}
        <div className="features-grid">
          <CakeView />
          <IcecreamView />
          <div className="users-section">
            <UserView />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
