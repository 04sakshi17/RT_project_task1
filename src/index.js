
// import ReactDOM from 'react-dom/client';
// const container = document.getElementById('app');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

// function App() {
//  return <h1>Rick and Morty</h1>;
// }


import { createRoot } from 'react-dom/client';
 import List from './components/List';
 import 'bootstrap/dist/css/bootstrap.min.css';
 const container = document.getElementById('root');
 const root = createRoot(container);
  root.render(<App />);
function App() {
//return <h1>Rick and Morty</h1>;
 return (
 <div>
   <div className='container'></div>
   <nav className='navbar sticky-top navbar-light
 bg-dark'>
<h1 className='navbar-brand text-light'>
 Rick and Morty</h1>
</nav>
 <h1 className='text-primary'>Rick and Morty</h1>
 <List />
 </div>
 );
}


