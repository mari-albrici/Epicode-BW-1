class ProgressRing extends HTMLElement {
    constructor() {
        super();
        const stroke = 60;
        const radius = 325;
        const normalizedRadius = radius - stroke * 2;
        this._circumference = normalizedRadius * 2 * Math.PI;

        this._root = this.attachShadow({mode: 'open'});
        this._root.innerHTML = `<svg height="${radius * 2}" width="${radius * 2}">
                                <circle
                                    stroke="#00ffff"
                                    stroke-dasharray="${this._circumference} ${this._circumference}"
                                    style="stroke-dashoffset:${this._circumference}"
                                    stroke-width="${stroke}"
                                    fill="transparent"
                                    r="${normalizedRadius}"
                                    cx="${radius}"
                                    cy="${radius}"/>
                                </svg>

                                <style>
                                    circle {
                                    transition: stroke-dashoffset 0.35s;
                                    transform: rotate(-90deg);
                                    transform-origin: 50% 50%;
                                    }
                                </style>`;
    }

    setProgress(percent) {
        const offset = this._circumference - (percent / 100 * this._circumference);
        const circle = this._root.querySelector('circle');
        circle.style.strokeDashoffset = offset;
    } 

    static get observedAttributes() {
        return ['progress'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'progress') {
            this.setProgress(newValue);
        }
    }
}

window.customElements.define('progress-ring', ProgressRing);

let progress = 0
const el = document.querySelector('progress-ring');

const interval = setInterval(() => {
    progress += 2;
    el.setAttribute('progress', progress);
    if (progress === 100)
        clearInterval(interval);
}, 0050);


/* PER SELEZIONARE TESTO DA PRESENTARE NEL CIRCLE IN BASE AL SUPERAMENTO O MENO DEL TEST

let congratsMessage = document.getElementById('congrats')
let underTitle = document.getElementById('passed');
let message = document.getElementById('message');

if (progress => 60) {
    congratsMessage.innerHTML = 'Congratulations!'
    underTitle.innerHTML = 'You passed the exam.'
    message.innerHTML = 'We'll send you the certificate in a few minutes. Check your email (including the promotions/spam folder)'
} else {
    congratsMessage.innerHTML = 'We're sorry'
    underTitle.innerHTML = 'You did not pass the exam.'
    message.innerHTML = 'Check your email (including the promotions/spam folder)'
}
*/