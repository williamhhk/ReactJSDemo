var Child = React.createClass({
    render: function () {
        return <button onClick={this.props.onClick}>{this.props.text}</button>;
    },
});


var Parent = React.createClass({
    getInitialState: function() {
        return {childsData: [
            {childText: "Click me 1!", childNumber: 1},
            {childText: "Click me 2!", childNumber: 2}
        ]};
    },
    render: function () {
        var childrens = this.state.childsData.map(function(childData,childIndex) {
            return <Child onClick={this.handleChildClick.bind(null,childData)} text={childData.childText}/>;
        }.bind(this));
        return <div>{childrens}</div>;
    },

    handleChildClick: function(childData,event) {
        alert("The Child button data is: " + childData.childText + " - " + childData.childNumber);
        alert("The Child HTML is: " + event.target.outerHTML);
    }
});

ReactDOM.render(<Parent />,
        document.getElementById("demoForm1"));