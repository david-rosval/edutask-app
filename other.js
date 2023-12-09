import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

const imgInstitucion = require("./assets/logo-institucion.png");

export default function App() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const handleIniciarSesion = () => {
    console.log(usuario, clave);
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-2/3 flex flex-col items-center">
        <Image source={imgInstitucion} className="w-500 h-auto" />
        <TextInput
          placeholder="Usuario"
          onChangeText={setUsuario}
          value={usuario}
          className="border-b p-3 py-2 w-full mb-5 rounded-lg mt-20"
        />
        <TextInput
          placeholder="Contraseña"
          onChangeText={setClave}
          value={clave}
          secureTextEntry={true}
          className="border-b p-3  py-2 w-full rounded-lg  mb-10"
        />
        <TouchableOpacity
          className="bg-emerald-500 p-3 px-10 rounded-lg items-center"
          onPress={handleIniciarSesion}
        >
          <Text className="uppercase font-semibold">Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
