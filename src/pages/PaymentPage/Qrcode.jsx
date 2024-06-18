import React, { useState, useContext } from 'react';
import QrcodeImage from '../../assets/images/qrcode.jpg';
import { useNavigate} from 'react-router-dom';
import { UserContext } from '../../Context/LoginContext';

export default function PaymentGateway() {
  const { setPaymentSuccess } = useContext(UserContext);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const navigate = useNavigate();

  const handleTransactionIdChange = (event) => {
    setTransactionId(event.target.value);
  };

  const handleCompletePayment = () => {
    if (transactionId) {
      setPaymentSuccess(true);
      setIsPaymentComplete(true);
      alert('Payment Completed Successfully!');
      navigate('/MyLearning');
    } else {
      alert('Please enter a transaction ID.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100">
      <img src={QrcodeImage} alt="QR Code" className="w-80 h-80 mb-6" />
      <div className="mb-4">
        <input
          type="text"
          value={transactionId}
          onChange={handleTransactionIdChange}
          placeholder="Enter Transaction ID"
          className="w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleCompletePayment}
        className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Complete Payment
      </button>
      {isPaymentComplete && (
        <div className="mt-4 text-green-600">Payment Completed!</div>
      )}
    </div>
  );
}
