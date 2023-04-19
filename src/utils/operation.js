import { tezos } from "./tezos";
import React, { useState } from 'react';
// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation

// export default function BalanceForm() {
//     const [tezamt] = useState('');

//     function handleTezamtChange(e) {
//       this.setState({tezamt: e.target.value});
//     }

//     return (
//       <form>
//         <label>
//           <input type="number" name="tezamt" placeholder="Tezamt" value={this.state.tezamt} onChange={this.handleTezamtChange} />

//         <p>You typed: {this.state.tezamt}</p>
//         </label>
//       </form>
//     );
//   }
const contractAddress = "KT1HjLJnq55sALQagpWUJmMYCGDz9aqkXwvL";//"KT1LXVaoa5aA7rdy1RPtk47jNGZ7NLAvcHkE";

var tezContainer, secretContainer, ownerAddress, counterpartyAddress, ownerStake, counterpartyStake;

export function TezInputForm() {
  const [inputValue, setInputValue] = useState();

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  tezContainer = inputValue;
  return (
    <form>
      <div className="form-group w-100 mb-3">
        <label> TezAmt: </label>
        <input className="form-control" type="number" value={inputValue} onChange={handleInputChange} />
      </div>
    </form>
  );
}

export function SecretInputForm() {
  const [inputValue, setInputValue] = useState();

  function handleInputChange(event) {
    setInputValue(event.target.value);

  }

  secretContainer = inputValue;
  return (
    <form>
      <div className="form-group w-100 mb-3">
        <label>Secret: </label>
        <input className="form-control" type="number" value={inputValue} onChange={handleInputChange} />
      </div>
    </form>
  );
}

export function OwnerAddressInputForm() {
  const [inputValue, setInputValue] = useState();

  function handleInputChange(event) {
    setInputValue(event.target.value);

  }

  ownerAddress = inputValue;
  return (
    <form>
      <div className="form-group w-100 mb-3">
        <label>Owner Address: </label>
        <input className="form-control" type="text" value={inputValue} onChange={handleInputChange} />
      </div>
    </form>
  );
}

export function CounterpartyAddressInputForm() {
  const [inputValue, setInputValue] = useState();

  function handleInputChange(event) {
    setInputValue(event.target.value);

  }

  counterpartyAddress = inputValue;
  return (
    <form>
      <div className="form-group w-100 mb-3">
        <label>Counterparty Address: </label>
        <input className="form-control" type="text" value={inputValue} onChange={handleInputChange} />
      </div>
    </form>
  );
}

export function OwnerStakeInputForm() {
  const [inputValue, setInputValue] = useState();

  function handleInputChange(event) {
    setInputValue(event.target.value);

  }

  ownerStake = inputValue;
  return (
    <form>
      <div className="form-group w-100 mb-3">
        <label>Owner Stake: </label>
        <input className="form-control" type="number" value={inputValue} onChange={handleInputChange} />
      </div>
    </form>
  );
}

export function CounterpartyStakeInputForm() {
  const [inputValue, setInputValue] = useState();

  function handleInputChange(event) {
    setInputValue(event.target.value);

  }

  counterpartyStake = inputValue;
  return (
    <form>
      <div className="form-group w-100 mb-3">
        <label>Counterparty Stake: </label>
        <input className="form-control" type="number" value={inputValue} onChange={handleInputChange} />
      </div>
    </form>
  );
}

export const addBalanceOwner = async () => {
  console.log("addBalance called");
  try {
    const contract = await tezos.wallet.at(contractAddress);
    const op = await contract.methods.addBalanceOwner().send({
      amount: tezContainer,
      mutez: false,
    });
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

export const addBalanceCounterparty = async () => {
  console.log("addBalanceCounter called");
  try {
    const contract = await tezos.wallet.at(contractAddress);
    const op = await contract.methods.addBalanceCounterparty().send({
      amount: tezContainer,
      mutez: false,
    });
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const claimOwner = async () => {
  console.log("claimOwner called");
  try {
    const contract = await tezos.wallet.at(contractAddress);
    const op = await contract.methods.claimOwner().send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const claimCounterparty = async () => {
  console.log("claimcounter called");
  try {
    const contract = await tezos.wallet.at(contractAddress);
    const op = await contract.methods.claimCounterparty({
      secret: secretContainer,
    }).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

const params = {
    owner: ownerAddress,
    counterparty: counterpartyAddress,
    fromOwner: ownerStake,
    fromCounterparty: counterpartyStake,
  }

export const setEscrowDetails = async () => {
  console.log("set called");
  try {
    const contract = await tezos.wallet.at(contractAddress);
    const op = await contract.methods.setEscrowDetails(params).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};
