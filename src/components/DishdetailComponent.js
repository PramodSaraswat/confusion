import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


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

function RenderComments({comments}){
   		if(comments != null) {
   			const displayComment=comments.map((content)=>{return(<div key={content.id}>

				    <li className="mt-3">{content.comment}</li>

					<li className="mt-3">--{content.author}, {new Date(content.date).toDateString()}</li>
					</div>)});
				return(<ul className="list-unstyled">
				<h1>Comment</h1>
				{displayComment}
				</ul>
				);}
   		
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
	  
	       		</div>
            </div>
	   </div>
    	);
	}



export default Dishdetail;