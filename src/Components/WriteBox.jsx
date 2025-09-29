import { Component } from "react";

export default class WriteBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
        this.handelAdd = this.handelAdd.bind(this)
        this.handelChange = this.handelChange.bind(this)
    }

    handelAdd() {
     
        console.log(this.state.input);
        if (input.trim() === "") return; // avoid empty entry
        this.props.handleAdd(this.state.input);
        this.setState({ input: "" });
    }

    handelChange = (e) => {
        
        this.setState({
            input: e.target.value
        });
    };

    render() {
        return (
            <div className="row">
                <form className="form-inline col-sm-offset-3" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="glyphicon glyphicon-pencil"></i>
                        </span>
                        <input type="text" className="form-control" value={this.state.input} onChange={this.handleChange} placeholder="todo-item" id="box" style={{ width: "30vw" }} />
                    </div>
                    <div className="form-group">
                        <input type="button" className="btn btn-primary form-control" value="add" onClick={this.handelAdd} style={{ width: "10vw" }} />
                        {/* // onClick="add_item()"  */}
                    </div>
                </form>
            </div>
        )
    }
}