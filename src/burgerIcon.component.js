import React, { Component } from 'react';
import styled from "styled-components";
import { Navbar } from './Navbar.component';

const Div = styled.div`
    width: 2rem;
    height: 2.05rem;
    position : fixed;
    top: 30px;
    right: 30px;
    z-index: 30;
    display: none;
    cursor: pointer;

    @media (max-width: 768px){
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        div {

            transform-origin: 1px;
            transition: all .3s;
            width: 2rem;
            height : .25rem;
            background-color: ${props => props.open ? "#ffffff":"#3498db"};
            border-radius: 10px;

            &:nth-child(1) {
                transform: ${props => props.open ? "rotate(45deg)":"rotate(0deg)"};
            }
            &:nth-child(2) {
                transform: ${props => props.open ? "translateX(-100%)":"translateX(0)"};
                opacity: ${props => props.open ? 0:1};
            }
            &:nth-child(3) {
                transform: ${props => props.open ? "rotate(-45deg)":"rotate(0deg)"};
                
            }
        }
    }
`

export class Burger extends Component {
    constructor(){
        super();
        this.state = {
            open : false,
        }
    }

    clickHandler = () => {
        this.setState((prevState) => ({
            open : !prevState.open,
        }))
    }

    render() {
        return (
            <>
                <Div open={this.state.open} onClick={this.clickHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Div>
                <Navbar open={this.state.open} />
            </>
        );
    }
}