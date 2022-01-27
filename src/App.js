import './App.css';
import React, { useEffect, useState } from 'react';
// import web3 from './components/web3';
import lottery from './components/lottery';
import web3 from './components/web3';

function App() {
  // web3.eth.getAccounts().then(console.log);
  const [manager, setmanager] = useState(null);
  const [amount, setamount] = useState('');
  const [message,setMessage]=useState('');
  const [lotterydetails, setLotterydetails] = useState({ players: [], cBalance: '' });
  
  useEffect(() => {
    const getDetails = async () => {
      const newManager = await lottery.methods.manager().call();
      setmanager(newManager);
      console.log(newManager);
      let players;
      if(newManager)players = await lottery.methods.getPlayers().call({
        from: newManager,
      });
      const cBalance = await web3.eth.getBalance(lottery.options.address);
      console.log(players);
      console.log(cBalance);
      setLotterydetails({ players, cBalance });
    }
    getDetails();
  }, []);

  const amountHandler=(event)=>{
    setamount(event.target.value);
  }

  const submitHandler= async event=>{
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    setMessage("Loading");
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(amount,'ether')
    });
    setMessage("Success");
  }

  const pickWinnerHandler = async event=>{
    
    const accounts = await web3.eth.getAccounts();
    setMessage("Loading");
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    setMessage("Success");
  }

  return (
    <div className="App">
      {/* {alert("You would need to have metamask to run the app")} */}
      <div>
        <h2>
          Lottery Contract
        </h2>
        <div>
          Manager: {manager}
         </div>
         <div>
          {lotterydetails.players.length} entered
          </div> 
          <div>
          Amount: {web3.utils.fromWei(lotterydetails.cBalance,'ether')} ether
          </div>
        <br />
        <br />
        <hr />
        { message!=="Loading" && <form action="" onSubmit={submitHandler}>
          <h4>
            Want to try your luck?
          </h4>
          <div>
            <input type="text" value={amount} placeholder='Amount in ether' onChange={amountHandler}/>
          </div>
          <button>Enter</button>
        </form>}
         <hr />
         <h4>
         {message}
         </h4>
         <hr />
         <h4>
          Pick a winner
         </h4>
         <button onClick={pickWinnerHandler}>
           Pick a Winner!!
         </button>
         <hr />

      </div>
    </div>
  );
}

export default App;
