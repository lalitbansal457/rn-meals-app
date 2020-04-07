import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


const CategoriesMealScreen = props => {


	return (
		<View style={styles.screen}>
			<Text>The category meal screen</Text>
		</View>
	)
}


export default CategoriesMealScreen ;


const styles = StyleSheet.create({
	screen : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}

})