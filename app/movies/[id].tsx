import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">
        Movie ID: {id}
      </Text>
    </View>
  );
}
