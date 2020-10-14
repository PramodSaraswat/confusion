import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


function RenderDish({dish}){
	if(dish!=null)
		return(
			<Card>
				<CardImg top src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card> 
		);

		else 
			return(
				<div></div>
			);
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);



class CommentForm extends React.Component {
	constructor(props){
		super(props);
		this.state={
			isNavOpen:false
		};
		this.toggleNav=this.toggleNav.bind(this);
		this.toggleModal=this.toggleModal.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);

	}

	toggleNav(){
		this.setState({
			isNavOpen : !this.state.isNavOpen
		});
	}

	toggleModal(){
		this.setState({
			isModalOpen : !this.state.isModalOpen
		});
	}

	handleSubmit(values){
		this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
	}
	render(){
		return(<>
				<Button outline onClick={this.toggleModal}>
					<span className="fa fa-pencil fa-lg">Submit Comment</span>
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
	        		<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
	        		<ModalBody>
	        			<LocalForm onSubmit={(values) => this.handleSubmit(values)} >
	        				<Row className="form-group">
	                            <Label htmlFor="rating" md={10}>Rating</Label>
	                            <Col md={10}>
	                                <Control.select model=".rating" name="rating" className="form-control">
	                                	<option>1</option>
	                                	<option>2</option>
	                                	<option>3</option>
	                                	<option>4</option>
	                                	<option>5</option>
	                                </Control.select>
	                            </Col>
                        	</Row>
	        				<Row className="form-group">
	                            <Label htmlFor="author" md={10}>Your Name</Label>
	                            <Col md={10}>
	                                <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control" validators={{required, minLength: minLength(3), maxLength: maxLength(15)}} />
	                                <Errors className="text-danger" model=".author" show="touched" messages={{required: 'Required',minLength: 'Must be greater than 2 characters',maxLength: 'Must be 15 characters or less'}} />
	                            </Col>
                        	</Row>
                        	<Row className="form-group">
                        		<Label htmlFor="comment" md={10}>Comment</Label>
                        		<Col md={10}>
                        			<Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                        		</Col>
                        	</Row>
	   	      				<Row className="form-group">
	   	      					<Col md={10}>
		                            <Button type="submit" color="primary">
		                                    Submit
		                          	</Button>
		                        </Col>
                        	</Row>
	        			</LocalForm>
        			</ModalBody>
        		</Modal>
        	</>
		);
	}



}

function RenderComments({comments, addComment, dishId}){
			if(comments != null) {
				const displayComment=comments.map((content)=>{return(
				<div key={content.id}>
					<li className="mt-3">{content.comment}</li>
					<li className="mt-3">--{content.author}, {new Date(content.date).toDateString()}</li>
				</div>)});
				return(
					<ul className="list-unstyled">
					<h1>Comment</h1>
					{displayComment}
					</ul>
				);
			}
			
			else 
				return(<div></div>);
	 }

const Dishdetail = (props) => {
	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
					<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>{props.dish.name}</h3>
					<hr />
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<RenderDish dish={props.dish} />
				</div>
				<div className="col-12 col-md-5 m-1 ">			
					<RenderComments comments={props.comments} />
					<CommentForm addComment={props.addComment} dishId={props.dish.id} />	
		
				</div>
			</div>
		</div>
	);
}



export default Dishdetail;