import classes from "./FilterTodo.module.scss";

import Radio from "./Radio/Radio";

function FilterTodo({ style, className, children }) {
  return (
    <div
      style={style}
      className={[classes.filter, className].filter((e) => e).join(" ")}
    >
      {children}
    </div>
  );
}

export default Object.assign(FilterTodo, { Radio });
