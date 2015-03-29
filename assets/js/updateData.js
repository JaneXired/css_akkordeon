var DataWrapper = React.createClass({displayName: "DataWrapper",
    getInitialState: function () {
        return {skills: [], passives: [], stats: [], class: {}, name: {}, level: {}, paragon: {}, polling: true, isHidden: false};
    },
    loadCommentsFromServer: function () {
        if (this.state.polling === true) {
            $.ajax({
                url: this.props.url,
                dataType: 'jsonp',
                success: function (data) {
                    this.setState({name: data.name});
                    this.setState({class: data.class});
                    this.setState({level: data.level});
                    this.setState({paragon: data.paragonLevel});
                    this.setState({skills: data.skills.active});
                    this.setState({passives: data.skills.passive});
                    this.setState({stats: data.stats});
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
            console.log('updated');
        }
    },

    componentWillMount: function () {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    clickHandler: function () {
        this.setState({polling: false});
        var newName = this.state.name.replace(this.state.name,[prompt('Enter a new Name')]);
        this.setState({isHidden: true});
        this.setState({name: newName});
    },

    render: function () {

        var skillsState = this.state.skills,
            skills = [],
            passivesState = this.state.passives,
            passives = [],
            statsState = this.state.stats,
            stats = [],
            nameState = this.state.name,
            classState = this.state.class,
            levelState = this.state.level,
            paragonState = this.state.paragon,
            base = [];

        if (classState === 'demon-hunter') {
            var style = {
                backgroundImage: "url('/assets/images/dh.jpg')"
            };
        }

        if (this.state.isHidden === true) {
            base.push(React.DOM.li({key: nameState, className: 'isHidden'}, "Name: ", nameState))
        } else {
            base.push(React.DOM.li({key: nameState}, "Name: ", nameState))
        }

        base.push(React.DOM.li({key: classState}, "Class: ", classState));
        base.push(React.DOM.li({key: levelState}, "Level: ", levelState));
        base.push(React.DOM.li({key: paragonState}, "Paragon: ", paragonState));

        skillsState.forEach(function (skillName) {
            if (skillName.rune) {
                skills.push(React.DOM.li({key: skillName.skill.name}, skillName.skill.name, " with ", skillName.rune.name));
            } else {
                skills.push(React.DOM.li({key: skillName.skill.name}, skillName.skill.name));
            }
        });

        passivesState.forEach(function (passiveName) {
            passives.push(React.DOM.li({key: passiveName.skill.name}, passiveName.skill.name));
        });

        stats.push(React.DOM.li({key: statsState.life}, "Life: ", statsState.life));
        stats.push(React.DOM.li({key: statsState.damage}, "Damage: ", statsState.damage));
        stats.push(React.DOM.li({key: statsState.toughness}, "Toughness: ", statsState.toughness));
        stats.push(React.DOM.li({key: statsState.dexterity}, "Dexterity: ", statsState.dexterity));
        stats.push(React.DOM.li({key: statsState.vitality}, "Vitality: ", statsState.vitality));

        return (
            React.DOM.div({className: 'd3-container'},
                React.DOM.div({className: 'd3-char-bg', style: style}),
                React.DOM.div({className: 'd3-data'},
                    React.DOM.ul({className: 'base', onClick: this.clickHandler}, base),
                    React.DOM.ul({className: 'skills'}, skills),
                    React.DOM.ul({className: 'passives'}, passives),
                    React.DOM.ul({className: 'stats'}, stats)
                )
            )
        );
    }
});

React.render(React.createElement(DataWrapper, {
        url: "http://eu.battle.net/api/d3/profile/Ferdi-1763/hero/44057278",
        pollInterval: 2000
    }),
    document.getElementById('profile-data'));
