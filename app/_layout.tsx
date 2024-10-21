import { Stack } from "expo-router";
import { UserProvider } from "./context/UserContext";

export default function RootLayout() {
  return (
    <UserProvider>
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
    </UserProvider>
  );
}
