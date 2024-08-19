import { useState } from 'react'
import './App.css'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { InputBox } from './component/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center 
   items-center bg-cover bg-no-repeat'
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/259191/pexels-photo-259191.jpeg?auto=compress&cs=tinysrgb&w=800' }}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border
      border-gray-60 rounded-lg p-5 backdrop-blur-sm
      bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}

              
              />
            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default App
