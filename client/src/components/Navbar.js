import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import Toggle from './Toggle'

export class Navbar extends Component {
    static defaultProps = {
        title: 'Player Stats',
        icon: 'fas fa-futbol'
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    render() {
        return (
            <Navigation>
                <h1>
                    <i className={this.props.icon} /> {this.props.title}
                </h1>
                <Toggle />
            </Navigation>
        )
    }
}

const Navigation = styled.nav`
    margin: 0 auto;
    box-shadow: 1px 1px 5px;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-self: center;
    }
`

export default Navbar

