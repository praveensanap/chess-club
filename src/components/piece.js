import  React from 'react'
import {DragSource} from 'react-dnd'

import wr from '../images/wr.png';
import wk from '../images/wk.png';
import wn from '../images/wn.png';
import wp from '../images/wp.png';
import wb from '../images/wb.png';
import wq from '../images/wq.png';
import br from '../images/br.png';
import bk from '../images/bk.png';
import bn from '../images/bn.png';
import bp from '../images/bp.png';
import bb from '../images/bb.png';
import bq from '../images/bq.png';

const Types = {
    PIECE: 'piece'
};

const pieceSource = {
    beginDrag(props) {
        return {type: props.type, color: props.color , from: props.square };
    },

};


function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),

        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging()
    };
}

class Piece extends React.Component {

    renderPiece(piece ,isDragging){
        if(piece && !isDragging){
            return <img style={{elevation:'above'}} alt={piece}  src={getPiece(piece)}/>
        }
    }

    render() {

        const img = new Image()
        const { piece } = this.props;
        const { isDragging, connectDragSource } = this.props;
        const divStyle = {
            backgroundColor: isDragging ? 'rgba(255, 255, 255, 0.9)' : ''
        };

        if(piece) {
            img.style = {elevation:"above"}
            img.src = getPiece(piece);
            img.onload = () => this.props.connectDragPreview(img)
        }

        return (
            <div style={divStyle}>
                {connectDragSource(this.renderPiece(piece ,isDragging))}
            </div>
        );
    }
}

function getPiece(piece){
    switch (piece){
        case "wr":
            return wr;
        case "wb":
            return wb;
        case "wn":
            return wn;
        case "wp":
            return wp;
        case "wk":
            return wk;
        case "wq":
            return wq;
        case "br":
            return br;
        case "bb":
            return bb;
        case "bn":
            return bn;
        case "bp":
            return bp;
        case "bk":
            return bk;
        case "bq":
            return bq;
        default:
            return null;
    }
}

// Export the wrapped version
Piece =  DragSource(Types.PIECE, pieceSource, collect)(Piece);

export  {Piece , Types};