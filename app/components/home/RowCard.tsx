import { Dimensions, Text } from 'react-native'
import React from 'react'
import { Card, Image } from 'tamagui'
import { FontColors, fonts } from '~/app/constants'

const cardWidth = Dimensions.get("screen").width/2.75;

interface RowCardProps {
  text: string;
  image: any;
  bg: string;
  br: string;
}

const RowCard:React.FC<RowCardProps> = ({text,image, bg, br}) => {
  return (
      <Card
      borderWidth={1}
      borderColor={br}
        padding={10}
        justifyContent="center"
        alignItems="center"
        backgroundColor={bg}
        animation="quick"
        flex={1}
        scale={0.9}
        hoverStyle={{ scale: 0.95 }}
        pressStyle={{ scale: 0.95 }}
        gap={10}
      >
        <Image
          style={{borderRadius:100, width: 100, height: 100 }}
          source={image}
        />
        <Text style={[FontColors.whiteFont, fonts.normalBold]}>
          {text}
        </Text>
      </Card>
  )
}
export default RowCard