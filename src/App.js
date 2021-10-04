import './App.css';
import ResetCSS from './global/resetCSS'
import Layout from './components/layout';
import Profile from './components/profile';

function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>    
  );
}

export default App;
