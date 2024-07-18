import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  deleteAmount = value => {
    this.setState(prevstate => ({amount: prevstate.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="background-container">
        <div className="inner-container">
          <div className="profile-container">
            <h1 className="heading-style">S</h1>
            <p className="paragraph-style">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="paragraph-style">Withdraw</p>
          <p className="balance">Choose Sum (In Rupees)</p>
          <ul className="unorder-list">
            {denominationsList.map(each => (
              <DenominationItem
                items={each}
                key={each.id}
                deleteAmount={this.deleteAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
