<?php snippet('header') ?>
    <div class="header-left">General</div>
    <div class="header-right">Stats</div>
    <div class="header-bottom-left">Skills & Runes</div>
    <div class="header-bottom-right">Passives</div>
    <div class="d3-wrapper">
        <div class="base" id="name"></div>
        <div class="base" id="class"></div>
        <div class="base" id="level"></div>
        <div class="base" id="plevel"></div>
        <ul id="skills"></ul>
        <ul id="passives"></ul>
        <ul id="stats"></ul>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script>
        function callApi(){
            return $.ajax({
                url:            'http://eu.battle.net/api/d3/profile/Ferdi-1763/hero/44057278',
                data:           {something: true},
                dataType:       'jsonp',
                contentType:    'application/json'
            });
        }

        function getJson() {
            callApi()
                .done(function(data){
                    var name  =  'Name: ' + data.name;
                    var classn =  'Class: ' + data.class;
                    var level =  'Level: ' + data.level;
                    var plevel =  'Paragon Level: ' + data.paragonLevel;
                    var skillSet = [];
                    var passiveSet = [];
                    var statsSet = [];
                    for(i=0; i< data.skills.active.length; i++){
                        var skillName =  data.skills.active[i].skill.name;
                        if (data.skills.active[i].rune !== undefined) {
                            var runeName = data.skills.active[i].rune.name;
                            skillSet[i] = '<li>';
                            skillSet[i] += skillName + ' with ' + runeName;
                            skillSet[i] += '</li>';
                        }else {
                            skillSet[i] = '<li>';
                            skillSet[i] += skillName;
                            skillSet[i] += '</li>';
                        }
                    }
                    for(i=0; i< data.skills.passive.length; i++){
                       var passiveName =  data.skills.passive[i].skill.name;
                        passiveSet[i] = '<li>';
                        passiveSet[i] += passiveName;
                        passiveSet[i] += '</li>';
                    }
                    if (data.items.neck.name === 'Hellfire Amulet') {
                        passiveSet[i] = '<li>';
                        passiveSet[i] += 'Ballistics (HA)';
                        passiveSet[i] += '</li>';
                    }


                    statsSet[0] =  'HP: ' + data.stats.life;
                    statsSet[1] =  'Damage: ' + data.stats.damage;
                    statsSet[2] =  'Toughness: ' + data.stats.toughness;
                    statsSet[3] =  'Dexterity: ' + data.stats.dexterity;
                    statsSet[4] =  'Vitality: ' + data.stats.vitality;
                    for(i=0; i< 5; i++){
                        $('#stats').append('<li>' + statsSet[i]+ '</li>');
                    }
                    $('#name').text(name);
                    $('#class').text(classn);
                    $('#level').text(level);
                    $('#plevel').text(plevel);
                    $('#skills').html(skillSet);
                    $('#passives').html(passiveSet);
                });
        }
        getJson();
    </script>
<?php snippet('footer') ?>