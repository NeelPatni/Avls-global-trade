import Logo from "./logo.png";
import About_Image from "./About_Image.jpg";
import Contact_Img from "./Contact_Img.jpg";
import ThankYou from "./ThankYou.jpg";

import slider_01 from "./slider_01.jpg";
import slider_02 from "./slider_02.jpg";
import slider_03 from "./slider_03.jpg";
import slider_04 from "./slider_04.jpg";
import slider_05 from "./slider_05.jpg";
import slider_06 from "./slider_06.jpg";
import slider_07 from "./slider_07.jpg";
import slider_08 from "./slider_08.jpg";

import small_slider_01 from "./small_slider_01.jpg";
import small_slider_02 from "./small_slider_02.jpg";
import small_slider_03 from "./small_slider_03.jpg";
import small_slider_04 from "./small_slider_04.jpg";
import small_slider_05 from "./small_slider_05.jpg";
import small_slider_06 from "./small_slider_06.jpg";

import Jeera from "./Jeera.jpg";
import Jeera_01 from "./Jeera_01.jpeg";

import Turmeric_Powder from "./Turmeric_Powder.jpg";
import Turmeric_Powder_02 from "./Turmeric_Powder_02.jpeg";

import Black_Pepper from "./Black_Pepper.jpg";
import Black_Pepper_02 from "./Black_Pepper_02.jpeg";

import Makhana from "./Makhana.jpeg";
import Makhana_01 from "./Makhana_01.jpeg";

import Guar_Gum from "./Guar_Gum.png";
import Guar_Gum_01 from "./Guar_Gum_01.png";


import Cardamom from "./Cardamom.avif";
import Cardamom_02 from "./Cardamom_02.jpg";
import Cardamom_03 from "./Cardamom_03.webp";

// import Chili_Powder from "./Chili_Powder.jpg";
// import Chili_Powder_02 from "./Chili_Powder_02.jpeg";
// import Chili_Powder_03 from "./Chili_Powder_03.jpeg";

import Rice from "./Rice.jpg";
import Rice_02 from "./Rice_02.jpeg";
import Rice_03 from "./Rice_03.jpeg";

// import Onion from "./Onion.jpg";
// import Onion_02 from "./Onion_02.jpg";
// import Onion_03 from "./Onion_03.jpg";

// import Potato from "./Potato.jpeg";
// import Potato_02 from "./Potato_02.webp";
// import Potato_03 from "./Potato_03.jpg";

// certificates images
import RCMC from "./RCMC.png";
import APEDA from "./APEDA.png";
import FSSAI from "./FSSAI.png";

export const assets = {
  Logo,
  About_Image,
  Contact_Img,
  ThankYou,
};

export const largeSliderImages = [
  slider_01,
  slider_02,
  slider_03,
  slider_04,
  slider_05,
  slider_06,
  slider_07,
  slider_08
];
export const smallSliderImages = [
  small_slider_01,
  small_slider_02,
  small_slider_03,
  small_slider_04,
  small_slider_05,
  small_slider_06,
];

export const products = [
  {
    id: "rice",
    name: "Rice",
    img: [Rice, Rice_02, Rice_03],
    use: "Cooking",
    selfLife: "12 to 24 months",
    color: "White, Brown",
    placeOfOrigin: "India",
    form: "Grains",
    cultivationType: "Natural",
    packagingSize: "25 Kg or as per customer requirement",
    description:
      "Rice is a premium long-grain rice variety known for its unique aroma and fluffy texture. It originates from the fertile regions of Punjab, India, where it is naturally cultivated to maintain its authentic quality. Revered in Indian and Middle Eastern cuisines, Basmati Rice is perfect for preparing biryanis, pilafs, and steamed dishes. The grains remain separate and non-sticky after cooking, making it ideal for festive meals and daily consumption alike. Rich in flavor and nutrition, this rice is a staple that complements a variety of dishes. With a shelf life of 12 to 24 months, Basmati Rice ensures freshness and quality in every grain.",
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder (1%-2% Curcumin)",
    img: [Turmeric_Powder, Turmeric_Powder_02],
    use: "Cooking",
    selfLife: "12 to 18 months",
    color: "Yellow",
    placeOfOrigin: "India",
    form: "Powder",
    cultivationType: "Natural",
    packagingSize: "25 Kg or as per customer requirement",
    description:
      "Turmeric Powder is a golden-hued spice that brings both vibrant color and health benefits to your dishes. Derived from the root of the Curcuma longa plant, this powder is widely used in Indian, Asian, and Middle Eastern cooking, especially for curries, soups, and rice dishes. The 1%-2% curcumin content in the powder is responsible for its anti-inflammatory and antioxidant properties. Turmeric not only adds an earthy, warm, and slightly bitter flavor to food but is also known for its potential to improve skin health, reduce inflammation, and aid in digestion. Used in both cooking and as a natural remedy, it is a staple in many households for its versatility and numerous health benefits.",
  },
  {
    id: "jeera",
    name: "Jeera",
    img: [Jeera, Jeera_01],
    use: "Cooking",
    selfLife: "12 to 24 months",
    color: "Brown",
    placeOfOrigin: "India",
    form: "Jeera",
    cultivationType: "Natural",
    packagingSize: "25 Kg or as per customer requirement",
    description:
      "Jeera, derived from the Cuminum cyminum plant, are small, aromatic seeds that impart a rich, earthy flavor to a wide variety of dishes. These brown seeds are commonly used in Indian, Middle Eastern, and Mediterranean cuisines, offering a distinct nutty and slightly peppery taste. Ground or used whole, cumin is a key ingredient in spice blends like garam masala and is often added to curries, stews, and rice dishes. Apart from its culinary uses, cumin also holds medicinal value, aiding in digestion, boosting immunity, and acting as an anti-inflammatory agent. The warm, fragrant aroma of cumin elevates the flavor profile of any dish, making it a must-have in any kitchen.",
  },
  {
    id: "cardamom",
    name: "Cardamom (Elettaria cardamomum)",
    img: [Cardamom, Cardamom_02, Cardamom_03],
    use: "Cooking, Medicinal",
    selfLife: "18 to 24 months",
    color: "Green",
    placeOfOrigin: "India",
    form: "Pods",
    cultivationType: "Natural",
    packagingSize: "25 Kg or as per customer requirement",
    description:
      "Cardamom, known as the 'Queen of Spices,' is a fragrant and exotic spice native to the lush regions of Kerala, India. Its aromatic green pods contain small, black seeds that deliver a complex flavor profile, blending sweet, spicy, and citrusy notes. This spice is widely used in both savory and sweet dishes, such as curries, rice pilafs, desserts, and beverages like chai tea. The unique fragrance of cardamom enhances the sensory experience of any dish. Beyond its culinary uses, cardamom has been celebrated in traditional medicine for its digestive properties, ability to relieve respiratory issues, and overall health benefits. Cardamom can be used whole, or the seeds can be ground into a powder, making it a versatile addition to any spice collection.",
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    img: [Black_Pepper, Black_Pepper_02],
    use: "Cooking, Medicinal",
    selfLife: "18 to 24 months",
    color: "Black",
    placeOfOrigin: "India",
    form: "Seeds",
    cultivationType: "Natural",
    packagingSize: "25 Kg or as per customer requirement",
    description:
      "Black Pepper, often referred to as the 'King of Spices,' is one of the most commonly used spices worldwide. The dark, wrinkled seeds of the Piper nigrum plant add a sharp, pungent flavor that can elevate the taste of virtually any dish. Whether used whole, cracked, or freshly ground, black pepper brings boldness to everything from meats, soups, and sauces to vegetables and salads. It has a spicy kick that complements both savory and sweet dishes. In addition to its culinary appeal, black pepper has several medicinal uses, such as improving digestion, enhancing nutrient absorption, and supporting respiratory health. A must-have in kitchens around the world, black pepper is essential in spice blends and is often paired with salt for a timeless flavor combination.",
  },
  {
    id: "makhana",
    name: "Makhana",
    img: [Makhana_01, Makhana],
    use: "Cooking",
    selfLife: "12 to 18 months",
    color: "White",
    placeOfOrigin: "India",
    form: "Seeds",
    cultivationType: "Natural",
    packagingSize: "25 Kg or as per customer requirement",
    description:
      "Makhana the global food really needs no introduction. This popular super food has travelled the globe and forms a part of daily lives of all health freaks. From the humble beginnings in the Madhubani district in the Indian state of Bihar, it is now being exported across continents to meet the rising demand. Makhana, also known as lotus seeds or fox nuts, is a traditional Indian snack with a rich nutritional profile. It is derived from the Euryale ferox plant, which is an aquatic plant that grows naturally in stagnant water bodies in tropical and subtropical regions, particularly in South-East Asia and China. Makhana cultivation primarily takes place in the Madhubani district of Bihar, India, and has spread to other parts of the country and internationally due to its rising demand."
    },
  {
    id: "guar_gum",
    name: "Guar Gum",
    img: [Guar_Gum, Guar_Gum_01],
    use: "Cooking",
    selfLife: "2 to 3 weeks",
    color: "Red, White, Yellow",
    placeOfOrigin: "India",
    form: "Powder",
    cultivationType: "Natural",
    packagingSize: "10 Kg, 20 Kg, or as per customer requirement",
    description:
    "Guar gum, also known as guaran, is a galactomannan polysaccharide extracted from guar beans and is used as a thickener and stabilizer in various applications, including food and spices. It is odorless with a slightly bitter taste and does not significantly impact the taste of the final product when used in typical quantities. Guar gum is particularly useful in gluten-free baking and can be used as a thickener in sauces, soups, marinades, dressings, and ice cream. It is also effective in improving the texture and shelf life of baked goods. Guar gum is produced by dehusking, milling, and sorting the seeds of the guar bean, which is mainly grown in India, Pakistan, the United States, Australia, and Africa. In the food industry, guar gum is typically used in powder form and is defined by its particle size, rate of hydration, and microbial content. It is insoluble in oils, grease, hydrocarbons, ketones, and esters, making it very useful for stabilizing fatty substances. "
  },
//{
  //   id: "potato",
  //   name: "Potato",
  //   img: [Potato, Potato_02, Potato_03],
  //   use: "Cooking",
  //   selfLife: "2 to 3 months",
  //   color: "Brown, Yellow, Red",
  //   placeOfOrigin: "India",
  //   form: "Tubers",
  //   cultivationType: "Natural",
  //   packagingSize: "50 Kg or as per customer requirement",
  //   description:
  //     "Potatoes are one of the most widely consumed vegetables, celebrated for their versatility and nutritional value. Naturally cultivated in India, these tubers come in brown, yellow, and red varieties. Potatoes are ideal for preparing a wide array of dishes, including fries, mashed potatoes, curries, and baked recipes. Known for their smooth texture and rich taste, they are a staple ingredient in households and restaurants alike. With a shelf life of 2 to 3 months when stored properly, potatoes provide a reliable source of energy and are perfect for daily and festive meals.",
  // },
];

export const certificates = [
  {
    title: "RCMC Certification",
    image: RCMC,
    description: "Certificate of Registration as Exporter with APEDA.",
    link: RCMC,
  },
  {
    title: "CE Certification",
    image: APEDA,
    description: "Compliance with European Union product safety standards.",
    link: APEDA,
  },
  {
    title: "FSSAI Certification",
    image: FSSAI,
    description:
      "Approval from the Food Safety and Standards Authority of India.",
    link: FSSAI,
  },
];
