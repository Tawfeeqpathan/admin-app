import React from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import img1 from "../../../images/img1.jpg"
import img2 from "../../../images/img2.png"
import img3 from "../../../images/img3.jpg"
const Carousel = () => {
    const cData = [
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img3    
          },
        {
            id: 3,
            image: img3
        }
    ]
  return (
    <Swiper
    style={{height:150}}
      showsPagination={true}
      autoplay={true}
      autoplayTimeout={3}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    >
      {cData.map((item)=>(<View style={styles.slide}  key={item.id}>
        <Image source={item.image}   style={{  height:150,
    width:370,borderRadius:10}} />
      </View>))}
    </Swiper>
  );
};

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: -31,
  },
  activeDot: {
    backgroundColor: '#007AFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: -31,
    
  },
};

export default Carousel;


