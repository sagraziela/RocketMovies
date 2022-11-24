import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [data, setData] = useState({})

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@movies-notes:user", JSON.stringify(user));
            localStorage.setItem("@movies-notes:token", token);
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token });

        } catch(error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível fazer o login.');
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@movies-notes:user");
        localStorage.removeItem("@movies-notes:token");

        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {
            if(avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);
                console.log(fileUploadForm)

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("@movies-notes:user", JSON.stringify(user));
            setData({ user, token: data.token});
            alert("Usuário atualizado com sucesso!");

        } catch (error) {
            return error.response ? alert(error.response.data.message) : "Não foi possível atualizar o usuário."
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@movies-notes:user");
        const token = localStorage.getItem("@movies-notes:token");

        if(user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                user: JSON.parse(user),
                token
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ 
            signIn, 
            signOut,
            updateProfile,
            user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }