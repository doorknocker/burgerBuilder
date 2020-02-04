import React, { Component } from 'react' ;
import Aux from './Auxillary' ;
import Modal from '../components/UI/Modal/Modal' ;

let reqI= null ;
let resI= null ;
const errorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        
    
        constructor (props) {
            super (props) ;
            this.state = {
                error: null
            } ;

        }

        componentWillMount () {
            this.reqI= axios.interceptors.request.use (req => {
                this.setState ({error : null}) ;
                return req ;
            }) ;
            this.resI= axios.interceptors.response.use (res => res, error => {
                this.setState ({error: error}) ;
            }) ;
        }

        componentWillUnmount () {
            axios.interceptors.request.eject (reqI) ;
            axios.interceptors.response.eject (resI) ;
        }

        errorConfirmed = () => {
            this.setState ({error: null}) ;
        }

        render () {
            return (
                <Aux>
                    <Modal show= {this.state.error}
                           clickedBD= {this.errorConfirmed}>
                        {this.state.error ? this.state.error.message : null} 
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            ) ;
        }
    }
}

export default errorHandler ;