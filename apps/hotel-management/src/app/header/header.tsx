import './header.module.scss';
import styles from '../app.module.scss';
/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props?: any) {
  return (
    <div className={styles.app}>
      <div id="top-header">
        <div className="container clearfix">
          <div id="et-info">
            <span id="et-info-phone">
              <a href="tel:+78125653317">+7 (812) 565-33-17</a>
            </span>

            <a href="mailto:schutovoaut@gmail.com">
              <span id="et-info-email">schutovoaut@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
<div className="imageText_header">
      <header className="flex">

        <div>
          <h1>Дом отдыха РасСВЕТ</h1>
        </div>

        <div>
          <div className="headerH2">
            <h2>для семей с особыми потребностями</h2>
          </div>
        </div>

      </header>
      <main>
        <div className = "imageText_header">
          <span className="et_pb_text_header">
          {/* {props.headingText}
          {props.regularText} */}
          </span>
          <span className="et_pb_image_header ">
            {props.imgWrap}
            {/* {props.} */}
          </span>

        </div>
      </main>
      </div>
    </div>
  );
}

export default Header;
