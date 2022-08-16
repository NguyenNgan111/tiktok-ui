// import clsx from "clsx";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx(styles.Header)}>
      <h1>Header page</h1>
    </div>
  );
}

export default Header;
