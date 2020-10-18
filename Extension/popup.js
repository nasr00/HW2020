src='https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/tesseract.js'
document.getElementById("Submit").addEventListener("click", function() {loadFile()})
function loadFile() {
console.log("to");
	var image = document.getElementById('output');
	var fileInput = document.getElementById("fileInput");
	if(fileInput.files[0]) {
		image.src = URL.createObjectURL(fileInput.files[0]);
		document.getElementById("Resize").style.display = "block";
		document.getElementById("Resize").addEventListener("click", function () {

		});
		document.getElementById("Translate").style.display = "block";
		document.getElementById("Translate").addEventListener("click", function () {
			document.getElementById("WaitMessage").style.display = "block";
			Tesseract.recognize(image).then(function(result){
        		    console.log(result.text);
                            alert(result.text);
			    document.getElementById("download").style.display = "block";
			    document.getElementById("download").addEventListener("click", function() {
				    var text = result.text;
				    var data = new Blob([text], {type: 'text/plain'});
				    var url = window.URL.createObjectURL(data);
				    document.getElementById('download').href = url;

			        });
                        });
		});
	}
};
