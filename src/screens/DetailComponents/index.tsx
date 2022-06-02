import { Dimensions, Image, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text, Header } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const { width: wWidth } = Dimensions.get("window");

const DetailComponent = (props: any) => {
  const { data, image } = props.route.params.data
  console.log(data, image)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={{ flex: 1 }} colors={["#596164", "#000000"]}>
        <Header title="3rd screen" />

        <ScrollView>
          <Box py={"s"} flexDirection={"row"}>
            <TouchableOpacity onPress={() => {
              props.navigation.goBack();
            }}>
              <Icon
                color={"#ffffff"}
                name={Platform.OS === "android" ? "arrow-left" : "chevron-left"}
                size={30}
              />
            </TouchableOpacity>

            <Box marginVertical={"l"} ml={"m"}>
              <Image
                style={{ width: wWidth - 100, height: wWidth - 120 }}
                source={{ uri: image }}
              />
            </Box>
          </Box>
          <Box marginHorizontal={"s"} marginTop={"l"}>
            <Text color={"text"} fontSize={20} fontWeight={"bold"}>
              name: {data.name}
              {/* artists, Album, duration.  */}
            </Text>
            <Text color={"text"}>artists: {data.artists[0].name}</Text>
            <Text color={"text"}>duration_ms: {data.duration_ms}</Text>
          </Box>

        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default DetailComponent;
