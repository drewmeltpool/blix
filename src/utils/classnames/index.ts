const classNames = (
  ...args: Array<string | number | null | undefined | symbol | boolean>
) => args.filter((className) => className).join(' ');

export default classNames;
