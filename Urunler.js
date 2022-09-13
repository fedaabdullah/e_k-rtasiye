import React, {Component} from 'react'

class   UrunOzellikler extends Component{
    render(){
        return(
            <div className="col-md-4 col-sm-6">
                <div className="card" style={{borderColor: this.props.ozelik ? '' : 'red'}}>
                    <div className="card-header">
                        <img style={{maxWidth: '100%'}} src={this.props.img} alt={this.props.name} />
                    </div>
                    <div className="card-body">
                        <h2>{this.props.name}</h2>
                        <h5>{this.props.ozelik}</h5>
                        <div>{this.props.stok}</div>
                        <div>{this.props.fiyat}</div>
                        
                    </div>
                </div>
            </div>
           )
    }
}

export default   UrunOzellikler