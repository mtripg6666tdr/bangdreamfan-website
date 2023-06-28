import ripplet from "ripplet.js";

import styles from "./linkButton.module.scss";

ripplet.defaultOptions.color = "#fff";

type Props = {
  href: string,
  children: React.ReactNode,
  className: string,
};

export default function LinkButton(props: Props){
  return (
    <a href={props.href} className={styles.a} target="_blank" rel="noreferrer noopener" onPointerDown={ripplet}>
      <button className={props.className}>
        {props.children}
      </button>
    </a>
  );
}
