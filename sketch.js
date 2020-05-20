let nn;

let trainingData = [{
        inputs: [0, 0],
        outputs: [0]
    },
    {
        inputs: [1, 1],
        outputs: [0]
    },
    {
        inputs: [1, 0],
        outputs: [1]
    },
    {
        inputs: [0, 1],
        outputs: [1]
    },
]
let lr;

function setup() {
    createCanvas(400, 400);
    nn = new NeuralNetworkModel(2, 4, 1);//play with the hidden nodes to see how frequently it gets stuck or not
    lr = createSlider(0, 0.5, 0, 0.01) // (slider goes between 0 and 0.5, starts at 0 and increments by 0.01)
}


function draw() {
    background(0);
    for (let i = 0; i < 1000; i++) {
        let data = random(trainingData);
        nn.train(data.inputs, data.outputs);
    }

    nn.setLearningRate(lr.value());

    let res = 10;
    let rows = width / res;
    let cols = height / res;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let x0 = i / rows;
            let x1 = j / cols;
            let inputs = [x0, x1];
            let y = nn.feedForward(inputs);
            noStroke();
            fill(y * 255);
            rect(i * res, j * res, res, res);
        }
    }

}
