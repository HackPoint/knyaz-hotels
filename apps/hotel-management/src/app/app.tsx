
import Header from './header/header';
import MainContainer from './main-container/main-container';
import Slider from './slider/slider';
import star from './star.svg';


export function App() {

  return (
    <div className='app'>
      <Header imgWrap={<img alt=""
  src="https://doshutovo.ru/wp-content/uploads/charity-10.png" />}
      headingText={<h1>Здравствуйте, дорогие родители!</h1>}
        regularText = {<p>Учебный год в разгаре, занятия идут непрерывной чередой. Это большой труд как для детей, так и для нас с вами.

В круговерти повседневных забот иногда не успеваешь остановиться и привести в порядок мысли, вечером, когда дети засыпают, валишься с ног от усталости.</p>}>
        </Header>

        <Slider />

      <MainContainer/>
      <h2 className="strong"><strong> Теперь такое место есть!</strong></h2>

    </div>

  );
}

export default App;
