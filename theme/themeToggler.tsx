import { Switch } from "antd";
import React from "react";

interface ThemeTogglerProps {
   theme: string;
   themeToggler: () => void;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = (props) => {
   const { theme, themeToggler } = props;

   return (
      <div style={{ position: "absolute", left: "0.938rem", bottom: "0.625rem", zIndex: 1000 }}>
         {theme === "dark" ? <>🌙</> : <>☀️</>}
         <Switch
            onClick={themeToggler}
         // checkedChildren={<>🌙</>}
         // unCheckedChildren={<>☀️</>} 
         />
      </div>
   );
};

export default ThemeToggler;