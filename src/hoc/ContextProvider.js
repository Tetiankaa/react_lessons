// import React, {createContext} from 'react';
// import {FirstComponent} from "../components/Context/FirstComponent";
//
// export const Context = createContext(null);
// const ContextProvider = ({children}) => {
//     return (
//         <Context.Provider value={'content pass to the component'}>
//             {children}
//         </Context.Provider>
//     );
// };
//
// export {ContextProvider};

import React, {createContext, useState} from 'react';

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const state = useState({isAuth:false, me:null});
    return (
      <Context.Provider value={state}>
          {children}
      </Context.Provider>
    );
};

export {ContextProvider, Context};