import React , { Component }  from 'react'
import  './chesssquare.css'
import {Piece ,Types} from './piece'
import {DropTarget} from 'react-dnd'


const squareTarget = {
    drop(props, monitor) {
        props.move({from:monitor.getItem().from , to: props.file+props.rank })
    }
};

function collect(connect, monitor){
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class ChessSquare extends Component {

    divStyle;

    constructor(props){
        super(props);
        this.dark = this.dark.bind(this);
        this.divStyle = {
            backgroundColor : this.dark()? '#779559' :'#eeedd3'
        }
    }

    dark(){
        return (this.props.rank+(this.props.file.charCodeAt(0)-96))%2===0;
    }

    render(){
        const {connectDropTarget } = this.props;
        return connectDropTarget(
            <div style={this.divStyle} className="chess-square">
                <Piece square={this.props.file+this.props.rank} piece={this.props.piece}/>
            </div>
        )
    }

}

export default  DropTarget(Types.PIECE, squareTarget, collect)(ChessSquare);
