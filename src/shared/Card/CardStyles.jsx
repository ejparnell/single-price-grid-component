import styled from 'styled-components'

export const CardContainer = styled.div`
    background-color: ${({ $bgColor }) => $bgColor ? $bgColor : 'white'};
    display: ${({ display }) => display ? display : 'block'};
    justify-content: space-evenly;
    flex-direction: column;
    padding: 20px;

    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-area: ${({ $gridArea }) => $gridArea ? $gridArea : 'auto'};
    }
`