
import React from 'react';
// import App from './App';

import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import './style.css'



export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.tooltipRef = React.createRef();
  }

  render() {
    const {
      text,
      tooltipText,
      placement,
      textClass,
      tooltipClass,
    } = this.props;

    return (
<PricingTable  highlightColor='#1976D2'>
    <PricingSlot  highlighted onClick={this.submit} buttonText='Button' title='FREE' priceText='$0/month'>
        <PricingDetail> Single User</PricingDetail>
        <PricingDetail> 5 GB storage</PricingDetail>
        <PricingDetail> Unlimited Public Projects</PricingDetail>
        <PricingDetail> Community access</PricingDetail>
        <PricingDetail strikethrough> Unlimited Private Projects</PricingDetail>
        <PricingDetail strikethrough> Dedicated Phone support</PricingDetail>
        <PricingDetail strikethrough> Free Subdomain</PricingDetail>
        <PricingDetail strikethrough> Monthly Status Reports</PricingDetail>
    </PricingSlot>
    <PricingSlot highlighted onClick={this.submit} buttonText='Button' title='PLUS' priceText='$9/month'>
    <PricingDetail> Single User</PricingDetail>
        <PricingDetail> 5 GB storage</PricingDetail>
        <PricingDetail> Unlimited Public Projects</PricingDetail>
        <PricingDetail> Community access</PricingDetail>
        <PricingDetail> Unlimited Private Projects</PricingDetail>
        <PricingDetail> Dedicated Phone support</PricingDetail>
        <PricingDetail>Free Subdomain</PricingDetail>
        <PricingDetail strikethrough> Monthly Status Reports</PricingDetail>
    </PricingSlot>
   
    <PricingSlot  highlighted onClick={this.submit} buttonText='Button' title='PRO' priceText='$49/month'>
    <PricingDetail> Single User</PricingDetail>
        <PricingDetail> 5 GB storage</PricingDetail>
        <PricingDetail> Unlimited Public Projects</PricingDetail>
        <PricingDetail> Community access</PricingDetail>
        <PricingDetail> Unlimited Private Projects</PricingDetail>
        <PricingDetail> Dedicated Phone support</PricingDetail>
        <PricingDetail >Unlimited Free Subdomain</PricingDetail>
        <PricingDetail >Monthly Status Reports</PricingDetail>
    </PricingSlot>
   
</PricingTable>

    );
  }
}