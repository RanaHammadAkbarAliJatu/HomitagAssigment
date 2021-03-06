import React, { useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ResponseType, useAuthRequest } from "expo-auth-session";
// @ts-ignore
import { storeData } from "../utils/storage";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/slices/user";
import Home from "./Home";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const CLIENT_ID = "1e2208d8e1da42d384a35f8513b8dc2b"
const CLIENT_SECRET = "aa0dcb95cea24815b8b8bd230b275f49"
const Login = (props: any) => {
  const dispatch = useDispatch();
  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
      ],
      usePKCE: false,
      redirectUri: "exp://192.168.108.11:19000/",
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      storeData("@access_token", access_token);
      dispatch(getCurrentUser());
      props.navigation.navigate("Home");
    }
  }, [response]);
  if (response?.type === "success") {
    return <Home />
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => promptAsync()}>
          <View
            style={{
              backgroundColor: "green",
              width: wWidth * 0.9,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
};

export default Login;
