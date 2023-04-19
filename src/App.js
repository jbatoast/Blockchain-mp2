import { useState, useEffect } from "react";
// Components
import Navbar from "./components/Navbar";
import { addBalanceOwner, addBalanceCounterparty, claimOwner, claimCounterparty, setEscrowDetails } from "./utils/operation";
import { SecretInputForm, TezInputForm, OwnerAddressInputForm, CounterpartyAddressInputForm, OwnerStakeInputForm, CounterpartyStakeInputForm} from "./utils/operation";

const App = () => {
  // Players holding lottery tickets
  const [players, setPlayers] = useState([]);
  const [tickets, setTickets] = useState(5);
  const [loading, setLoading] = useState(false);

  // Set players and tickets remaining
  useEffect(() => {
    // TODO 9 - Fetch players and tickets remaining from storage
    (async () => {
      setPlayers([]);
      setTickets(5);
    })();
  }, []);

  // TODO 7.a - Complete onBuyTicket function
  const onAddBalanceOwner = async () => {
    try{
      setLoading(true);
      await addBalanceOwner();
      alert("Transaction finished.");
    }catch(err){
      alert("Transaction Failed: ", err.message);
    }
    setLoading(false);
  };

  // TODO 11.a - Complete onEndGame function
  const onAddBalanceCounterparty = async () => {
    try{
      setLoading(true);
      await addBalanceCounterparty();
      alert("Transaction finished.");
    }catch(err){
      alert("Transaction Failed: ", err.message);
    }
    setLoading(false);
  };

  const onClaimOwner = async () => {
    try{
      setLoading(true);
      await claimOwner();
      alert("Transaction finished.");
    }catch(err){
      alert("Transaction Failed: ", err.message);
    }
    setLoading(false);
  };

  const onClaimCounterparty = async () => {
    try{
      setLoading(true);
      await claimCounterparty();
      alert("Transaction finished.");
    }catch(err){
      alert("Transaction Failed: ", err.message);
    }
    setLoading(false);
  };

  const onSetEscrowDetails = async () => {
    try{
      setLoading(true);
      await setEscrowDetails();
      alert("Transaction finished.");
    }catch(err){
      alert("Transaction Failed: ", err.message);
    }
    setLoading(false);
  };

  return (
    <div className="h-100">
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        {/* Ticket remaining display */}
        <div className="py-1">Escrow</div>
        {/* Action Buttons */}
        <div className="d-flex container flex-row justify-content-center align-items-center maindiv border border-dark rounded-3 mt-3 p-3">
        <div class="d-flex flex-column h-100 justify-content-center border border-dark rounded-3 p-3 m-3 addbalance">
        <TezInputForm></TezInputForm>
        <button onClick={onAddBalanceOwner} className="btn btn-primary btn-lg mb-2">
          {/* TODO 7.b - Call onBuyTicket on click */}
          {/* TODO 7.c - Show "loading..." when buying operation is pending */}
          {loading === true ? "Loading..." : "Add Balance Owner"}
        </button>
        <button onClick={onAddBalanceCounterparty} className="btn btn-primary btn-lg mb-2">
          {/* TODO 11.b - Call onEndGame on click */}
          {/* TODO 11.c - Show "loading..." when buying operation is pending */}
          {loading === true ? "Loading..." : "Add Balance Counterparty"}
        </button>
        </div>

        <div class="d-flex flex-column h-100 justify-content-center border border-dark rounded-3 p-3 m-3 claimbalance">
        <SecretInputForm></SecretInputForm>
        <button onClick={onClaimOwner} className="btn btn-success btn-lg mb-2">
          {/* TODO 11.b - Call onEndGame on click */}
          {/* TODO 11.c - Show "loading..." when buying operation is pending */}
          {loading === true ? "Loading..." : "Claim Owner"}
        </button>
        <button onClick={onClaimCounterparty} className="btn btn-success btn-lg mb-2">
          {/* TODO 11.b - Call onEndGame on click */}
          {/* TODO 11.c - Show "loading..." when buying operation is pending */}
          {loading === true ? "Loading..." : "Claim Counterparty"}
        </button>

        </div>

        <div class="d-flex flex-column h-100 justify-content-center border border-dark rounded-3 p-3 m-3 admin">
        <OwnerAddressInputForm></OwnerAddressInputForm>
        <CounterpartyAddressInputForm></CounterpartyAddressInputForm>
        <OwnerStakeInputForm></OwnerStakeInputForm>
        <CounterpartyStakeInputForm></CounterpartyStakeInputForm>
        <button onClick={onSetEscrowDetails} className="btn btn-success btn-lg mb-2">
          {/* TODO 11.b - Call onEndGame on click */}
          {/* TODO 11.c - Show "loading..." when buying operation is pending */}
          {loading === true ? "Loading..." : "Set Escrow Details"}
        </button>
        </div>
        </div>
        {/* List of Players */}
        <div className="mt-2">
          {players.map((player, index) => (
            <div key={index}>
              <b>Ticket {index + 1}:</b> {player}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
