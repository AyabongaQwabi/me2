
import React, {Component} from 'react';
import * as R from 'ramda';
import './style.scss';

export default class FlexContainer extends Component{
    render(){
        const { size, direction, children, className, isMaster } = this.props;
        const sizeClass = `size-${size}`
        const dirClass = `flex-${direction}`
        const propClass = R.isNil(className) ? '' :className
        const masterClass = 
            isMaster 
                ? `master flex-container ${dirClass} ${sizeClass} ${propClass}`
                : `flex-container ${dirClass} ${sizeClass} ${propClass}`
        return(
            <div className={masterClass} >
                {children}
            </div> 
        )
    }
}