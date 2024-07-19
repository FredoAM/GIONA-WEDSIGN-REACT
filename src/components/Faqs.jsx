import { useState } from 'react';
import '../Faqs.css';
import HeaderFaqs from './Header-Faq.jsx';

function Faqs({ isOpen, setIsOpen }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What does "formal attire" mean?',
      answer: 'Formal attire typically includes elegant gowns, suits, tuxedos, or cocktail dresses. Think of it as dressing for a special occasion, similar to what you might wear to a sophisticated evening event.',
    },
    {
      question: 'Are specific colors required for the dress code?',
      answer: 'No, there are no specific color requirements. Feel free to express your personal style and wear colors that make you feel comfortable and confident.',
    },
    {
      question: 'Are children welcome at the wedding?',
      answer: 'Absolutely! We welcome children and have arranged for a designated kids\' area with entertainment to ensure they have a great time during the celebration.',
    },
    {
      question: 'Is there a specific age limit for children attending?',
      answer: 'There\'s no age limit for children. We want the whole family to be a part of our special day, from the littlest ones to the oldest.',
    },
    {
      question: 'Do you accommodate dietary restrictions?',
      answer: 'Yes, we\'re committed to ensuring that all our guests have a delightful dining experience. We offer vegan, vegetarian, and gluten-free food options. Please indicate your dietary preferences in your RSVP, and we\'ll make sure you\'re catered to accordingly.',
    },
    {
      question: 'Can we request dishes for dietary restrictions?',
      answer: 'While we\'ll have a variety of dishes to accommodate different dietary needs, if you have specific requests or severe allergies, please let us know in advance, and we\'ll do our best to accommodate them.',
    },
  ];

  return (
    <>
      <HeaderFaqs isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="faq-container" style={{ display: isOpen ? 'none' : 'block' }}>
        <div className="faq-titles">
          <div>
            <h1>FREQUENTLY ASKED</h1>
            <h4>Questions</h4>            
          </div>
        </div>

        <ul>
        <hr/>
          {faqs.map((faq, index) => (
            <li key={index}>
              <button className="accordion" onClick={() => toggleAccordion(index)}>
                <h3>{faq.question}</h3>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              <div className="panel" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                {faq.answer}
              </div>
              <hr/>
            </li>
            
          ))}
        </ul>
      </main>
    </>
  );
}

export default Faqs;
