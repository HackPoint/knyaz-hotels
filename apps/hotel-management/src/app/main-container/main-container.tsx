
import './main-container.module.scss';

/* eslint-disable-next-line */
// export interface MainContainerProps {}

export function MainContainer(props) {
  return (
    <div>

          {props.headingText}
          {props.regularText}


    </div>
  );
}

export default MainContainer;
