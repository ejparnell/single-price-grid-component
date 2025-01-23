import styled from 'styled-components'

export const TextContent = styled.p`
    color: ${({ color, theme }) => color ? color : theme.colors.lightGray};
    font-size: ${({ fontSize }) => fontSize ? fontSize : '14px'};
    font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : '400'};
    margin-bottom: 10px;
    line-height: 1.7;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ fontSize }) => fontSize ? fontSize : '16px'};
    }
`