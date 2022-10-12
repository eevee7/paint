class Welcome { 
constructor() {

this.logo = createImg(this.logoImage);

this.playButton = createButton("Play");
    
this.story=createElement('h3');
}

hideElements() {
    this.playButton.hide();
    this.story.hide();
    this.logo.hide();
}



display() {
        
     this.story.class("playButton");
     this.story.position(width / 2.3, height / 2-100);
     this.story.html("...");
     this.logo.position(width / 2, 10);
     this.playButton.class("playButton");
     this.story.class("playButton");
     this.playButton.position(width / 2.3, height / 2 +100);
     this.playButton.mousePressed(() => {
        this.hideElements();
        });
    
    }

}