import React from 'react'
import styled from 'styled-components';
import Headings from './Headings';
import Body from './Body'


const PlayerList = (props) => {
    return (
        <Table>
            <Headings />
            <Body data={props.data} />
        </Table>
    )
}

export default PlayerList

const Table = styled.table`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: 1px 1px 5px;
    border-radius: 5px;
    td, th {
        box-shadow: 1px 1px 5px;
        border-radius: 5px;
    padding: 15px;
    }
`