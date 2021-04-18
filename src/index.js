import Template from '@templates/Template.js';
// Importamos estilos
import '@styles/main.css';

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
