import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../../components/ButtonText";
import { Avatar, Container, Form } from "./styles";
import { FiCamera, FiUser, FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import AvatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";

export function Profile() {

    const { user, updateProfile } = useAuth();

    const [data, setData] = useState({ 
        name: user.name,
        email: user.email,
        password: "",
        old_password: ""
     })

     const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder;

     const [userAvatar, setUserAvatar] = useState({ avatar: avatarURL, imgFile: null })

     function handleChange(e) {
        setData({...data, [e.target.name]: e.target.value})
     }

     async function handleUpdateUser(event) {
        event.preventDefault();
        
        const updatedState = {
            name: data.name,
            email:data.email,
            password: data.password,
            old_password: data.old_password
        }

        const userUpdated = Object.assign(user, updatedState);
        await updateProfile({ user: userUpdated, avatarFile: userAvatar.imgFile })
     }

     function handleChangeAvatar(event) {
        const file = event.target.files[0];
        const imagePreview = URL.createObjectURL(file);

        setUserAvatar({ avatar: imagePreview, imgFile: file});
     }

    return (
        <Container>
            <header>
                <ButtonText to="/" title="Voltar" hasArrow />
            </header>

            <Avatar>
                <img 
                src={userAvatar.avatar} 
                alt={`Foto de ${user.name}`} 
                />
                
                <label htmlFor="avatar">
                    <FiCamera />
                    <input 
                    type="file" 
                    id="avatar"
                    onChange={handleChangeAvatar}
                    />
                </label>
            </Avatar>
                
            <Form>
                <Input 
                icon={FiUser} 
                name="name"
                value={data.name}
                onChange={handleChange} 
                />

                <Input 
                icon={FiMail} 
                name="email"
                value={data.email}
                onChange={handleChange} 
                />

                <Input 
                type="password"
                name="old_password"
                icon={FiLock} 
                placeholder="Senha atual" 
                onChange={handleChange} 
                />

                <Input 
                type="password" 
                icon={FiLock} 
                name="password"
                placeholder="Nova senha"
                onChange={handleChange} 
                />

                <Button 
                title="Salvar"
                onClick={handleUpdateUser}
                />
            </Form>

        </Container>
    )
}