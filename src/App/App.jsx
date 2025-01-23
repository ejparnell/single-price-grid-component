import { Link } from 'react-router-dom'

import { AppContainer, ContentContainer, DollarContainer, DollarText, SignUpLinkContainer, PricingContainer } from './AppStyles'
import { Card } from '../shared/Card/Card'
import { Heading } from '../shared/Heading/Heading'
import { Text } from '../shared/Text/Text'
import { ContactCard } from '../ContactCard/ContactCard'

import { theme } from '../theme'

function App() {
    return (
        <AppContainer>
            <ContentContainer>
                <Card $gridArea='1 / 1 / 2 / 3'>
                    <Heading level={1} color={theme.colors.darkCyan}>Join our community</Heading>
                    <Heading level={2} color={theme.colors.brightYellow}>30-day, hassle-free money back guarantee</Heading>

                    <Text>
                        Gain access to our full library of tutorials along with expert code reviews.
                        Perfect for any developers who are serious about honing their skills.
                    </Text>
                </Card>

                <Card $bgColor={theme.colors.darkCyan}>
                    <Heading level={2}>Monthly Subscription</Heading>

                    <PricingContainer>
                        <DollarContainer>$29</DollarContainer><DollarText>per month</DollarText>
                    </PricingContainer>

                    <Text color='white'>Full access for less than $1 a day</Text>

                    <SignUpLinkContainer><Link>Sign Up</Link></SignUpLinkContainer>
                </Card>

                <Card $bgColor={theme.colors.lightCyan} display='flex'>
                    <Heading level={2}>Why Us</Heading>

                    <Text color='white' fontWeight={100}>
                        Tutorials by industry experts
                        Peer & expert code review
                        Coding exercises
                        Access to our GitHub repos
                        Community forum
                        Flashcard decks
                        New videos every week
                    </Text>
                </Card>
            </ContentContainer>
            <ContactCard />
        </AppContainer>
    )
}

export default App
