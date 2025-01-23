import { TextContent } from './TextStyles'

export function Text({ children, ...props }) {
    return <TextContent {...props}>{children}</TextContent>
}