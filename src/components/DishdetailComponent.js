import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';



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

function RenderComments({dish}){
   		if(dish != null) {
   			const displayComment=dish.comments.map((content)=>{return(<div key={content.id}>

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
		return (<div className="container">
			<div className="row">
               <div className="col-12 col-md-5 m-1">
                  
                    <RenderDish dish={props.dish} />
               
               </div>
               <div className="col-12 col-md-5 m-1 ">
            	
	                  <RenderComments dish={props.dish} />
	  
	       		</div>
            </div>
	</div>	);
	}



export default Dishdetail;