import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo';
// import { TWITTER_API_KEY } from 'react-native-dotenv';

export default class twitterLogIn extends Component {

	// constructor(props) {
	//     super(props);
	//     this.state = { 
	//     	null
	//     };
	//   }

	 _logIn = () => {

	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.titleText}>TwitterAI</Text>
				<LinearGradient
			          colors={[ '#841584', '#134E5E']}
			          style={{ padding: 8, alignItems: 'center', borderRadius: 2 }}
			          start={[ 0.0, 0.5 ]} end={[ 1.0, 0.5 ]} locations={[ 0.0, 1.0 ]}>				
				<TouchableOpacity accessibilityLabel="Sign in with Twitter" onPress={this._logIn}>
					<Text style={styles.buttonText}>Sign in with Twitter</Text>
				</TouchableOpacity>
				</LinearGradient>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleText: {
		fontSize: 20,
		marginBottom: 20
	},
	buttonText: {
		fontSize: 20
	}
})