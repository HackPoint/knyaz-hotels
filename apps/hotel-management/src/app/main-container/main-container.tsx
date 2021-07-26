
import './main-container.module.scss';

/* eslint-disable-next-line */
// export interface MainContainerProps {}
const contents = ([
{
  h3: "Здравствуйте, дорогие родители!",
 p: "Учебный год в разгаре, занятия идут непрерывной чередой. Это большой труд как для детей, так и для нас с вами.",

  p2: " В круговерти повседневных забот иногда не успеваешь остановиться и привести в порядок мысли, вечером, когда дети засыпают, валишься с ног от усталости."
},
{

  p: "Полноценный отдых просто необходим, но для наших семей организация его крайне сложна. Причины этого и в избирательности в еде наших деток, и в стереотипности их поведения, и в трудности принятия нового места.",

  p2: " А еще, и это, пожалуй, ключевой фактор — реакция других людей на особенных детей. Например, живя в Петербурге, мы с Даней ни разу не смогли выехать на море, потому что просто не нашли гостиницу, где можно было бы рассчитывать на спокойное отношение окружающих."
}

])
const listItems = contents.map(content =>
<div className="contentMap" key={Math.random()}>
  <h3>{content.h3}</h3>
  <p>{content.p}</p>
  <br/>
  <p>{content.p2}</p>
</div>
);
export function MainContainer(props?: any) {

  return (
    <div className="listItems">
       {listItems}

    </div>
  );
}

export default MainContainer;
