import React from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';



class Dishdetail extends React.Component {


	renderDish(dish){
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

   renderComments(dish){
   		if(dish!=null) {
   			const dislayComment=dish.comments.map((content)=>{return(<div key={content.id}>

					<li className="mt-3">{content.comment}</li>

					<li className="mt-3">--{content.author}, {new Date(content.date).toDateString()}</li>
					</div>)});
				return(<ul className="list-unstyled">
				<h1>Comment</h1>
				{dislayComment}
				</ul>
				);}
   		
   		else 
   			return(<div></div>);
   }

	render(){
		return (<>
			<div className="row">
               <div className="col-12 col-md-5 m-1">
                  
                    {this.renderDish(this.props.dish)}
               
               </div>
               <div className="col-12 col-md-5 m-1 ">
            	
	                  {this.renderComments(this.props.dish)}
	  
	       		</div>
            </div>
	</>	);
	}

}

export default Dishdetail;