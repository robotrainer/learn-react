import classes from "./Radio.module.scss";

export default function Radio({
  style,
  className,
  value,
  checked,
  label,
  onChange,
}) {
  return (
    <label
      style={style}
      className={[classes.inputRadio, className].filter((e) => e).join(" ")}
    >
      <input
        className={classes.radio}
        type="radio"
        name="filter"
        value={value}
        checked={checked}
        onChange={onChange}
      />{" "}
      {label}
    </label>
  );
}
