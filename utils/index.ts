import packageJson from "package.json";
const isMacintosh = () => {
  return typeof window !== "undefined"
    ? navigator.platform.toUpperCase().indexOf("MAC") >= 0
    : false;
};

const AppYear = () => new Date().getFullYear();
const { version } = packageJson;

export { isMacintosh, AppYear, version };
