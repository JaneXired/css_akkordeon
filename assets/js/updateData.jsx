//var BaseContent = React.createClass({
//    render: function() {
//        return <li>{this.props.data}</li>;
//    }
//});



var DataWrapper = React.createClass({
    getInitialState: function() {
        return {data:[]};
    },
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'jsonp',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    render: function() {
        return (
            <div className="d3-data">
                    <BaseContent data={this.state.data}/>
            </div>
        );
    }
});

var BaseContent= React.createClass({
    render: function() {
        console.log(this.props.data);
        var listItems = this.props.data.map(function(item) {
            return <li>{item}</li>;
        });
        console.log(listItems);
        return <ul>{listItems}</ul>
    }
});

React.render(<DataWrapper url="http://eu.battle.net/api/d3/profile/Ferdi-1763/hero/44057278" pollInterval={2000} />,
    document.getElementById('profile-data'));





//
//var SkillsContent= React.createClass({
//    render: function() {
//        var createItem = function(itemText) {
//            return <li>{itemText}</li>;
//        };
//        return <ul className="skills">{this.props.data.map(createItem)}</ul>;
//    }
//});
//
//var PassiveContent = React.createClass({
//    render: function() {
//        var createItem = function(itemText) {
//            return <li>{itemText}</li>;
//        };
//        return <ul className="passives">{this.props.data.map(createItem)}</ul>;
//    }
//});
//
//var StatsContent = React.createClass({
//    render: function() {
//        var createItem = function(itemText) {
//            return <li>{itemText}</li>;
//        };
//        return <ul className="stats">{this.props.data.map(createItem)}</ul>;
//    }
//});