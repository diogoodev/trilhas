
export default function App() {
  const entrada = document.getElementById('num').value;
  console.log(entrada);
  //const NUMBER = 100;
  /*let numeroSecreto = parseInt(Math.random() * NUMBER + 1) ;
  
  usseEffect(() => {
    alert('Boas vindas ao jogo do número secreto')
  }, []) */
  return (
    <>
      <div className="container">
        <div className="container__conteudo">
            <img src="./img/robot.png" alt="robô mergulhador" className="container__imagem-robo" />
            <div className="container__informacoes">

              <input type="number" name="num" id="num" style={{ width: '100%', color: '#000', padding: '100px'}}/>
                <img src="./img/trophy.png" alt="ícone de um troféu" />
                 <div className="container__texto">
                    <h1>Você <span className="container__texto-azul">acertou!</span></h1>
                    <h2>Você descobriu o número secreto!</h2>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

