import Image from "next/image";

function CatCard() {
	return (
	  <div className="cat-card">
		<Image src="/cutecat.jpeg" alt="Cute cat 42" className="cat-image" width="300" height="300" />
		<div className="cat-info">
		  <div className="cat-name">
			<Image src="/decline.png" alt="Decline" className="decline" width="50" height="50" />
				Cute cat 42
			<Image src="/accept.png" alt="Like" className="like" width="50" height="50" />
		 </div>
		  <div className="cat-details">
			<span className="cat-age">Age: 5 months</span>
			<span className="cat-price">Price: 50 €</span>
		  </div>
		  <div className="cat-description">
			Cute cat 42 is very cute and fluffy. Likes humans very much.
		  </div>
		</div>
	  </div>
	);
  }
  
  export default CatCard;