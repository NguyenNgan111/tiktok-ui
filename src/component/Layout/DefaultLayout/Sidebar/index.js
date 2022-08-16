// import clsx from "clsx";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <div className={cx(styles.Header)}>
      <h1>Sidebar page</h1>
    </div>
  );
}

export default Sidebar;
