import React from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const Component = this.props.component;
		const isAuthenticated = !!(localStorage.getItem('token') && localStorage.getItem('role'));

		return isAuthenticated ? (
			<Component props={this.props}/>
		) : (
			<Redirect to={{ pathname: '/login'}} />
		);
	}
}

export default ProtectedRoute;