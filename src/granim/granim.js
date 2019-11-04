import Granim from 'granim'
import BackgroundImage from '../assests/aron.jpg';

var granimInstance = new Granim({
    element: '#image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: BackgroundImage,
        blendingMode: 'multiply',
        stretchMode: ['stretch-if-bigger', 'stretch'],
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
});

export default granimInstance;