import { Component } from "react";
import Titel from "./Titel";
import Table from "./Table";
import WriteBox from "./WriteBox";

export default class CleanList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [

            ]
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDeleat = this.handleDeleat.bind(this);
    }

    handleAdd(msg) {
        this.setState(state => {
            
            return {
                list: [
                    ...state.list,
                    { number: state.list.length + 1, masage: msg }
                ]
            }
        })

    }

    handleUpdate(msg, number) {
        this.setState(state => {
            state.list[number - 1]["masage"] = msg
            return {
                list: [
                    ...state.list,
                ]
            }
        })
    }

    handleDeleat(number) {
        
        this.setState(state => {
            const newList = state.list
                .filter(item => item.number !== number)
                .map((item, index) => {
                    return { ...item, number: index + 1 };
                });
            return { list: newList }; // Return new state to trigger update
        });
    }

    render() {
        return (
            <div className="container">
                <Titel />
                <br /><br />
                <WriteBox 
                list = {this.state.list}
                handleAdd = {this.handleAdd} />
                <br /><br />
                <Table 
                    list= {this.state.list}
                    handleDeleat = {this.handleDeleat}
                    handleUpdate = {this.handleUpdate}

                />
            </div>
        )
    }
}