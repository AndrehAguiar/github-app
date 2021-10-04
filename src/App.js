import './App.css';
import ResetCSS from './global/resetCSS'
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';

function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>    
  );
}

export default App;
