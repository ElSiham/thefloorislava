$(document).ready(function(){


//mise en place derniere image d'accueil
  function bouton(){
    if($("#fondJeu").is(':animated')){
      setTimeout(function () { //pour eviter le stackoverflow
        bouton();
      }, 50);
    } else {
      $('#fleche').animate({
          opacity: 0
      }, 600 );
      setTimeout(function () {
          $('#fleche').remove();
          $("#play").css({zIndex: "1"});
          $("#play").animate({
            opacity: 1
          }, 2000);
      }, 700);
      $(".ligne").animate({ //animation de la ligne du titre
          width: "30%",
          height: "2px",
          opacity: 1
      }, 1500 );
    };
  };

  // smooth scroll de l'image d'accueil
  var clic = 0;
  $('#fleche').on('click', function() {
    if(clic<3){
      var hauteur = $('#fondJeu').position().top;
      $('#fondJeu').animate({
        top: '-=' + 600
      }, 1000 );
      clic++;
      if(hauteur < -600){
        bouton();
      };
    };
  });

//bouton pour ne pas jouer
    $('#mauvaisJoueur').on('click', function(){
      $('#fondJeu').animate({
        top: '-1800'
      }, 1500 );
      setTimeout(function () {
        $("#fondJeu").css({zIndex: "1"});
        $("#nivUn").css({zIndex: "-1"});
        $("#nivUn").css({zIndex: "-1"});
        $("#cle").css({zIndex: "-1"});
        $("#fermer").remove();
        $('#fleche').remove();
        $("#play").remove();
        $("#mailto").css({zIndex: "1"});
        $("#message").css({zIndex: "1"});
        $("#moncv").css({zIndex: "1"});
        $("#container").css({zIndex: "2"});
        $("#container").css({top: "475px", left: "750px"});
        $("#heart1").css({zIndex: "-1"});
        $("#heart2").css({zIndex: "-1"});
        $("#heart3").css({zIndex: "-1"});
        $("#html").css({zIndex: "1"});
        $("#css").css({zIndex: "1"});
        $("#js").css({zIndex: "1"});
        $("#angular").css({zIndex: "1"});
        $("#bootstrap").css({zIndex: "1"});
        $("#jquery").css({zIndex: "1"});
        $("#meteor").css({zIndex: "1"});
        $("#mongo").css({zIndex: "1"});
        $("#node").css({zIndex: "1"});
        $('#html').css({top: '180px', left: '35px'});
        $('#css').css({top: '250px', left: '35px'});
        $('#js').css({top: '320px', left: '35px'});
        $('#angular').css({top: '180px', left: '85px'});
        $('#bootstrap').css({top: '250px', left: '85px'});
        $('#jquery').css({top: '320px', left: '85px'});
        $('#meteor').css({top: '180px', left: '135px'});
        $('#mongo').css({top: '250px', left: '135px'});
        $('#node').css({top: '320px', left: '135px'});
        $('#mauvaisJoueur').remove();
      }, 1500);
    })
//bouton play
    $("#play").on('click', function() {
      $('#cv').animate({
        opacity: 0
      }, 800 );
      $('#cv').animate({
        opacity: 1
      }, 1300 );
      setTimeout(function () {
        $("#fondJeu").css({zIndex: "-1"});
        $("#play").remove();
        $("#mailto").css({zIndex: "-1"});
        $("#nivUn").css({zIndex: "1"});
        $("#fermer").css({zIndex: "2"});
        $("#html").css({zIndex: "2"});
        $("#css").css({zIndex: "2"});
        $("#js").css({zIndex: "2"});
        $("#cle").css({zIndex: "1"});
        $("#heart1").css({zIndex: "1"});
        $("#heart2").css({zIndex: "1"});
        $("#heart3").css({zIndex: "1"});
        $(".ligne").remove();
        $("#container").css({top: "425px", left: "230px", zIndex: "2"});
      }, 800);


    });
//bouton pause
    $("#fermer").on('click', function() {
      if($("#fermer").text()=='||'){
        $("#fermer").text('->');
        $("#fondJeu").css({zIndex: "2"});
        $("#play").css({zIndex: "2"});
        $("#mailto").css({zIndex: "2"});
        $("#heart1").css({zIndex: "-1"});
        $("#heart2").css({zIndex: "-1"});
        $("#heart3").css({zIndex: "-1"});
        if($('#surprise').css('zIndex')==='2'){
          $("#surprise").css({zIndex: "-2"});
        };
        $("#container").css({zIndex: '-1'});
        $('.logo').each(function (element, index){
          var valide = $(this).position().left;
          var zInd = $(this).css('zIndex');
          if(valide>200 && zInd === '2'){
            $(this).css({zIndex: "-1"});
          };
        });
      } else {
      $("#fermer").text('||');
        $("#fondJeu").css({zIndex: "-1"});
        $("#play").css({zIndex: "-1"});
        $("#mailto").css({zIndex: "-1"});
        // $("#nivUn").css({zIndex: "1"});
        $("#heart1").css({zIndex: "1"});
        $("#heart2").css({zIndex: "1"});
        $("#heart3").css({zIndex: "1"});
        if($("#surprise").css('zIndex')==='-2'){
          $("#surprise").css({zIndex: "1"});
        }
        $("#container").css({zIndex: '2'});
        $('.logo').each(function (element, index){
          var zIn = $(this).css('zIndex');
          if(zIn === '-1'){
            $(this).css({zIndex: "2"});
          };
        });
      };
    });

//affichage des competences au survol des bonus
    $(".logo").hover(function(){
        var chemin = $(this).attr('src');
        var chemin = chemin.replace(/morceau/gi, "logo");
        $(this).attr('src', chemin);
      }, function(){
        var chemin = $(this).attr('src');
        var chemin = chemin.replace(/logo/gi, "morceau");
        $(this).attr('src', chemin);
    });

//*********************declarations generales*************************//
  var i= 0; //compteur
  var position;//tableau de mouvements
  var boucle = null; //id de requestAF
  var then = Date.now(); //timing des frames
  var blessure = false;
  var descente = true;
  // var plateforme;
  var html;
  var css;
  var js;
  var cle;
  var angular;
  var bootstrap;
  var jquery;
  var meteor;
  var mongo;
  var node;
  $('#perso').css({top: '-210px', left: '-15px'});
  //contient les frames du personnage
  var persoFrame = {
    // mouvement: [[persoX, persoY, containerX, width, height],[],[],[],[],[]];
    // idle: [[-15, -13, 0, 0, 35, 50], [-15, -76, 0, 0, 35, 50], [-15, -76, 0, 0, 35, 50], [-15, -142, 0, 0, 35, 50], [-15, -205, 0, 0, 35, 50], [-15, -205, 0, 0, 35, 50]],
    walkRight: [[-10, -305, 10], [-110, -305, 10], [-205, -305, 10], [-300, -305, 10], [-395, -305, 10], [-490, -305, 10], [-585, -305, 10], [-685, -305, 10], [-775, -305, 10]],
    walkLeft: [[-20, -115, -10], [-120, -115, -10], [-215, -115, -10], [-310, -115, -10], [-405, -115, -10], [-500, -115, -10], [-595, -115, -10], [-695, -115, -10], [-785, -115, -10]]
    // runRight: [[-15, -205, 15, 0, 35, 50], [-80, -205, 15, 0, 35, 50], [-210, -205, 15, 0, 35, 50], [-335, -205, 15, 0, 35, 50], [-400, -205, 15, 0, 35, 50], [-525, -205, 15, 0, 35, 50]]
  };
  //contient les plateformes
  var plateformePos = {
    //[1234, 5, 6, 7, 8, 9, 10, 11]
    ouest: [200, 405, 280, 510, 200, 1000, 330, 820],
    nord: [500, 375, 320, 275, 240, 190, 140, 110],
    largeur: [1000, 105, 60, 240, 80, 110, 80, 190]
  };
  //contient les bonus
  var bonus = {
    nom: ['#html', '#css', '#js', '#cle', '#cle2', '#angular', '#bootstrap', '#jquery', '#meteor', '#mongo', '#node', '#cle3'],
    ouest: [470, 570, 800, 340, 1035, 820, 520, 350, 190, 1000, 285, 1125],
    nord: [475, 245, 35, 65, 150, 70, 60, 80, 200, 450, 270, 450]
  };
  var coeurs = [$('#heart1'), $('#heart2'), $('#heart3')];

//*********************fonctions*************************//
  //appelée par degat(), gere les coeurs
  function vie(){
    if(!blessure){ //si le personnage n'est pas deja blesse
      coeurs[0].animate({
        opacity: "0.3"
      }, 400);
      coeurs[0].animate({
        opacity: "1"
      }, 400);
      coeurs[0].animate({
        opacity: "0"
      }, 400);
      blessure = true;
      if(coeurs[1] == null){ //si c'est le dernier coeur
        $('#cv').animate({
          opacity: 0
        }, 800 );
        $('#cv').animate({
          opacity: 1
        }, 1300 );
        setTimeout(function(){
          blessure = false;
          coeurs = [$('#heart1'), $('#heart2'), $('#heart3')]; //les remettre dans le tableau
          coeurs[0].animate({
            opacity: "1"
          }, 400);
          coeurs[1].animate({
            opacity: "1"
          }, 400);
          coeurs[2].animate({
            opacity: "1"
          }, 400);
          $("#container").css({top: "425px", left: "230px"});//bouger le personnage
        }, 900);
      } else {
        setTimeout(function(){
          blessure = false;
          coeurs.shift();
        }, 1500);
      };
    };
  };

  //si le perso marche sur la lave
  function degat(){
    var gauche = parseInt($("#container").position().left);
    var haut = parseInt($("#container").position().top);
    //TODO: ajouter une condition de hauteur
    if(haut>420 && ((gauche>290 && gauche<360)||(gauche>530 && gauche<670)||(gauche>730 && gauche<888))){
      if($("#container").is(':animated')){
        setTimeout(function () {//pour eviter le stackoverflow
          degat();
        }, 10);
      } else {
        $("#container").animate({
          opacity: "0.3"
        }, 500);
        $("#container").animate({
          opacity: "1"
        }, 300);
        degat();
        vie();
      };
    };
  };


  // gere les plateformes
  function sol(){
    var haut = parseInt($('#container').position().top) + parseFloat($('#container').height());
    var gauche = parseInt($("#container").position().left);
    var nord;
    var ouest;
    var est;
    var largeur;
    //degats
    if(haut === 500){
      degat();
    };
    //quelle plateforme?
    plateformePos.ouest.forEach(function (element, index) {
      ouest = element;
      est = element + plateformePos.largeur[index];
      if (gauche > ouest && gauche < est && haut <= plateformePos.nord[index]){
        nord = plateformePos.nord[index];
        ouest = element;
        est = element + plateformePos.largeur[index];
        // return;
      };
    });
    var distance = nord - haut;
    if (haut < nord) {
      if ($("#container").is(":animated")){
        //TODO: comme plus haut $("#container").not(":animated") ne fonctionne pas
      } else {
        if(descente === true){
          setTimeout(function () {
            sol();
          }, 50);
          descente = false;
        } else {
          $("#container").animate({
            top: "+=" + distance
          }, 500);
          descente = true;
        };
        // if(descente === true){
        //   distance = distance/3;
        //   $("#container").animate({
        //     top: "+=" + distance
        //   }, 200);
        //   descente = false;
        //   chute();
        // } else {
        //   $("#container").animate({
        //     top: "+=" + distance
        //   }, 250);
        //   descente = true;
        // };
      };
    };
  };

  //action des bonus
  function compBonus(haut, nord, sonnom){
    // if (haut < nord) {
      switch (sonnom) {
        case '#html':
          $(sonnom).animate({
            top: '180px',
            left: '35px'
          }, 800);
          html = true;
        break;
        case '#css':
          $(sonnom).animate({
            top: '250px',
            left: '35px'
          }, 800);
          css = true;
        break;
        case '#js':
          $(sonnom).animate({
            top: '320px',
            left: '35px'
          }, 800);
          js = true;
        break;
        case '#angular':
          if(angular === false){
            $(sonnom).animate({
              top: '180px',
              left: '85px'
            }, 800);
            angular = true;
          };
        break;
        case '#bootstrap':
          if(bootstrap === false){
            $(sonnom).animate({
              top: '250px',
              left: '85px'
            }, 800);
            bootstrap = true;
          };
        break;
        case '#jquery':
          if(jquery === false){
            $(sonnom).animate({
              top: '320px',
              left: '85px'
            }, 800);
            jquery = true;
          };
        break;
        case '#meteor':
          if(meteor === false){
            $(sonnom).animate({
              top: '180px',
              left: '135px'
            }, 800);
            meteor = true;
          };
        break;
        case '#mongo':
          if(mongo === false){
            $(sonnom).animate({
              top: '250px',
              left: '135px'
            }, 800);
            mongo = true;
          };
        break;
        case '#node':
          if(node === false){
            $(sonnom).animate({
              top: '320px',
              left: '135px'
            }, 800);
            node = true;
          };
        break;
        case '#cle':
          if (cle != true){
            $(sonnom).animate({
              top: "130px",
              left: '1080px'
            }, 800);
            $('#cv').append('<div id=surprise></div>');
            $('#surprise').animate({
              opacity: "0.8"
            }, 1500);
            $('#surprise').animate({
              opacity: "0.5"
            }, 800);
            plateformePos.ouest.push(550);
            plateformePos.nord.push(200);
            plateformePos.largeur.push(230);
            cle = true;
          };
        break;
        case '#cle2':
          if(($('#cle').position().top) === 130){
            if(html && css && js){
              // $('#cle').remove();
              $('#cle').animate({
                top: "440px",
                left: '1150px'
              }, 900);
              $("#nivUn").css({zIndex: "-1"});
              $("#nivDeux").css({zIndex: "1"});
              $("#angular").css({zIndex: "2"});
              $("#bootstrap").css({zIndex: "2"});
              $("#jquery").css({zIndex: "2"});
              $("#meteor").css({zIndex: "2"});
              $("#mongo").css({zIndex: "2"});
              $("#node").css({zIndex: "2"});
              angular = false;
              bootstrap = false;
              jquery = false;
              meteor = false;
              mongo = false;
              node = false;
            };
          };
        break;
        case '#cle3':
          if($("#cv").is(':animated')){
            console.log('animated');
          //('#cv').not(':animated') ne fonctionne pas, je ne trouve pas la bonne synthaxe.
          } else if(angular && bootstrap && jquery && meteor && mongo && node){
            console.log('jysuis');
              $('#cle').remove();
              $('#cv').animate({
                opacity: 0
              }, 800 );
              $('#cv').animate({
                opacity: 1
              }, 1300 );
              setTimeout(function () {
                $("#fondJeu").css({zIndex: "1"});
                $("#mailto").css({zIndex: "1"});
                $("#nivUn").css({zIndex: "-1"});
                $("#nivDeux").css({zIndex: "-1"});
                $("#fermer").css({zIndex: "-1"});
                $("#heart1").css({zIndex: "-1"});
                $("#heart2").css({zIndex: "-1"});
                $("#heart3").css({zIndex: "-1"});
                $("#surprise").css({zIndex: "-1"});
                $("#message").css({zIndex: "1"});
                $("#moncv").css({zIndex: "1"});
                $("#container").css({top: "475px", left: "750px"});
                $('#mauvaisJoueur').remove();
              }, 800);
            };
        break;
      };
    // };
  };

  //detection des bonus
  function comp(){
    var haut = parseInt($('#container').position().top);
    var gauche = parseInt($("#container").position().left);
    var nord;
    var maxnord;
    var ouest;
    var est;
    var sonnom;
    //quelle bonus
    bonus.ouest.forEach(function (element, index) {
      ouest = element;
      est = element + 60;
      maxnord = bonus.nord[index] - 80;
      if (gauche >= ouest && gauche <= est && haut <= bonus.nord[index] && haut >= maxnord){
        nord = bonus.nord[index];
        sonnom = bonus.nom[index];
      };
    });
    compBonus(haut, nord, sonnom);
  };

  function finDuSaut(){
    if($("#container").is(':animated')){
      setTimeout(function () {
        finDuSaut();
      }, 10);
    } else {
      $("#container").stop();
      sol();
      comp();
      degat();
    };
  };

  //deplacement horizontal
  function action(){
    var now = Date.now();
    var gauche = parseInt($("#container").position().left);
    if(i>=position.length){
      i=0;
      window.cancelAnimationFrame(boucle);
      boucle = null;
    }else if(now - then >= 40){
      $('#perso').css({left: position[i][0], top: position[i][1]});
      if(gauche<=200){
        $('#container').css({left: '+=10'});
      } else if(gauche>1150){
        $('#container').css({left: '-=10'});
      } else {
        $('#container').css({left: '+='+ position[i][2]});
      };
      sol();
      comp();
      i++;
      then = now;
    };
    boucle = window.requestAnimationFrame(action);
  };

  function saut(){
    $("#container").animate({
      top: "-=" + 150,
    }, 600);
    finDuSaut();
  };

  //*********************clavier*************************//
  window.onkeydown = function(event){
    var code = event.keyCode;
    if((boucle == null || code === 38) && $('#cle').length){
      switch(code){
        case 32:
          //espace
        break;
        case 37:
          //gauche
          event.preventDefault();
          position = persoFrame.walkLeft;
          action();
        break;
        case 38:
          //haut
          event.preventDefault();
          if ($("#container").is(":animated")){
            return;
          }else {
            saut();
          };
        break;
        case 39:
          //droite
          event.preventDefault();
          position = persoFrame.walkRight;
          action();
        break;
        case 40:
          //bas
          event.preventDefault();
        break;
        default:
          //idle
        position = persoFrame.idle;
        break;
      };
    };
  };

  window.onkeyup = function(event){
    var code = event.keyCode;
    if(code == 37 || 39){
      window.cancelAnimationFrame(boucle);
      boucle = null;
      i = 0;
      $('#perso').css({top: '-210px', left: '-15px'});
    };
    // switch(code){
    //   case 32:
    //   //espace
    //   break;
    //   case 37:
    //     //gauche
    //   break;
    //   case 38:
    //     //haut
    //     saut();
    //   break;
    //   case 39:
    //     //droite
    //   break;
    //   case 40:
    //     //bas
    //   break;
    // };
  };

});
