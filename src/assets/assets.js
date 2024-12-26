import Logo from "./logo.png";
import About_Image from "./About_Image.jpg";
import Contact_Img from "./Contact_Img.jpg";
import slider_01 from "./slider_01.webp";
import slider_02 from "./slider_02.jpg";
import slider_03 from "./slider_03.jpg";
import slider_04 from "./slider_04.png";
import Cumin_Seeds from "./Cumin_Seeds.jpg";
import Cumin_Seeds_02 from "./Cumin_Seeds_02.jpeg";
import Cumin_Seeds_03 from "./Cumin_Seeds_03.jpeg";
import Turmeric_Powder from "./Turmeric_Powder.jpg";
import Turmeric_Powder_02 from "./Turmeric_Powder_02.jpeg";
import Black_Pepper from "./Black_Pepper.jpg";
import Black_Pepper_02 from "./Black_Pepper_02.jpeg";
import Cardamom from "./Cardamom.jpg";
import Cardamom_02 from "./Cardamom_02.jpeg";
import Cardamom_03 from "./Cardamom_03.jpeg";
import Chili_Powder from "./Chili_Powder.jpg";
import Chili_Powder_02 from "./Chili_Powder_02.jpeg";
import Chili_Powder_03 from "./Chili_Powder_03.jpeg";
import Basmati_Rice from "./Basmati_Rice.jpg";
import Basmati_Rice_02 from "./Basmati_Rice_02.jpeg";
import Basmati_Rice_03 from "./Basmati_Rice_03.jpeg";

// certificates images
import RCMC from "./RCMC.png";
import APEDA from "./APEDA.png";
import FSSAI from "./FSSAI.png";

export const assets = {
  Logo,
  About_Image,
  Contact_Img,
};

export const sliderImages = [slider_01, slider_02, slider_03, slider_04];

export const products = [
  {
    id: "cumin-seeds",
    name: "Cumin Seeds (Cuminum cyminum)",
    img: [Cumin_Seeds, Cumin_Seeds_02, Cumin_Seeds_03],
    use: "Cooking",
    selfLife: "12 to 24 months",
    color: "Brown",
    placeOfOrigin: "Rajasthan India",
    form: "Seeds",
    cultivationType: "Natural",
    packagingSize: "50gm, 100gm, 250gm, and loose",
    description:
      "Cumin Seeds, derived from the Cuminum cyminum plant, are small, aromatic seeds that impart a rich, earthy flavor to a wide variety of dishes. These brown seeds are commonly used in Indian, Middle Eastern, and Mediterranean cuisines, offering a distinct nutty and slightly peppery taste. Ground or used whole, cumin is a key ingredient in spice blends like garam masala and is often added to curries, stews, and rice dishes. Apart from its culinary uses, cumin also holds medicinal value, aiding in digestion, boosting immunity, and acting as an anti-inflammatory agent. The warm, fragrant aroma of cumin elevates the flavor profile of any dish, making it a must-have in any kitchen.",
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder (1%-2% Curcumin)",
    img: [Turmeric_Powder, Turmeric_Powder_02],
    use: "Cooking",
    selfLife: "12 to 18 months",
    color: "Yellow",
    placeOfOrigin: "Maharashtra India",
    form: "Powder",
    cultivationType: "Natural",
    packagingSize: "200gm, 500gm, 1Kg, and loose",
    description:
      "Turmeric Powder is a golden-hued spice that brings both vibrant color and health benefits to your dishes. Derived from the root of the Curcuma longa plant, this powder is widely used in Indian, Asian, and Middle Eastern cooking, especially for curries, soups, and rice dishes. The 1%-2% curcumin content in the powder is responsible for its anti-inflammatory and antioxidant properties. Turmeric not only adds an earthy, warm, and slightly bitter flavor to food but is also known for its potential to improve skin health, reduce inflammation, and aid in digestion. Used in both cooking and as a natural remedy, it is a staple in many households for its versatility and numerous health benefits.",
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
    packagingSize: "50gm, 100gm, 250gm, and loose",
    description:
      "Black Pepper, often referred to as the 'King of Spices,' is one of the most commonly used spices worldwide. The dark, wrinkled seeds of the Piper nigrum plant add a sharp, pungent flavor that can elevate the taste of virtually any dish. Whether used whole, cracked, or freshly ground, black pepper brings boldness to everything from meats, soups, and sauces to vegetables and salads. It has a spicy kick that complements both savory and sweet dishes. In addition to its culinary appeal, black pepper has several medicinal uses, such as improving digestion, enhancing nutrient absorption, and supporting respiratory health. A must-have in kitchens around the world, black pepper is essential in spice blends and is often paired with salt for a timeless flavor combination.",
  },
  {
    id: "cardamom",
    name: "Cardamom (Elettaria cardamomum)",
    img: [Cardamom, Cardamom_02, Cardamom_03],
    use: "Cooking, Medicinal",
    selfLife: "18 to 24 months",
    color: "Green",
    placeOfOrigin: "Kerala India",
    form: "Pods",
    cultivationType: "Natural",
    packagingSize: "25gm, 50gm, 100gm, and loose",
    description:
      "Cardamom, known as the 'Queen of Spices,' is a fragrant and exotic spice native to the lush regions of Kerala, India. Its aromatic green pods contain small, black seeds that deliver a complex flavor profile, blending sweet, spicy, and citrusy notes. This spice is widely used in both savory and sweet dishes, such as curries, rice pilafs, desserts, and beverages like chai tea. The unique fragrance of cardamom enhances the sensory experience of any dish. Beyond its culinary uses, cardamom has been celebrated in traditional medicine for its digestive properties, ability to relieve respiratory issues, and overall health benefits. Cardamom can be used whole, or the seeds can be ground into a powder, making it a versatile addition to any spice collection.",
  },
  {
    id: "red-chillies",
    name: "Red Chillies",
    img: [Chili_Powder, Chili_Powder_02, Chili_Powder_03],
    use: "Cooking",
    selfLife: "12 to 18 months",
    color: "Red",
    placeOfOrigin: "Karnataka India",
    form: "Powder",
    cultivationType: "Natural",
    packagingSize: "50gm, 100gm, 250gm, and loose",
    description:
      "Red Chillies are a fiery, vibrant spice that adds both heat and rich color to your meals. Originating from the Capsicum annuum plant, these dried red peppers are ground into powder and used to spice up a wide range of dishes, from curries and soups to stir-fries and marinades. Red chilli powder is known for its intense heat, but it also contributes a subtle smoky, slightly sweet flavor depending on the variety. Aside from its role in cooking, red chillies also have medicinal properties, particularly in boosting metabolism and supporting cardiovascular health. Whether you prefer mild or fiery heat, red chillies are essential for adding depth, spice, and color to your culinary creations.",
  },
  {
    id: "basmati-rice",
    name: "Basmati Rice",
    img: [Basmati_Rice, Basmati_Rice_02, Basmati_Rice_03],
    use: "Cooking",
    selfLife: "12 to 24 months",
    color: "White, Brown",
    placeOfOrigin: "Punjab India",
    form: "Grains",
    cultivationType: "Natural",
    packagingSize: "1Kg, 5Kg, 10Kg, and loose",
    description:
      "Basmati Rice is a premium long-grain rice variety known for its unique aroma and fluffy texture. It originates from the fertile regions of Punjab, India, where it is naturally cultivated to maintain its authentic quality. Revered in Indian and Middle Eastern cuisines, Basmati Rice is perfect for preparing biryanis, pilafs, and steamed dishes. The grains remain separate and non-sticky after cooking, making it ideal for festive meals and daily consumption alike. Rich in flavor and nutrition, this rice is a staple that complements a variety of dishes. With a shelf life of 12 to 24 months, Basmati Rice ensures freshness and quality in every grain.",
  },
];

export const certificates = [
  {
    title: "RCMC Certification",
    image: RCMC,
    description: "Certificate of Registration as Exporter with APEDA.",
  },
  {
    title: "CE Certification",
    image: APEDA,
    description: "Compliance with European Union product safety standards.",
  },
  {
    title: "FSSAI Certification",
    image: FSSAI,
    description:
      "Approval from the Food Safety and Standards Authority of India.",
  },
];
