import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id : 1,
    author : "구태훈",
    content: "하이1",
    emotion: 5,
    create_date: new Date().getTime()
  },
  {
    id : 2,
    author : "이태훈",
    content: "하이2",
    emotion: 2,
    create_date: new Date().getTime()
  },
  {
    id : 3,
    author : "삼태훈",
    content: "하이3",
    emotion: 3,
    create_date: new Date().getTime()
  },
  {
    id : 4,
    author : "사태훈",
    content: "하이4",
    emotion: 4,
    create_date: new Date().getTime()
  },
  {
    id : 5,
    author : "오태훈",
    content: "하이5",
    emotion: 5,
    create_date: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
