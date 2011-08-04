Spinner = {
    create : function() {
        var spinner = document.createElement('div');
        spinner.innerHTML = '<svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><circle cx="25" cy="25" r="20" fill="none" stroke="black" stroke-width="3" stroke-dasharray="24 18"/></svg>';
        spinner.className = 'bringIn';
        spinner.style.position = 'absolute';
        spinner.style.left = (window.innerWidth-50)/2 + 'px';
        spinner.style.top = (window.innerHeight-50)/2 + 'px';
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
