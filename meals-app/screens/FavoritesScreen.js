import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


const FavoritesScreen = props => {


	return (
		<View style={styles.screen}>
			<Text>The favorites screen</Text>
		</View>
	)
}


export default FavoritesScreen ;


const styles = StyleSheet.create({
	screen : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}

})