(function(window){
    function App(){
        var self = this;
        
        self.showElement = function(id){
            document.getElementById(id).style.display = 'block';
        }
        
        self.hideElement = function(id){
            document.getElementById(id).style.display = 'none';
        }
    }
    window.app = new App();
    
})(this)