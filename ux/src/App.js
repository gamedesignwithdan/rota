import React from 'react';
import { RotaTable } from './RotaTable'

class App extends React.Component {
	state = {
		loading: true,
		rota: {}
	}

	async componentDidMount() {
		if (this.state.loading) {
			const response = await fetch('http://localhost:8080/rota');
			const json = await response.json();
			this.setState({
				loading: false,
				rota: json,
			})
		}
	}	

	render() {
		console.log(this.state)
		return(
			<React.Fragment>
				{
					!this.state.loading ? 
						<RotaTable rota={this.state.rota}/>
					:
						null
				}
			</React.Fragment>
		)
	}
}

export default App;