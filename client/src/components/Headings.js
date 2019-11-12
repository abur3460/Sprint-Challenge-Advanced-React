import React from 'react'
import styled from 'styled-components';

function Headings() {
    return (
        <Head>
            <tr>
                <th className="heading-name">Name</th>
                <th>Country</th>
                <th>Total</th>
            </tr>
        </Head>
    )
}

export default Headings

const Head = styled.nav`
    box-shadow: 1px 1px 5px;
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`