//Importaciones
import React from "react";
import CityInfo from "./Index";
import 'typeface-roboto';

//Exportaciones
export default {
  title: "CityInfo",
  component: CityInfo,
}

//Ejemplo de uso
export const CityExample = () => <CityInfo city="Moscow" country="Russia" />;
