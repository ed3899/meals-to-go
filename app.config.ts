import "dotenv/config";
// WARNING THIS ISN'T VERSIONED
import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): Partial<ExpoConfig> => ({
   ...config,
   name: "MealsToGo",
   version: "0.1",
   extra: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
   }
});