import React, { createContext } from "react";

import BarSetup from "../Images/cocktails/at_home_bar_setup.jpeg";
import Chartruese from "../Images/cocktails/chartruese_cocktail.jpeg";
import MilkyCocktail from "../Images/cocktails/milky_cocktail_flowers.jpeg";
import PinkMintLemon from "../Images/cocktails/pink_mint_lemon_cocktail.jpeg";
import PinkLimeTwist from "../Images/cocktails/pinkdrink_lime_twist.jpeg";
import ChartrueseFlowers from "../Images/cocktails/chartruese_cocktail_flowers.jpeg";
import PineappleOne from "../Images/cocktails/pineapple_cocktail_1.jpeg";
import PineappleTwo from "../Images/cocktails/pineapple_cocktail_2.jpeg";
import Pineapple from "../Images/cocktails/pineapple_cocktail.jpeg";
import Rosemary from "../Images/cocktails/rosemary_garnish.jpeg";
import Strawberry from "../Images/cocktails/strawberry_cocktail.jpeg";

import LambChopsBoard from "../Images/food/lamb_chop_board.jpeg";
import LambChops from "../Images/food/lambchops.jpeg";
import Langostine from "../Images/food/langostine_plate.jpeg";
import Fish from "../Images/food/plate_fish.jpeg";
import Fish1 from "../Images/food/plate_fish_1.jpeg";
import PorkChop from "../Images/food/pork_chop_plate.jpeg";
import SearedTuna from "../Images/food/seared_tuna_salad.jpeg";
import SearedTuna1 from "../Images/food/seared_tuna_salad_1.jpeg";
import SearedTuna2 from "../Images/food/seared_tuna_salad_2.jpeg";
import SoupCourse from "../Images/food/soup_course.jpeg";
import SoupCourse1 from "../Images/food/soup_course_1.jpeg";

import RoseMtn from "../Images/wine/rose_mountain_backdrop.jpeg";
import WaVineyard from "../Images/wine/washington_vineyard.jpeg";
import WhiteWine from "../Images/wine/white_wine_grapes.jpeg";
import RedWine from "../Images/wine/wine_grapes_red.jpeg";
import Decantuer from "../Images/wine/wine_decantuer.jpeg";
import Decantuer1 from "../Images/wine/wine_decantuer_1.jpeg";
import Decantuer2 from "../Images/wine/wine_decantuer_2.jpeg";
import Decantuer3 from "../Images/wine/wine_decantuer_3.jpeg";

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  class CocktailImages {
    constructor(image, imageAlt) {
      this.image = image;
      this.imageAlt = imageAlt;
    }
  }
  class FoodImages {
    constructor(image, imageAlt) {
      this.image = image;
      this.imageAlt = imageAlt;
    }
  }
  class WineImages {
    constructor(image, imageAlt) {
      this.image = image;
      this.imageAlt = imageAlt;
    }
  }
  let wineArray = [];
  let one_wine,
    two_wine,
    three_wine,
    four_wine,
    five_wine,
    six_wine,
    seven_wine,
    eight_wine;

  one_wine = new WineImages(RoseMtn, "wine");
  two_wine = new WineImages(WaVineyard, "wine");
  three_wine = new WineImages(WhiteWine, "wine");
  four_wine = new WineImages(RedWine, "wine");
  five_wine = new WineImages(Decantuer, "wine");
  six_wine = new WineImages(Decantuer1, "wine");
  seven_wine = new WineImages(Decantuer2, "wine");
  eight_wine = new WineImages(Decantuer3, "wine");

  wineArray.push(
    one_wine,
    two_wine,
    three_wine,
    four_wine,
    five_wine,
    six_wine,
    seven_wine,
    eight_wine
  );

  let foodArray = [];
  let one_food,
    two_food,
    three_food,
    four_food,
    five_food,
    six_food,
    seven_food,
    eight_food,
    nine_food,
    ten_food,
    eleven_food;

  one_food = new FoodImages(LambChops, "Plate of food");
  two_food = new FoodImages(LambChopsBoard, "Plate of food");
  three_food = new FoodImages(Langostine, "Plate of food");
  four_food = new FoodImages(Fish, "Plate of food");
  five_food = new FoodImages(Fish1, "Plate of food");
  six_food = new FoodImages(PorkChop, "Plate of food");
  seven_food = new FoodImages(SearedTuna, "Plate of food");
  eight_food = new FoodImages(SearedTuna1, "Plate of food");
  nine_food = new FoodImages(SearedTuna2, "Plate of food");
  ten_food = new FoodImages(SoupCourse, "Plate of food");
  eleven_food = new FoodImages(SoupCourse1, "Plate of food");

  foodArray.push(
    one_food,
    two_food,
    three_food,
    four_food,
    five_food,
    six_food,
    seven_food,
    eight_food,
    nine_food,
    ten_food,
    eleven_food
  );

  let cocktailArray = [];
  let one_cocktail,
    two_cocktail,
    three_cocktail,
    four_cocktail,
    five_cocktail,
    six_cocktail,
    seven_cocktail,
    eight_cocktail,
    nine_cocktail,
    ten_cocktail,
    eleven_cocktail;

  one_cocktail = new CocktailImages(BarSetup, "At home bar setup");

  two_cocktail = new CocktailImages(
    Chartruese,
    "A chartruese colored cocktail"
  );

  three_cocktail = new CocktailImages(
    MilkyCocktail,
    "A milky colored cocktail"
  );

  four_cocktail = new CocktailImages(
    PinkMintLemon,
    "A pink colored cocktail with a lemon twist and mint garnish"
  );

  five_cocktail = new CocktailImages(
    PinkLimeTwist,
    "A pink colored cocktail with a lime twist garnish"
  );

  six_cocktail = new CocktailImages(
    ChartrueseFlowers,
    "A pink colored cocktail with a lime twist garnish"
  );

  seven_cocktail = new CocktailImages(
    PineappleOne,
    "A pink colored cocktail with a lime twist garnish"
  );

  eight_cocktail = new CocktailImages(
    PineappleTwo,
    "A pink colored cocktail with a lime twist garnish"
  );

  nine_cocktail = new CocktailImages(
    Pineapple,
    "A pink colored cocktail with a lime twist garnish"
  );

  ten_cocktail = new CocktailImages(
    Rosemary,
    "A pink colored cocktail with a lime twist garnish"
  );

  eleven_cocktail = new CocktailImages(
    Strawberry,
    "A pink colored cocktail with a lime twist garnish"
  );
  cocktailArray.push(
    one_cocktail,
    two_cocktail,
    three_cocktail,
    four_cocktail,
    five_cocktail,
    six_cocktail,
    seven_cocktail,
    eight_cocktail,
    nine_cocktail,
    ten_cocktail,
    eleven_cocktail
  );
  return (
    <ImageContext.Provider value={{ cocktailArray, foodArray, wineArray }}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };
