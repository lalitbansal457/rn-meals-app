import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import  CategoriesScreen from '../screens/CategoriesScreen';
import  CategoriesMealScreen from '../screens/CategoriesMealScreen';
import  MealDetail from '../screens/MealDetailScreen';



const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: CategoriesMealScreen,
	MealDetail: MealDetail
})


export default createAppContainer(MealsNavigator);

