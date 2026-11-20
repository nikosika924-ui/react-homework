import { useState } from 'react';

const answers = [
  "Бесспорно", "Предрешено", "Никаких сомнений", "Определённо да", "Можешь быть уверен в этом",
  "Мне кажется — да", "Вероятнее всего", "Хорошие перспективы", "Знаки говорят — да", "Да",
  "Пока не ясно, попробуй снова", "Спроси позже", "Лучше не рассказывать", "Сейчас нельзя предсказать", "Сконцентрируйся и спроси опять",
  "Даже не думай", "Мой ответ — нет", "По моим данным — нет", "Перспективы не очень хорошие", "Весьма сомнительно"
];

export default function MagicBall() {
  const [answer, setAnswer] = useState("8");
  const [isShaking, setIsShaking] = useState(false);

  function shake() {
    if (isShaking) return;
    setIsShaking(true);
    setAnswer("8");
    setTimeout(() => {
      setAnswer(answers[Math.floor(Math.random() * answers.length)]);
      setIsShaking(false);
    }, 600);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px' }}>
      <h2>Магический шар</h2>
      <div 
        onClick={shake}
        style={{
          width: '200px', height: '200px', backgroundColor: 'black', borderRadius: '50%',
          display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer',
          transform: isShaking ? 'rotate(10deg)' : 'rotate(0deg)', transition: '0.2s'
        }}
      >
        <div style={{ width: '100px', height: '100px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '10px' }}>
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{answer}</span>
        </div>
      </div>
      <p style={{ marginTop: '20px' }}>Нажми на шар</p>
    </div>
  );
}