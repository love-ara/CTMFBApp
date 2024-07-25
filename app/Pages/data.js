import sendImage from "../assets/sent.png";
import remita from "../assets/remita.png";
import bill from "../assets/bills.png";
import airtime from "../assets/airtime.png";
import loan from "../assets/loan.png";
import invest from "../assets/invest.png";
import electricity from "../assets/electricity.png";
import cable from "../assets/cable.png";





const features = [
    { name: 'Send Money', image: sendImage, backgroundColor: "#D6FAD1", width: 80, height: 70, section: 'Transfer' },
    { name: 'Remita', image: remita, backgroundColor: '#f9e7db', width: 130, height: 50, section: 'Remita' },
    { name: 'Pay Bills', image: bill, backgroundColor: '#efc7b6', width: 50, height: 50, section: 'Pay Bills' },
    { name: 'Airtime', image: airtime, backgroundColor: '#bfe9d5', width: 50, height: 50, section: 'Airtime' },
    { name: 'Loan', image: loan, backgroundColor: '#f9e7db', width: 130, height: 50, section: 'Loan' },
    { name: 'Cable Tv', image: cable, backgroundColor: '#efc7b6', width: 50, height: 50, section: 'Cable Tv' },
    { name: 'Invest', image: invest, backgroundColor: '#bfe9d5', width: 50, height: 50, section: 'Invest' },
    { name: 'Electricity', image: electricity, backgroundColor: '#d6fad1', width: 80, height: 70, section: 'Electricity' }
];

export default features;