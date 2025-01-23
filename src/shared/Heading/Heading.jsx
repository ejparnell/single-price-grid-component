// Due to the dynamic nature of this component, I'm placing the style in the same file.
// I'm also breaking from the normal pattern of using a const to define the styled component and attaching the style directly to the component.
import styled from 'styled-components'

export const Heading = styled(({ children, level, ...props }) => {
    const HeaderElement = `h${level}`
    return <HeaderElement {...props}>{children}</HeaderElement>
})`
    color: ${({ color }) => color ? color : 'white'};
    font-size: ${({ level }) => level === 1 ? '20px' : '15px' };
    margin-bottom: 20px;
    font-weight: ${({ level }) => level === 1 ? '700' : '400' };

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ level }) => level === 1 ? '28px' : '21px' };
    }
`;
