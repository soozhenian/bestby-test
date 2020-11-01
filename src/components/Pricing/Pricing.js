import React from 'react';
import { Button } from '../../globalStyles';
import { FaUserGraduate, FaUserTie } from 'react-icons/fa';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import {IoIosPeople} from 'react-icons/io'
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

import Simple from '../Swipe/Swipe'

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>ビジネスモデル</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoIosPeople />
                </PricingCardIcon>
                <PricingCardPlan>採用企業</PricingCardPlan>
                <PricingCardCost>￥10,000</PricingCardCost>
                <PricingCardLength>毎月</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>毎日5人の推薦</PricingCardFeature>
                  <PricingCardFeature>追加購入できる</PricingCardFeature>
                  <PricingCardFeature>人事担当専用</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>採用企業関連の方</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaUserGraduate />
                </PricingCardIcon>
                <PricingCardPlan>新卒</PricingCardPlan>
                <PricingCardCost>無料</PricingCardCost>
                <PricingCardLength>最初の2年間</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>新卒採用を応援する</PricingCardFeature>
                <PricingCardFeature>人生初の就職先を任せて</PricingCardFeature>
                  <PricingCardFeature>性格に合う仕事を見つかる</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>新卒の方</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaUserTie />
                </PricingCardIcon>
                <PricingCardPlan>転職の方</PricingCardPlan>
                <PricingCardCost>￥3000</PricingCardCost>
                <PricingCardLength>毎月</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>今までの経験を活かせる</PricingCardFeature>
                  <PricingCardFeature>企業の人事にDMができる</PricingCardFeature>
                  <PricingCardFeature>新しい挑戦を見つかる</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>転職の方</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
   
  );
}
export default Pricing;
