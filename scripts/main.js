(function(window){
    function App(){
        var self = this;
        
        self.showElement = function(id){
            document.getElementById(id).style.display = 'block';
        }
        
        self.hideElement = function(id){
            document.getElementById(id).style.display = 'none';
        }
        
        self.createNewReview = function(e){
            var clone = document.getElementsByClassName("review-div")[0].cloneNode(true);
            clone.getElementsByTagName("p")[0].innerHTML = e.userName;
            clone.getElementsByTagName("p")[1].innerHTML = e.review;
            clone.getElementsByTagName("h4")[0].innerHTML = e.title;
            document.getElementById("reviewList").prepend(clone);
            return null;
            
        }
    }
    window.app = new App();
    
})(this)