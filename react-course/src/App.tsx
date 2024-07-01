import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FieldValue from './components/Task1/FieldValue';
import MoreDetailsButton from './components/Task2/MoreDetailsButton';
import InputNumber from './components/Task3/InputNumber';

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <ul>
          <li><Link to="/">Задание 1</Link></li>
          <li><Link to="/task2">Задание 2</Link></li>
          <li><Link to="/task3">Задание 3</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<FieldValue />}/>
        <Route path="/task2" element={<MoreDetailsButton text="Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа соответствующий условий активизации. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров позволяет выполнять важные задания по разработке дальнейших направлений развития. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности позволяет оценить значение модели развития. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности требуют от нас анализа существенных финансовых и административных условий."/>}/>
        <Route path="/task3" element={<InputNumber/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
