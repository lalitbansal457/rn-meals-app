import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


const MealDetail = props => {


	return (
		<View style={styles.screen}>
			<Text>The filter screen</Text>
		</View>
	)
}


export default MealDetail ;


const styles = StyleSheet.create({
	screen : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}

})