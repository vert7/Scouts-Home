import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../../styles/registration.scss";

const Registrationform = () => {
	return (
		<div className="signupspace">
			<center>
				<h1>Sign Up</h1>
				<Form-sm>
					<FormGroup>
						<Label for="exampleEmail">Email</Label>
						<Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
					</FormGroup>
					<FormGroup>
						<Label for="examplePassword">Password</Label>
						<Input
							type="password"
							name="password"
							id="examplePassword"
							placeholder="password placeholder"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleFile">Upload your profile photo.</Label>
						<Input type="file" align="middle" name="file" id="exampleFile" />
						<FormText color="light">P.S. Artists with profile photos get more hits</FormText>
					</FormGroup>
					<FormGroup tag="fieldset">
						<legend>You will be using ScoutMaster as...</legend>
						<FormGroup check>
							<Label check>
								<Input type="radio" name="radio1" /> An Artist
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="radio" name="radio1" /> A Scout
							</Label>
						</FormGroup>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input type="checkbox" /> Receive email communications
						</Label>
					</FormGroup>
					<Button className="sendsignup">Submit</Button>
				</Form-sm>
			</center>
		</div>
	);
};

export default Registrationform;
