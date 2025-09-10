import plugin from "tailwindcss/plugin";
import { heroui } from "@heroui/theme";

export default plugin(() => {}, {
  presets: [heroui],
});
