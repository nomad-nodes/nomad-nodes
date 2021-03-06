pragma solidity ^0.5.0;

import "./DappToken.sol";
import "./DaiToken.sol";

contract TokenFarm {
  string public name = "DAPP Token Farm";
  DappToken public dappToken;
  DaiToken public daiToken;
  address public owner;

  // keep track of all the stakers so that we can reward stakers with WAVE tokens
  address[] public stakers;

  mapping(address => uint) public stakingBalance;
  mapping(address => bool) public hasStaked;
  mapping(address => bool) public isStaking;

  // constructor funciton only runs once when deployed to the blockchain
  constructor(DappToken _dappToken, DaiToken _daiToken) public {
      dappToken = _dappToken;
      daiToken = _daiToken;
      owner = msg.sender;
  }

  // 1. stake tokens
  function stakeTokens(uint _amount) public {
    // require amount greater than 0
    require(_amount > 0, 'amount cannot be 0');

    // trasnfer cUSD tokens to this contract address for staking
    daiToken.transferFrom(msg.sender, address(this), _amount);

    // update staking balance
    stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

    // add user to stakers array only if they haven't staked already bc we don't want to reward them twice
    if (!hasStaked[msg.sender]){
      stakers.push(msg.sender);
    }

    // update staking status
    hasStaked[msg.sender] = true;
    isStaking[msg.sender] = true;
  }

  // 2. unstaking tokens (withdraw)
  function unstakeTokens() public {
    // fetch the balance
    uint balance = stakingBalance[msg.sender];

    // require amount greater than 0
    require(balance > 0, 'staking balance cannot be 0');

    // unstake all cUSD tokens
    daiToken.transfer(msg.sender, balance);

    // reset staking balance
    stakingBalance[msg.sender] = 0;
  }

  // 3. issue tokens
  function issueTokens() public {
    require(msg.sender == owner, 'caller must be the owner');

    for (uint i=0; i<stakers.length; i++) {
      address recipient = stakers[i];
      uint balance = stakingBalance[recipient];
      if(balance > 0) {
        dappToken.transfer(recipient, balance);
      }
    }
  }
}
