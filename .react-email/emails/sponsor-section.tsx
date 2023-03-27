import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const SponsorSection = () => (
  <Html>
    <Head />
    <Preview>You're now ready to make live transactions with Stripe!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={footer}>
          Thanks so much to our sponsor, <b>Wombo combo</b>:
        </Text>
        <Section style={box}>
          <Column
            style={{
              maxWidth: '200px',
              maxHeight: '200px',
              minWidth: '100px',
              minHeight: '100px',
            }}
          >
            <Link href="https://example.com">
              <Img
                src={`https://placehold.co/300x300`}
                alt="Placeholder"
                height={200}
                width={200}
                style={{ aspectRatio: '1/1' }}
              />
            </Link>
          </Column>
          <Column style={{ padding: '0 10px' }}>
            <Link href="https://example.com" style={anchor}>
              <Text style={heading}>Lorem Ipsum: some sponsor text</Text>
            </Link>
            <Text style={paragraph}>
              Good news, everyone, this product will seriously change your life.
              But you don't have to take our word for it.
            </Text>
            <Button style={button} href="https://example.com">
              Start for free
            </Button>
          </Column>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SponsorSection;

const heading = {
  fontWeight: 'bold',
  fontSize: '24px',
};

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '10px auto',
  padding: '20px 0',
};

const box = {
  padding: '0px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const anchor = {
  color: '#222',
};

const button = {
  backgroundColor: '#222',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '10px 20px',
  margin: '0 <auto></auto>',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '0 20px',
};
