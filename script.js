function Concert(exhibition, location, organizer, date) {
    this.exhibition = exhibition;
    this.location = location;
    this.organizer = organizer;
    
    this.validateExhibition = function() {
        if (this.exhibition.length == 0) {
            alert("\Невідома назава предмету");
        }
    }
    this.validateLocation = function() {
        if (this.location.length == 0) {
            alert(" \ Невідоме місце проведення консультації");
        }
    }
		
    this.validateOrganizer = function() {
	var now = new Date();	
	if (this.organizer == now.getDate()) {
            alert(" \ Консультація проходить сьогодні");
        }else{ 
		if (this.organizer.length == 0){
		alert("Невідома дата консультації / Екзамену") }}
    }
}
function validate() {
    var inputData = new Array(
        document.getElementById("exhibition").value,
        document.getElementById("location").value,
        document.getElementById("organizer").value
    );

    var concert = new Concert(inputData[0], inputData[1], inputData[2]);

    concert.validateExhibition();
    concert.validateLocation();
    concert.validateOrganizer();
}


