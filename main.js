function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3e_XGv_-6/model.json",modelReady)
}

/*function modelReady(){
    classifier.classify(gotResults)
}*/