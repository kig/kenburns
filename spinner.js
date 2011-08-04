Spinner = {
    create : function() {
        var spinner = document.createElement('div');
        spinner.className = 'bringIn';
        spinner.style.position = 'absolute';
        spinner.style.left = (window.innerWidth-50)/2 + 'px';
        spinner.style.top = (window.innerHeight-50)/2 + 'px';
        var canvas = document.createElement('canvas');
        canvas.className = 'spinner';
        canvas.width = canvas.height = 50;
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 4;
        var third = Math.PI*2 / 3;
        for (var i=0; i<3; i++) {
          ctx.beginPath();
          ctx.arc(25, 25, 20, i*third, i*third+Math.PI/2, false);
          ctx.stroke();
        }
        spinner.appendChild(canvas);
        return spinner;
    },
    
    removeSelf : function() {
        return function() { this.parentNode.removeChild(this); }
    },
    
    remove : function(spinner) {
        spinner.addEventListener('webkitAnimationEnd', this.removeSelf, false);
        spinner.addEventListener('animationend', this.removeSelf, false);
        spinner.className = 'bringOut';
    }
};
