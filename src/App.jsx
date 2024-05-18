
import './App.css'
import Display from './components/Display'
import Header from './components/Header'
import Btn0 from './components/keys/Btn0'
import Btn0Back from './components/keys/Btn0Back'
import Btn0Dot from './components/keys/Btn0Dot'
import Btn1 from './components/keys/Btn1'
import Btn2 from './components/keys/Btn2'
import Btn3 from './components/keys/Btn3'
import Btn4 from './components/keys/Btn4'
import Btn5 from './components/keys/Btn5'
import Btn6 from './components/keys/Btn6'
import Btn7 from './components/keys/Btn7'
import Btn8 from './components/keys/Btn8'
import Btn9 from './components/keys/Btn9'
import BtnAc from './components/keys/BtnAc'
import BtnDiv from './components/keys/BtnDiv'
import BtnIqual from './components/keys/BtnIqual'
import BtnMM from './components/keys/BtnMM'
import BtnMul from './components/keys/BtnMul'
import BtnPJ from './components/keys/BtnPJ'
import BtnRest from './components/keys/BtnRest'
import BtnSum from './components/keys/BtnSum'

function App() {


  return (
    <>
      <div className='container'>
        <div className='header'><Header/></div>
        <div className='display'><Display/></div>
        <div className='keys'>
          <div className="key1"><Btn1/></div>
          <div className="key2"><Btn2/></div>
          <div className="key3"><Btn3/></div>
          <div className="key4"><Btn4/></div>
          <div className="key5"><Btn5/> </div>
          <div className="key6"><Btn6/> </div>
          <div className="key7"><Btn7/> </div>
          <div className="key8"><Btn8/> </div>
          <div className="key9"><Btn9/> </div>
          <div className="key10"><BtnAc/> </div>
          <div className="key11"><BtnMM/></div>
          <div className="key12"><BtnPJ/> </div>
          <div className="key13"><BtnDiv/> </div>
          <div className="key14"><BtnMul/></div>
          <div className="key15"><BtnRest/></div>
          <div className="key16"><BtnSum/></div>
          <div className="key17"><BtnIqual/></div>
          <div className="key18"><Btn0Back/></div>
          <div className="key19"><Btn0Dot/></div>
          <div className="key20"><Btn0/></div>
        </div>
      </div>
    </>
  )
}

export default App
