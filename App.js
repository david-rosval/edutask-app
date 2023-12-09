import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import ModalDetalleEstudiante from "./components/ModalDetalleEstudiante";
import TareasPendientes from "./TareasPendientes";
import TareasCompletadas from "./TareasCompletadas";

export default function App() {
  const [detalleEstudiante, setDetalleEstudiante] = useState(false);
  const [nombreEstudiante, setNombreEstudiante] = useState("Juan Perez");
  const [dni, setDni] = useState("74837463");
  const [aula, setAula] = useState("Primero C");
  const [numeroTelefonico, setNumeroTelefonico] = useState("999666777");
  const [correo, setCorreo] = useState("correo@correo.com");
  const [tarea, setTarea] = useState("");

  useEffect(() => {}, []);

  return (
    <View className="flex-1 bg-gray-100 p-10 px-5">
      <View className="w-full ">
        <TouchableOpacity onPress={() => setDetalleEstudiante(true)}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <Path d="M4 6l16 0" />
            <Path d="M4 12l16 0" />
            <Path d="M4 18l16 0" />
          </Svg>
        </TouchableOpacity>
      </View>

      <Text className="font-semibold mt-5 mb-5">
        Buenos días, {nombreEstudiante}
      </Text>
      <Text className="">Tareas pendientes</Text>

      <View className="bg-blue-600 p-2 rounded-xl my-2">
        <ScrollView>
          <TareasPendientes />
        </ScrollView>
      </View>

      <Text className="">Tareas completadas</Text>

      <View className="bg-emerald-600 p-2 rounded-xl my-2">
        <TareasCompletadas />
      </View>

      <Modal
        visible={detalleEstudiante}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDetalleEstudiante(false)}
      >
        <View className="flex-1 bg-black opacity-90 p-5 items-center">
          <View className="w-full">
            <TouchableOpacity onPress={() => setDetalleEstudiante(false)}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-left"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <Path d="M5 12l14 0" />
                <Path d="M5 12l6 6" />
                <Path d="M5 12l6 -6" />
              </Svg>
            </TouchableOpacity>
          </View>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user-circle mt-10"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#00b341"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <Path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <Path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </Svg>
          <Text className="text-white mt-20">Bienvenido:</Text>
          <Text className="text-white">{nombreEstudiante}</Text>
          <Text className="text-white mb-5">DNI: {dni}</Text>
          <Text className="text-white">Aula:</Text>
          <Text className="text-white mb-5">{aula}</Text>
          <Text className="text-white">Número telefónico:</Text>
          <Text className="text-white mb-5">{numeroTelefonico}</Text>
          <Text className="text-white">Correo Institucional:</Text>
          <Text className="text-white mb-10">{correo}</Text>
          <TouchableOpacity
            className="bg-rose-600 py-2 w-20 rounded-lg "
            onPress={() => setDetalleEstudiante(false)}
          >
            <Text className="text-white text-center">Salir</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <StatusBar></StatusBar>
    </View>
  );
}
