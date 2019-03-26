require('../css/main.css');

class Button {

    constructor(heading) {
        this.log('Constructor');
        this.heading = heading;
        this.id = heading.replace(' ', '_') + '_button';
        this.primaryElement = this.createElement();
        this.attachElement();
    }

    log(message) {
        console.log("Button: " + message);
    }

    attachElement() {
        this.log('Attach ' + this.id);
        document.getElementById('button-container').appendChild(this.primaryElement);
    }

    createElement() {
        this.log('Create ' + this.id);
        const button = document.createElement('DIV');
        button.className = 'button';
        button.id = this.id;
        button.onclick = this.makeActive.bind(this);
        const title = document.createElement('DIV');
        title.className = 'inner';
        title.innerText = this.heading;
        button.appendChild(title);
        return button;
    }

    makeActive() {
        this.log('Make ' + this.id + ' active');
        const currentActive = document.getElementsByClassName('activeButton')[0];
        if(currentActive !== undefined) {
            currentActive.className = 'button';
        }
        const selectedButton = document.getElementById(this.id);
        selectedButton.className = 'button activeButton';
    }
}




if(window.CustomObjects === undefined) {
    window.CustomObjects = {};
}
window.CustomObjects.Button = Button;
const categories = ['Button one', 'Button Two', 'Button Three', 'Button Four'];
for(const category of categories) {
    new Button(category);
}

