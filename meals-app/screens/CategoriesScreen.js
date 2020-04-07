import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


const CategoriesScreen = props => {
	console.log(props)

	return (
		<View style={styles.screen}>
			<Text>The categories screen</Text>
			<Button title="Go to meals!" onPress={()=>{
				props.navigation.navigate({routeName: 'CategoryMeals'})
			}}  />
		</View>
	)
}


export default CategoriesScreen ;


const styles = StyleSheet.create({
	screen : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ccc',
	}

})