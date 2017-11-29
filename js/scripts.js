function drawTree(h){
  
	for ( var i = 1; i <= h; i++ ) {
    	
    	var star = '';
    	
        for ( var j = i; j < h; j++ ){
        	star += ' ';
        }

        for ( var k = 0; k < (i*2)-1; k++ ){
        	star += '*';
        }
        
        console.log(star);
    }
     
}

drawTree(prompt('Podaj wysokość choinki'));
