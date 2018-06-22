import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default class Analytics extends Component{

	constructor(props) {
	    super();
	    this.state = { 
	    	text: 'Start typing...' 
	    };
	}

	render(){
		return(
			<View style={styles.container}>
				<Text>Type in your Tweet</Text>
					<TextInput 
						multiline={true} 
						numberOfLines={4} 
						style={styles.textInput} 
						onChangeText={(text) => this.setState({text})} 
						value={this.state.text}
					>
					</TextInput>
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
	textInput: {
		height: 20,
		borderColor: 'gray',
		borderWidth: 1
	}
})
