$( document ).ready(function() {
/** filter **/
function filter(){
	alert("test");
	}

/*$("#btn-filter").click(function(){
	var genderMaleFilter;
	var genderFemaleFilter; 
	if($("#filter input[type='male']").is(":checked")){ genderMaleFilter = true } else { genderMaleFilter = false };
	if($("#filter input[type='female']").is(":checked")){ genderFemaleFilter = true } else { genderFemaleFilter = false };
	var colorFilter = $("#filter select[name='farbe']").prop("value");
	var materialFilter = $("#filter select[name='material']").prop("value");
	var minSizeFilter = $("#filter #rangeBoxMin input[type='range']").prop("value");
	var maxSizeFilter = $("#filter #rangeBoxMax input[type='range']").prop("value");
	
	alert( genderMaleFilter + " " + genderFemaleFilter + " " + colorFilter + " " + materialFilter + " " + minSizeFilter + " " + maxSizeFilter);
	
	$(".articleListItemWrapper").each(function() {
        var genderMaleArticle;
		var genderMaleArticle;
		if($(this).children("articleGender span").text() == "male"){ genderMaleArticle = true } else { genderMaleArticle = false };
		if($(this).children("articleGender span").text() == "female"){ genderFemaleArticle = true } else { genderFemaleArticle = false };
		var colorArticle = $(this).children("articleColor span").text()
		var materialArticle = $(this).children("materialColor span").text()
		
		if( materialFilter == material() )
    });
	
	})*/

/** Artikelverwaltung **/

/*** footer ausklappen ***/
$("#footerUp").click(function(){
	$("#footerUp").css("display","none");
	$("#footerDown").css("display","block");
	$("#footerWrapper").animate({ height: 250},300);
	})

$("#footerDown").click(function(){
	$("#footerDown").css("display","none");
	$("#footerUp").css("display","block");
	$("#footerWrapper").animate({ height: 100},300);
	})

/*** Produktbeschreibung ausklappen ***/
$(".btn-articleText").click(function(){
	$(this).parent("form").children(".articleText").toggle(1000);
});

$(".checkboxStatus").click(function(){
	if( $(this).prop("checked") == true ){
		$(this).prop("checked" , false);
		$(this).children("label").animate( { left: 7, backgroundColor: "#444444" }, "slow");
		}
		else {
			$(this).prop("checked" , true);
			$(this).children("label").animate( { left: 40, backgroundColor: "#BCC2BA" }, "slow");
			}
	})

$(".checkboxAdmin").click(function(){
	if( $(this).prop("checked") == true ){
		$(this).prop("checked" , false);
		$(this).children("label").animate( { left: 7, backgroundColor: "#444444" }, "slow");
		}
		else {
			$(this).prop("checked" , true);
			$(this).children("label").animate( { left: 40, backgroundColor: "#BCC2BA" }, "slow");
			}
	})
	
$(".checkboxArticleActive").click(function(){
	if( $(this).prop("checked") == true ){
		$(this).prop("checked" , false);
		$(this).children("label").animate( { left: 7, backgroundColor: "#444444" }, "slow");
		}
		else {
			$(this).prop("checked" , true);
			$(this).children("label").animate( { left: 40, backgroundColor: "#BCC2BA" }, "slow");
			}
	})

});