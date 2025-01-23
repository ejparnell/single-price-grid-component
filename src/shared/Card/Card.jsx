import { CardContainer } from './CardStyles'

export function Card({ children, ...props }) {
    return (
        <CardContainer {...props}>
            {children}
        </CardContainer>
    )
}