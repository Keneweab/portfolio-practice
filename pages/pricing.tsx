import styled from 'styled-components';
import Page from './../components/Page';
import FaqSection from './../views/PricingPage/FaqSection';
import PricingTablesSection from './../views/PricingPage/PricingTablesSection';

export default function PricingPage() {
  return (
    <Page title="Pricing" description="Our affordable Pricing Tiers.">
      <Wrapper>
        <PricingTablesSection />
        <FaqSection />
      </Wrapper>
    </Page>
  );
}
// comment
const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
