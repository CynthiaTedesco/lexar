
var alreadyTranslated = false;

$(function() {
    $("#header").load("header.html", function() {
        headerBehavior();
    });
});

$(function() {
    $("#footer").load("footer.html", function() {
        footerBehavior();
    });
});

var goToContactus = function(){
    window.location = "contactanos.html";
}

var goToJoinUs = function(){
    window.location = "sumate.html";
}

var goToHome = function(){
    window.location = "index.html";
}

var goToServices = function(){
    window.location = "servicios.html";
}

var goToSpecializations = function(){
    window.location = "especializaciones.html";
}

var goToKnowUs = function(){
    window.location = "conocenos.html";
}

var goToQuotes = function(){
    window.location = "presupuestos.html";
}

$(function() {
    translate();
});

$(function() {
    $("#radio-facebook").click(function() {
        window.open('https://www.facebook.com/EntredichosOK', '_blank');
    });
    $("#radio-twitter").click(function() {
        window.open('https://www.twitter.com/EntredichosOK', '_blank');
    });
    $("#radio-youtube-logo").click(function() {
        window.open('https://www.youtube.com/channel/UC0k7cSxwAvvKRUrwhC3bjQA', '_blank');
    });
    $("#radio-cienradios-logo").click(function() {
        window.open('http://ar.cienradios.com/player/palermo_fm939/', '_blank');
    });
});
var translate = function(){
    if (!localStorage.getItem("lang") || !aLangKeys[localStorage.getItem('lang')]){
        localStorage.setItem("lang", "es");
    }

    $('.tr').each(function(i) {
        $(this).text(aLangKeys[localStorage.getItem("lang")][$(this).attr('key')]);
    });

    $('.tr-as-html').each(function(i) {
        $(this).html(aLangKeys[localStorage.getItem("lang")][$(this).attr('key')]);
    });

    let lang = localStorage.getItem("lang");
    $('.tooltip1').prop('title', aLangKeys[lang]['tooltip']);

    if (lang === 'es'){
        $('#seguinos').attr("src", "../images/seguinosenlasredes.png");
        $('.presu-completa').attr("src", "../images/presupuestos/presu-titulo1.png");
        $('.presu-selecciona').attr("src", '../images/presupuestos/presu-titulo2.png');
    } else if (lang === 'en'){
        $('#seguinos').attr("src", "../images/seguinosenlasredes-eng.png");
        $('.presu-completa').attr("src", "../images/presupuestos/presu-titulo1-eng.png");
        $('.presu-selecciona').attr("src", '../images/presupuestos/presu-titulo2-eng.png');
    }
    
    $(".language").removeClass("selected-language");
    $("ul.nav li#"+lang).addClass("selected-language");

    $(".hidden-en").css('display', (lang === 'en') ? 'none' : 'block');
};

var translateBehavior = function(){

    translate();

    $('li.language').click(function(e) {
        let lang = $(this).attr('id'); // obtain language id
        localStorage.setItem("lang", lang);

        translate();
        onChooseLanguage(e);
    });
};

var translateFromHeaderBehavior = function () {
    translate();
}

var headerBehavior = function() {

    $('.language-dropdown').click(function() {
        $('.language-dropdown').toggleClass('closed');
        $('.language-dropdown').toggleClass('opened');
    });

    $('.language-dropdown').focusout(function(){
        $('.language-dropdown').removeClass('opened');
        $('.language-dropdown').addClass('closed');
    });

    translateFromHeaderBehavior();

    if (localStorage.getItem("lang")){
        if (localStorage.getItem("lang") === 'es'){
            $('#ddLang').text('ENGLISH');
            $('#ddCurrentLang').text('ESPAÑOL');        
        } else {
            $('#ddLang').text('ESPAÑOL');
            $('#ddCurrentLang').text('ENGLISH');
        }
    }
    
    $('#ddLang').click(function(){
        if ($('.language-dropdown').hasClass('opened')){
            let newSelected = $(this).text();
            let lang = newSelected.substring(0,2).toLowerCase();
            localStorage.setItem("lang", lang);
            translate();

            let previousSelected = $('#ddCurrentLang').text();
            $(this).text(previousSelected)
            $('#ddCurrentLang').text(newSelected);
        }
    });

    $("#facebook").click(function() {
        window.open('https://www.facebook.com/LexarTD', '_blank');
    });

    $("#twitter").click(function() {
        window.open('https://twitter.com/LexarTD', '_blank');
    });

    $("#linkedin").click(function() {
        window.open('https://www.linkedin.com/company/lexar', '_blank');
    });

    $("#main-logo").click(function() {
        $('ul.nav > li').removeClass('active');
        $('#menu-inicio').addClass('active');
    });
};

var changeButtonImgAndClick = function(){
    if ($(".menu-button").hasClass("menu-button-close")){

        $(".navbar .container").addClass("open");
        $(".navbar .container").removeClass("close");
  
        $(".menu-button").removeClass("menu-button-close");
        $(".menu-button").addClass("menu-button-open");
    } else {
        $(".navbar .container").removeClass("open");
        $(".navbar .container").addClass("close");

        $(".menu-button").removeClass("menu-button-open");
        $(".menu-button").addClass("menu-button-close");
    }
};

var onChooseLanguage = function(e){
    e.preventDefault();
    $(".navbar-toggle").toggleClass("open");
    $(".navbar-collapse").toggleClass("in");
    changeButtonImgAndClick();
};

var menuBehavior = function(active) {

    translateBehavior();

    $('ul.nav > li').removeClass('active');
    $(active).addClass('active');

};

/* END HEADER AND MENU */

/* FOOTER */
var footerBehavior = function() {
    $("#facebook-footer").click(function() {
        window.open('https://www.facebook.com/LexarTD', '_blank');
    });

    $("#twitter-footer").click(function() {
        window.open('https://twitter.com/LexarTD', '_blank');
    });

    $("#linkedin-footer").click(function() {
        window.open('https://www.linkedin.com/company/lexar', '_blank');
    });

};

/* END FOOTER */

var homeBehavior = function() {};

$(function() {
    $(".conocenos-menu div a").click(function() {
        if (this.parentElement.className !== "active"){
            
            $('.conocenos-content').addClass('hidden');
            $('.conocenos-menu div').removeClass('active');
            $(this.parentElement).addClass('active');

            switch(this.attributes.key.value){
                case('acerca-de'):
                    $('.conocenos-content.acerca-de').removeClass('hidden');
                    break;
                case('trayectoria'):
                    $('.conocenos-content.trayectoria').removeClass('hidden');
                    break;
                case('forma-de-trabajo'):
                    $('.conocenos-content.forma-de-trabajo').removeClass('hidden');
                    break;
            }
        }
    });
});

$(function() {
    $(".servicios-menu div").click(function() {
        if (this.className !== "active"){
            
            $('.servicios-content').addClass('hidden');
            $('.servicios-menu div').removeClass('active');
            $(this).addClass('active');

            switch(this.firstElementChild.attributes.key.value){
                case('servicios-traduccion-menu'):
                    $('.servicios-content.traduccion').removeClass('hidden');
                    break;
                case('servicios-correccion-menu'):
                    $('.servicios-content.correccion').removeClass('hidden');
                    break;
                case('servicios-interpretacion-menu'):
                    $('.servicios-content.interpretacion').removeClass('hidden');
                    break;
                case('servicios-subtitulado-menu'):
                    $('.servicios-content.subtitulado').removeClass('hidden');
                    break;
            }
        }
    });
});

$(function() {
    $(".especializaciones-menu div").click(function() {
        if (this.className !== "active"){
            
            $('.especializaciones-items').addClass('hidden');
            $('.especializaciones-menu div').removeClass('active');
            $(this).addClass('active');

            switch(this.firstElementChild.attributes.key.value){
                case('especializaciones-juridicas'):
                    $('.especializaciones-content ul.juridicas').removeClass('hidden');
                    break;
                case('especializaciones-finanzas'):
                    $('.especializaciones-content ul.finanzas').removeClass('hidden');
                    break;
                case('especializaciones-politica'):
                    $('.especializaciones-content ul.politica').removeClass('hidden');
                    break;
                case('especializaciones-frutos'):
                    $('.especializaciones-content ul.frutos').removeClass('hidden');
                    break;
                case('especializaciones-inmobiliario'):
                    $('.especializaciones-content ul.inmobiliario').removeClass('hidden');
                    break;
                case('especializaciones-it'):
                    $('.especializaciones-content ul.it').removeClass('hidden');
                    break;
                case('especializaciones-rrhh'):
                    $('.especializaciones-content ul.rrhh').removeClass('hidden');
                    break;
            }
        }
    });
});

var hasError = function(e){
    return e.indexOf("Error") > 0 ||
           e.indexOf("error") > 0 || 
           e.indexOf("errno") > 0 || 
           e.indexOf("ndefined") > 0
}

var clearQuotesFields = function(){
    $('#presupuestos-form input, #presupuestos-form textarea').val('');
    $.post("php/clearUploads.php");
    $('.file-upload-statusbar').hide();
};

var clearTeamFields = function(){
    $('#sumate-form input, #sumate-form textarea').val('');
    $.post("php/clearUploads.php");
    $('.file-upload-statusbar').hide();
}

$(function() {
    $(".selecciona-menu div").click(function() {
        if (this.className !== "active"){
            
            clearQuotesFields();
            $('.selecciona-content>div').addClass('hidden');
            $('.selecciona-menu div').removeClass('active');
            $(this).addClass('active');

            switch(this.firstElementChild.attributes.key.value){
                case('seleccion-traduccion'):
                    $('.selecciona-content div.traduccion-form').removeClass('hidden');
                    break;
                case('seleccion-correccion'):
                    $('.selecciona-content div.correccion-form').removeClass('hidden');
                    break;
                case('seleccion-interpretacion'):
                    $('.selecciona-content div.interpretacion-form').removeClass('hidden');
                    break;
                case('seleccion-subtitulado'):
                    $('.selecciona-content div.subtitulado-form').removeClass('hidden');
                    break;
            }

            $('.selecciona-content>div input.required-if-visible').prop('required',true);
            $('.selecciona-content>div textarea.required-if-visible').prop('required',true);
            
            $('.selecciona-content>div:hidden input.required-if-visible').prop('required',false);
            $('.selecciona-content>div:hidden textarea.required-if-visible').prop('required',false);
        }
    });
});