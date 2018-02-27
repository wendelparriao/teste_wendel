var animations = [
    // para fazer efeitos de animações em simultâneo com vários elementos html, insira um array com hashes como no exemplo abaixo:
    [
        {
            id: '#circuloImg',  
            duration: 400,  
            delayBefore: 0,  
            delayAfter: 0,  
            animations: {width: 300, height: 250, top:0, left:0} 
        },
        {
            id: '#pontos',
            duration: 400,
            delayBefore: 0,
            delayAfter: 0,
            animations: {left: 0, top: 0, width:285}
        },
        {
            id: '#black', 
            duration: 200, 
            delayBefore: 200, 
            delayAfter: 0, 
            animations: {left: 0} 
        },
        {
            id: '#friday', 
            duration: 200, 
            delayBefore: 200, 
            delayAfter: 0, 
            animations: {right: 0} 
        },
        {
            id: '#caixa', 
            duration: 300, 
            delayBefore: 100,
            delayAfter: 0, 
            animations: {top: 0, opacity:1} 
        },
        
    ],
    [
        {
            id: '#circuloImg', 
            duration: 600, 
            delayBefore: 2000, 
            delayAfter: 0, 
            animations: {width: 0, height: 0, top:125, left:150, opacity:0}
        },
        {
            id: '#pontos', 
            duration: 400, 
            delayBefore: 2000, 
            delayAfter: 0, 
            animations: {left: -25, top: 0, width:200, opacity:0} 
        },
        {
            id: '#black', 
            duration: 400, 
            delayBefore: 2000, 
            delayAfter: 0, 
            animations: {left: -300, opacity:0} 
        },
        {
            id: '#friday', 
            duration: 400, 
            delayBefore: 2000, 
            delayAfter: 0, 
            animations: {right: -300, opacity:0} 
        },
        {
            id: '#caixa', 
            duration: 300, 
            delayBefore: 2000, 
            delayAfter: 0, 
            animations: {top: 20, opacity:0} 
        },    
    ],
    /////////////////// SEGUNDA ANIMAÇÃO /////////////////////////////
    [
        {
            id: '#pontosTop', 
            duration: 400, 
            delayBefore: 0, 
            delayAfter: 0, 
            animations: {left: 0, opacity:1}
        },
        {
            id: '#pontosBottom', 
            duration: 400, 
            delayBefore: 0, 
            delayAfter: 0, 
            animations: {left: 0, opacity:1}
        }, 
        {
            id: '#reducao', 
            duration: 300, 
            delayBefore: 100, 
            delayAfter: 0, 
            animations: {top: 0, opacity:1} 
        }, 
        {
            id: '#aplicacao', 
            duration: 400, 
            delayBefore: 300, 
            delayAfter: 0, 
            animations: {right: 0, opacity:1} 
        }, 
        {
            id: '#aplicacao2',  
            duration: 400,  
            delayBefore: 400,  
            delayAfter: 0, 
            animations: {right: 0, opacity:1} 
        }, 
    ],
    [
        {
            id: '#pontosTop',  
            duration: 400,  
            delayBefore: 2500,  
            delayAfter: 0,  
            animations: {left: -40, opacity:0} 
        },
        {
            id: '#pontosBottom',  
            duration: 400,  
            delayBefore: 2500,  
            delayAfter: 0,  
            animations: {left: -40, opacity:0} 
        },
        {
            id: '#reducao',  
            duration: 300,  
            delayBefore: 2500,  
            delayAfter: 0,  
            animations: {top: 40, opacity:0}  
        }, 
        {
            id: '#aplicacao',  
            duration: 300,  
            delayBefore: 2500,  
            delayAfter: 0,  
            animations: {top: 40, opacity:0}  
        }, 
        {
            id: '#aplicacao2',  
            duration: 300,  
            delayBefore: 2500,  
            delayAfter: 0,  
            animations: {top: 40, opacity:0}  
        },
    ],
    /////////////////// TERCEIRA ANIMAÇÃO /////////////////////////////
    [
        {
            id: '#dezessete',  
            duration: 200,  
            delayBefore: 100,  
            delayAfter: 0,  
            animations: {top: 0, opacity:100} 
        },
        {
            id: '#letraA',  
            duration: 200,  
            delayBefore: 300,  
            delayAfter: 0,  
            animations: {top: 0, opacity:100} 
        },
        {
            id: '#vinteSete',  
            duration: 200,  
            delayBefore: 500,  
            delayAfter: 0,  
            animations: {top: 0, opacity:100} 
        },
        {
            id: '#novembro',  
            duration: 200,  
            delayBefore: 450,  
            delayAfter: 0,  
            animations: {top: 0, opacity:100} 
        },
    ],
    [
        {
            id: '#dezessete',  
            duration: 200,  
            delayBefore: 2000,  
            delayAfter: 0,  
            animations: {top: 20, opacity:0} 
        },
        {
            id: '#letraA',  
            duration: 200,  
            delayBefore: 2000,  
            delayAfter: 0,  
            animations: {top: 20, opacity:0} 
        },
        {
            id: '#vinteSete',  
            duration: 200,  
            delayBefore: 2000,  
            delayAfter: 0,  
            animations: {top: 20, opacity:0} 
        },
        {
            id: '#novembro',  
            duration: 200,  
            delayBefore: 2000,  
            delayAfter: 0,  
            animations: {opacity:0} 
        },
    ],
    /////////////////// QUARTA ANIMAÇÃO /////////////////////////////
    [
        {
            id: '#quina',  
            duration: 300,  
            delayBefore: 100,  
            delayAfter: 0,  
            animations: {left: 0, opacity:1}  
        },
        {
            id: '#caixa004',  
            duration: 300,  
            delayBefore: 200,  
            delayAfter: 0,  
            animations: {left: 0, opacity:1}  
        },
        {
            id: '#com',  
            duration: 300,  
            delayBefore: 200,  
            delayAfter: 0,  
            animations: {opacity:1}  
        },
        {
            id: '#voce',  
            duration: 300,  
            delayBefore: 300,  
            delayAfter: 0,  
            animations: {opacity:1}  
        },
        {
            id: '#saibaMais',  
            duration: 300,  
            delayBefore: 400,  
            delayAfter: 0,  
            animations: {top:0, opacity:1}  
        },
        {
            id: '#condicao',  
            duration: 300,  
            delayBefore: 500,  
            delayAfter: 0,  
            animations: {opacity:1}  
        },
    ],
]

new YAnimation(animations, {loop: false, clearAfterEnd: false}).startAnimation()