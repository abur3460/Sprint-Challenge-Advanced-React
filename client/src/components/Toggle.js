import React from 'react'
import styled from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode'


const Toggle = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <Button onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}
        >
        <i class="fas fa-adjust"></i>
        </Button>
    );
};

export default Toggle;

const Button = styled.button`
    width: 2.1rem;
    height: 2rem;
    margin: 0 auto;
    background-color: white;
    align-items: center;
    border-radius: 8px;
    color: black;
    border: none;
    }
`