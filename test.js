let tData = [{
    inputs: [0, 0],
    expect: [0]
}, {
    inputs: [1, 0],
    expect: [1]
}, {
    inputs: [0, 1],
    expect: [1]
}, {
    inputs: [1, 1],
    expect: [0]
}];


function setup() {
    let n = new NeuralNetworkModel(2, 2, 1);
    for (let i = 0; i < 50000; i++) {
        let data = random(tData);
        n.train(data.inputs, data.expect);
    }


    console.log(n.feedForward([0, 1]));
    console.log(n.feedForward([1, 0]));
    console.log(n.feedForward([0, 0]));
    console.log(n.feedForward([1, 1]));

}


function draw() {

}
