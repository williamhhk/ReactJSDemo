﻿const status = {
    a: 'abc',
    b: 'bcde'
};

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { formName : ''}

        this.handleFormName = this.handleFormName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormName(event) {
        console.log(event.target.value);
        this.setState({ formName: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state.formName);
        axios.post(this.props.UrlPost, { FirstName: this.state.formName })
          .then(function (response) {
              //console.log('saved successfully')
              //console.log(response.data.status);
              //console.log(response.data.message);
          });

        event.preventDefault();
    }

    render() {
        const FormName = this.state.formName;
        console.log(this.state.formName);
        console.log(this.props.Name);
        return (
          <form onSubmit={this.handleSubmit}>
        <label>
            Name:
          <input type="text" value={this.props.Name}  />
          <input type="text" value={FormName}  onChange={this.handleFormName}  />
        </label>
         <input type="submit" value="Submit" />
      </form>
    );
        }
}

class ComponentWithGriddle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowId: 0,
        };
    }
    onRowClick(row) {
        this.setState({ selectedRowId: row.props.data.id });
        this.props.onChange(row.props.data.name);
    }
    render() {
        var rowMetadata = {bodyCssClassName: rowData => (rowData.id === this.state.selectedRowId ? "selected" : '')};
        //console.log(rowMetadata);
        return (
        <Griddle results={fakeData} onRowClick={this.onRowClick.bind(this)} showFilter={true} showSettings={true} columnMetadata={columnMeta} useFixedHeader={true} rowMetadata={rowMetadata} resultsPerPage={5} enableInfiniteScroll={true} bodyHeight={400 } useGriddleStyles={true} />
        );
     }
}


class RootFrame extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.state = { Name: '' };
    }

    handleNameChange(name)
    {
        console.log("Name is  " + name);
        this.setState({ Name: name });
    }

    //             <NameForm UrlPost={this.props.UrlPost}  Name={this.state.Name}/>
    //  Use Parent as a state manager, once this is set, Child Component cannot change.
    render() {
        return (
        <div>
            <ComponentWithGriddle Name={this.state.Name} onChange={this.handleNameChange} />
            <NameForm UrlPost={this.props.UrlPost}  Name={this.state.Name} />
        </div>
       );
    };
}

ReactDOM.render(
    <RootFrame UrlPost={'Home/SaveData'}/>,
    document.getElementById("demoForm")
);

