import { GetStaticProps } from 'next'
import { PageMetaProps } from '../../components/global/Head'

const pageMeta: PageMetaProps = {
  title: 'Claim BANK',
  description: 'This is the claim page',
  url: 'https://www.bankless.community/claim',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return (
    <div>
      <div>
        <h3>Claim BANK Token</h3>
        <strong>000 BANK</strong>
        <p>
          Enter an ETH wallet address to start your BANK claim. If the address
          has any claimable BANK, it will be sent to them upon submission.
        </p>
      </div>
      <form>
        <div>
          <label>Recipient Address / ENS</label>
          <input
            name="address"
            type="text"
            placeholder="Wallet Address or ENS name"
          />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" placeholder="Enter an amount" />
        </div>
        <div>
          <input type="button" value="Claim XXX BANK Tokens" />
        </div>
      </form>
    </div>
  )
}
export default Page
