import React from "react";

// App과 Toolbar 두 공간에서 쓰기 위해 컴포넌트로 분리해서 사용
const ThemeContext = React.createContext('dark');

export default ThemeContext;
