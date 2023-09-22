import React, { Component } from 'react';
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: end;
    z-index: 25;
    li {
        margin-right: 35px;
    }
    @media (max-width: 768px){
        flex-direction : column;
        justify-content: start;
        align-items: left;
        background-color: #3498db;
        transform: ${props => props.open ? "translateX(0)":"translateX(100%)"};
        transition: all .5s;
        position: fixed;
        top: 0;
        right: 0;
        width: 300px;
        height: 100vh;

        li {
            color : #ffffff;
            margin : 40px 30px;

        }
    }
`

export class Navbar extends Component {
  render() {
        const open = this.props.open;
        return (
            <>
                <Ul open={open}>
                    <li>Home</li>
                    <li>Docs</li>
                    <li>Buy me a coffee</li>
                    <li>github</li>
                </Ul>
            </>
        );
    }
}