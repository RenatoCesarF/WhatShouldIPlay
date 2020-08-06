import React from 'react';
import styles from './style'
import { View, Text, StatusBar, Image, Linking, FlatList } from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'; 

//on open, run function Details() with game id that comes from list

export default function Details(){

  const navigation = useNavigation();

  function ytRedirect(){ // This function redirect you to a gameplay of the game
    Linking.openURL(`https://www.youtube.com/results?search_query=nome+do+jogo`);
  }
  function steamRedirect(){ // This function redirect you to steam store of the game
    Linking.openURL(`https://store.steampowered.com/search?term=nome+do+Jogo`)
  }

  return(
    <View style={ styles.container}>
      
      <View style={styles.header}>
        <FontAwesome name="arrow-left" color="#F21B3F" size={27}
            onPress={() =>  navigation.goBack()}
        />
        <FontAwesome name="bookmark" color="#F21B3F" size={27}/>
      </View>

      <View style={styles.imageView}>
        <Image 
          style={{width: 260, height: 300}}
          resizeMode="contain"
          source={{uri:"https://images.igdb.com/igdb/image/upload/t_cover_big/co23jy.jpg"}}
        />
      </View>

      <View style={styles.details}>

        <Text style={styles.topic}> Name:</Text>
        <Text style={styles.topic}> Genre:</Text>
        <Text style={styles.topic}> Developer:</Text>
        <Text style={styles.topic}> Launch: </Text>
        <Text style={styles.topic}> Available on:</Text>

        <Text style={styles.action} onPress={ytRedirect}>
          <FontAwesome name="youtube-play" color="#F21B3F" size={30} onPress={ytRedirect}/>
          Watch a Gameplay
        </Text>

        <Text style={styles.action} onPress={steamRedirect} >
          <FontAwesome name="credit-card-alt" color="#F21B3F" size={27} onPress={steamRedirect}/>
          Buy
        </Text>
        
      </View>

      <StatusBar style="auto" />
    </View>
);
}


// on click in setinha navigation.pop();  navigation.navigate('List')
