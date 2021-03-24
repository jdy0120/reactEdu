import React from 'react';
import MyComponent from './components/MyComponent'
import Say from './components/Say'
import EventPractice from './components/EventPractice'
import IterationSample from './components/IterationSample'
import Counter from './components/Counter'
import Info1 from './components/Info1'
import Info2 from './components/Info2'
import CounterReducer from './components/CounterReducer';
import InfoReducer from './components/InfoReducer'
import RefSample from './components/RefSample';
import Timer from './components/Timer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';
import { SampleProvider } from './components/SampleContext';
import ReducerSample from './components/ReducerSample';
import TodoList from './components/TodoList';
import TodoFormContextApi from './components/contextApiTest/TodoForm';
import TodoListContextApi from './components/contextApiTest/TodoList';
import { TodosContextProvider } from './contexts/TodoContext';
function App() {
  return (
    <BrowserRouter>
      <MyComponent name='doyeon' favoriteNumber={7}>도연</MyComponent>
      <hr/>
      <Say></Say>
      <hr/>
      <EventPractice/>
      <hr/>
      <IterationSample/>
      <hr/>
      <Counter/>
      <hr/>
      <Info1/>
      <hr/>
      <Info2/>
      <hr/>
      <CounterReducer/>
      <hr/>
      <InfoReducer/>
      <hr/>
      <RefSample />
      <hr/>
      <Timer />
      <hr/>
      <Switch>
        <Route path='/' exact={true} component={Homepage} />
        <Route path='/note/:postId' exact={true} component={NoteListPage} />
        <Route path='/note/' component={NotePage} />
      </Switch>
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
      <TodoList/>
      <hr/>
      <TodosContextProvider>
        <TodoFormContextApi />
        <TodoListContextApi />
      </TodosContextProvider>
    </BrowserRouter>
  );
}

export default App;
