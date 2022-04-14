import React from 'react';

export const AuthContext = React.createContext();

export default function AuthProvider(props) {

    const [auth,setauth] = React.useState({});

    React.useEffect( () => {
        const firstname = localStorage.getItem("firstname");
        const lastname = localStorage.getItem("lastname");
        const username = localStorage.getItem("username");
        const email = localStorage.getItem("email");
        const phone = localStorage.getItem("phone");
        const address = localStorage.getItem("address");
        // const city = localStorage.getItem("city");
        // const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        const message = localStorage.getItem("message");

        if(token) {
            setauth({firstname, lastname, username, email, phone, address, token, role, message});
        }
    }, []);
    return (
        <AuthContext.Provider value={{auth, setauth}}>
            {props.children}
        </AuthContext.Provider>
    );
}
