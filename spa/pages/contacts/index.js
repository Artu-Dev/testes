export default () => {
  const container = document.createElement('div');
  
  const template = `
    <h2>Contato</h2>
    <h3>Telefone</h3>
    <p>11 2345-6789</p>
    <h3>Email</h3>
    <p>Xxxxx@gmail.com</p>
    <h3>Endereço</h3>
    <p>Rua dos bobos, Nº0</p>
  `;
  
  container.innerHTML = template;

  return container;
}