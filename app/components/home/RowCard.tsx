import { Dimensions, Text } from 'react-native'
import React from 'react'
import { Card, Image } from 'tamagui'
import { FontColors, fonts } from '~/app/constants'

const cardWidth = Dimensions.get("screen").width/2.75;

interface RowCardProps {
  text: string;
  image: any;
}

const RowCard:React.FC<RowCardProps> = ({text,image}) => {
  return (
      <Card
      borderWidth={1}
      borderColor={"lightgrey"}
        padding={10}
        justifyContent="center"
        alignItems="center"
        backgroundColor={"white"}
        animation="quick"
        flex={1}
        height={cardWidth}
        scale={0.9}
        hoverStyle={{ scale: 0.95 }}
        pressStyle={{ scale: 0.95 }}
      >
        <Image
          style={{ width: "80%", height: "80%" }}
          source={image}
        />
        <Text style={[FontColors.primaryDark, fonts.normalBold]}>
          {text}
        </Text>
      </Card>
  )
}
export default RowCard