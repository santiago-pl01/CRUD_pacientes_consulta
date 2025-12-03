import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity onPress={() => router.push("/(tabs)/pacientes")}>
        <Text>Ir para Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}