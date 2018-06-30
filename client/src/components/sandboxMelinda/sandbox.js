import React from 'react';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
} from 'reactstrap';
import cherrriesCard from './images/cherriesCard.jpg';
import pearCard from './images/pearCard.jpg';
import carrotsCard from './images/carrotsCard.jpg';
import cilantroCard from './images/cilantroCard.jpg';


export default class Example extends React.Component {
	render() {
		return (


			<div class="row">

				<div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
					<Card>
						<div class="row">
							<div class="col-md">
								<CardImg top src={cherrriesCard} alt="cherries" />
							</div>
						</div>
						<CardBody>
							<div class="row">
								<div class="col-sm">
									<CardTitle>City</CardTitle>
									<Button>More Info</Button>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>

				<div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
					<Card>
						<div class="row">
							<div class="col-md">
								<CardImg top src={pearCard} alt="pear" />
							</div>
						</div>
						<CardBody>
							<div class="row">
								<div class="col-sm">
									<CardTitle>City</CardTitle>
									<Button>More Info</Button>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>

				<div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
					<Card>
						<div class="row">
							<div class="col-md">
								<CardImg top src={carrotsCard} alt="carrots" />
							</div>
						</div>
						<CardBody>
							<div class="row">
								<div class="col-sm">
									<CardTitle>City</CardTitle>
									<Button>More Info</Button>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>

				<div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
					<Card>
						<div class="row">
							<div class="col-md">
								<CardImg top src={cilantroCard} alt="cilantro" />
							</div>
						</div>
						<CardBody>
							<div class="row">
								<div class="col-sm">
									<CardTitle>City</CardTitle>
									<Button>More Info</Button>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>

			</div >

		);
	}
}




