class CustomCursor {
    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.cursorFollower = document.querySelector('.cursor-follower');
        this.links = document.querySelectorAll('a, button');
        
        this.init();
    }

    init() {
        if (!this.cursor || !this.cursorFollower) return;

        document.addEventListener('mousemove', (e) => this.moveCursor(e));
        document.addEventListener('mousedown', () => this.cursorDown());
        document.addEventListener('mouseup', () => this.cursorUp());
        
        this.links.forEach(link => {
            link.addEventListener('mouseenter', () => this.cursorHover());
            link.addEventListener('mouseleave', () => this.cursorUnhover());
        });
    }

    moveCursor(e) {
        gsap.to(this.cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });

        gsap.to(this.cursorFollower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3
        });
    }

    cursorDown() {
        gsap.to(this.cursor, {
            scale: 0.8,
            duration: 0.2
        });

        gsap.to(this.cursorFollower, {
            scale: 0.8,
            duration: 0.2
        });
    }

    cursorUp() {
        gsap.to([this.cursor, this.cursorFollower], {
            scale: 1,
            duration: 0.2
        });
    }

    cursorHover() {
        gsap.to(this.cursor, {
            scale: 2,
            duration: 0.2
        });

        gsap.to(this.cursorFollower, {
            scale: 2,
            duration: 0.2
        });
    }

    cursorUnhover() {
        gsap.to([this.cursor, this.cursorFollower], {
            scale: 1,
            duration: 0.2
        });
    }
}

// Initialize custom cursor
window.addEventListener('load', () => {
    new CustomCursor();
}); 