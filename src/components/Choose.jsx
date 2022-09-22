import styled from "styled-components";
import choose from "../assets/choose.png";

const Choose = () => {
  return (
    <Section>
      <div className="image">
        <img src={choose} alt="" />
      </div>
      <div className="content">
        <h2>Why should you choose our website?</h2>
        <p>
          Because we are the best page on the internet to buy and sell NFT at
          the best price. You can also create your own NFTs and trade them to
          the official market!
        </p>
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 0 9rem;
  margin-bottom: 5rem;

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    h2 {
      font-size: 4rem;
    }
    p {
      font-size: 38px;
      color: #000;
      line-height: 6rem;
    }
  }
`;

export default Choose;
