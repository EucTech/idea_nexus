import {
  Poppins,
  Roboto,
} from "next/font/google";

export const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"] });

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700",], 
  variable: "--font-roboto", 
});
