import styled from 'styled-components'

export const AppContainer = styled.div`
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px;
    background-color: ${({ theme }) => theme.colors.grayishBlue};

`

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.6);

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        width: 635px;
        height: 475px;
    }
`

export const PricingContainer = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 7px;
`

export const DollarContainer = styled.p`
    font-size: 30px;
    color: white;
`

export const DollarText = styled.p`
    font-size: 15px;
    color: white;
    margin-left: 10px;
    font-weight: 100;
    margin-bottom: 6px;
`

export const SignUpLinkContainer = styled.div`
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.brightYellow};
    color: white;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    border-radius: 5px;
    margin-top: 40px;
`
