import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, theme, Text } from "./theme";

const AppThumbnail = ({ title, tracks, images, onPress }: any) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <Box elevation={2} margin="s">
        <Box borderRadius="m">
          <Image style={styles.thumbImage} source={{ uri: images }} />
          <Box  marginVertical="s">
            <Text numberOfLines={1} variant="listContentTitle">
             Title: {title}
            </Text>
            <Text variant="listContentSubTitle">
               Number of tracks: {tracks}</Text>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.colors.primary,
    flex: 1,
  },
  thumbImage: {
    height: 120,
    width: "100%",
    borderRadius: theme.borderRadii.m,
  },
});

export default AppThumbnail;
