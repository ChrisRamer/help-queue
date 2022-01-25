import React from "react";
import ticketsImage from "./../img/tickets.png";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
	font-size: 24px;
	color: indigo;
`;

function Header() {
	return (
		<React.Fragment>
			<HelpQueueHeader>
				<h1>Help Queue</h1>

				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/signin">Sign In</Link>
					</li>
				</ul>
			</HelpQueueHeader>
		</React.Fragment>
	);
}

export default Header;