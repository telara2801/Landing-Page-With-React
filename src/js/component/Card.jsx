import React from "react";

const marcoStyles = {
	//width: "18ren",
	//ssdsd class="img-fluid", width: 100%; or .w-100
	color: "darkgrey",
	background: "red",
	borderRadius: "50px",
	width: "10px",
	border: "none",
};

export const Card = () => {
	//here you have to return expected html using the class="card-img-top"  class="p-2 bg-light border"
	return (
		<div
			container="sm"
			className="card  d-flex justify-content-center"
			style={{ with: "18rem" }}>
			<img
				className="card-img-top"
				src="http://via.placeholder.com/500x325"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<div>
					<div>
						<p className="card-text ">
							Some quick example text to build on the card title
							and fill the card's content.
						</p>
					</div>
					<div className="d-flex justify-content-center ">
						<a href="#" className="btn btn-primary ">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
