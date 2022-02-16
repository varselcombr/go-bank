import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { CreditCard } from "../CreditCard";

const SLIDER_WIDTH = Dimensions.get("window").width
const ITEM_WIDTH = SLIDER_WIDTH * 0.85

const CardsItems = [
   {cardType: "light"},
   {cardType: "dark"}
]

type renderProps = {
   item: {
      cardType: string
   }
   index: number
}

const RenderItem = ({item, index}:renderProps) => {
   return <CreditCard type={item.cardType} key={index} />
}

export const CardsCarousel = () => {

   const [slideIndex, setSlideIndex] = useState<number>(0)

	return (
      <View>
         <Carousel
            data={CardsItems}
            renderItem={RenderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            useScrollView={true}
            onSnapToItem={(index) => setSlideIndex(index)}
            containerCustomStyle={{flexGrow: 0}}
         />
         <Pagination
            dotsLength={2}
            activeDotIndex={slideIndex}
            containerStyle={{
               paddingVertical: 5,
            }}
            dotContainerStyle={{
               marginHorizontal: 5,
            }}
            dotStyle={{
               width: 10,
               height: 10,
               borderRadius: 5,
               backgroundColor: "#873F8C",
            }}
            inactiveDotStyle={{
               width: 10,
               height: 10,
               borderRadius: 8,
               backgroundColor: "#D0D5DB"
           }}
           inactiveDotScale={1}
         />
      </View>
   );
};
