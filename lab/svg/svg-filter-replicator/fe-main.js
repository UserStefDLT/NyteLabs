


let temp = `<filter id="flow-state-00s" x="-25%" y="-25%" width="150%" height="150%">
    <feTurbulence type="fractalNoise" id="fractalNoise"
        baseFrequency=".018" numOctaves="5" seed="5"
        result="fractalNoise">
    </feTurbulence>
    <feTurbulence type="turbulence" id="turbulence"
        baseFrequency=".036" numOctaves="5" seed="5"
        result="turbulence">
    </feTurbulence>
    <feDisplacementMap
        in="fractalNoise" in2="turbulence"
        xChannelSelector="R" yChannelSelector="R"
        scale="-40"
        result="Displaced">
    </feDisplacementMap>
    <feDisplacementMap
        in="SourceGraphic" in2="Displaced"
        xChannelSelector="R" yChannelSelector="R"
        scale="80"
        result="mixed">
    </feDisplacementMap>
</filter>`;

`
<feTurbulence
    numOctaves="5" seed="5" attributeName="baseFrequency"
    fractalNoise:   .018;.012;.032;.018;
    turbulence:     .029;.036;.021;.029; 
    />
<feDisplacementMap
    scale: -40;80;-40;
    scale: 80;20;80;
    />

[.018, .015, .012, .022, .032, .025, .018]
[.029, .0325, .036, .028, .021, .025, .029]
[-40, 0, 40, 80, 40, 0, -40]
[80, 60, 40, 20, 40, 60, 80]
`;

let fractalNoise = [.018, .015, .012, .022, .032, .025, .018];
let turbulence = [.029, .0325, .036, .028, .021, .025, .029];
let scale1 = [-40, 0, 40, 80, 40, 0, -40];
let scale2 = [80, 60, 40, 20, 40, 60, 80];

let f = [.018, .015, .012, .022, .032, .025, .018];
let t = [.029, .0325, .036, .028, .021, .025, .029];
let s1 = [-40, 0, 40, 80, 40, 0, -40];
let s2 = [80, 60, 40, 20, 40, 60, 80];

let t0 = [];
for (let i = 0; i < 7; i++) {
    let el_out = `
    <filter id="flow-state-${i}0s" x="-25%" y="-25%" width="150%" height="150%">
        <feTurbulence type="fractalNoise" id="fractalNoise"
            baseFrequency="${f[i]}" numOctaves="5" seed="5"
            result="fractalNoise">
        </feTurbulence>
        <feTurbulence type="turbulence" id="turbulence"
            baseFrequency="${t[i]}" numOctaves="5" seed="5"
            result="turbulence">
        </feTurbulence>
        <feDisplacementMap
            in="fractalNoise" in2="turbulence"
            xChannelSelector="R" yChannelSelector="R"
            scale="${s1[i]}"
            result="Displaced">
        </feDisplacementMap>
        <feDisplacementMap
            in="SourceGraphic" in2="Displaced"
            xChannelSelector="R" yChannelSelector="R"
            scale="${s2[i]}"
            result="mixed">
        </feDisplacementMap>
    </filter>
    `;
    t0.push(el_out);
}
console.log(t0.join('\n'));;


[.018, .015, .012, .022, .032, .025, .018]
[.029, .0325, .036, .028, .021, .025, .029]
[-40, 0, 40, 80, 40, 0, -40]
[80, 60, 40, 20, 40, 60, 80]


let fa = [[.018, .018], [.018, .032, .018], [.015, .025], [.012, .022]];
let ta = [[.029, .036], [.029, .021, .036], [.0325, .025], [.036, .028]];
let s1a = [[-40, -40], [-40, 40, -40], [0, 0], [40, 80]];
let s2a = [[80, 80], [80, 40, 80], [60, 60], [40, 20]];

let t1 = [];
console.log(t1.join('\n'));
for (let i = 0; i < 4; i++) {
    let f_ani = fa[i].join(';');
    let t_ani = ta[i].join(';');
    let s1_ani = s1a[i].join(';');
    let s2_ani = s2a[i].join(';');
    let el_out = `
    <filter id="flow-0${i}" x="-25%" y="-25%" width="150%" height="150%">
        <feTurbulence type="fractalNoise" id="fractalNoise"
            baseFrequency=".018" numOctaves="5" seed="5"
            result="fractalNoise">
            <animate id="noiseAnimate"
                attributeName="baseFrequency"
                values="${f_ani}" from="0"
                to="100" dur="10s"
                repeatCount="indefinite" >
            </animate>
        </feTurbulence>
        <feTurbulence type="turbulence" id="turbulence"
            baseFrequency=".036" numOctaves="5" seed="5"
            result="turbulence">
            <animate id="noiseAnimate"
                attributeName="baseFrequency"
                values="${t_ani}" from="0"
                to="100" dur="10s"
                repeatCount="indefinite" >
            </animate>
        </feTurbulence>
        <feDisplacementMap
            in="fractalNoise"
            in2="turbulence"
            scale="100"
            xChannelSelector="R"
            yChannelSelector="R"
            result="Displaced">
            <animate id="scaleAnimate"
                attributeName="scale"
                values="${s1_ani}" from="0"
                to="100" dur="10s"
                repeatCount="indefinite" >
            </animate>
        </feDisplacementMap>
        <feDisplacementMap
            in="SourceGraphic"
            in2="Displaced"
            scale="100"
            xChannelSelector="R"
            yChannelSelector="R"
            result="mixed">
            <animate id="scaleAnimate"
                attributeName="scale"
                values="${s2_ani}" from="0"
                to="100" dur="10s"
                repeatCount="indefinite" >
            </animate>
        </feDisplacementMap>
    </filter>
    `;
    t1.push(el_out);
}


`
<filter id="ny-flow" 
x="-25%" y="-25%" width="150%" height="150%">
<feTurbulence type="fractalNoise" id="fractalNoise"
    baseFrequency=".018" numOctaves="5" seed="5"
    result="fractalNoise">
    <animate id="noiseAnimate"
        attributeName="baseFrequency"
        values=".018;.012;.032;.018" from="0"
        to="100" dur="60s"
        repeatCount="indefinite" >
    </animate>
</feTurbulence>
<feTurbulence type="turbulence" id="turbulence"
    baseFrequency=".036" numOctaves="5" seed="5"
    result="turbulence">
    <animate id="noiseAnimate"
        attributeName="baseFrequency"
        values=".029;.036;.021;.029" from="0"
        to="100" dur="60s"
        repeatCount="indefinite" >
    </animate>
</feTurbulence>
<feDisplacementMap
    in="fractalNoise"
    in2="turbulence"
    scale="100"
    xChannelSelector="R"
    yChannelSelector="R"
    result="Displaced">
    <animate id="scaleAnimate"
        attributeName="scale"
        values="-40;80;-40" from="0"
        to="100" dur="60s"
        repeatCount="indefinite" >
    </animate>
</feDisplacementMap>
<feDisplacementMap
    in="SourceGraphic"
    in2="Displaced"
    scale="100"
    xChannelSelector="R"
    yChannelSelector="R"
    result="mixed">
    <animate id="scaleAnimate"
        attributeName="scale"
        values="80;20;80" from="0"
        to="100" dur="60s"
        repeatCount="indefinite" >
    </animate>
</feDisplacementMap>
</filter>
`;


