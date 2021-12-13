import React from 'react';
import store from './store';
import {observer} from 'mobx-react';
import { autorun } from 'mobx';


const AppMobx: React.FC = observer(() => {
  const { countClass, countObject,doubleClassAuto} = store

  autorun(()=>{
    if (doubleClassAuto.double){
      console.log('Double' + doubleClassAuto.double)
    }
    if (doubleClassAuto.double === 8) {
      console.log('만약 value가 8이라면 0으로 초기화')
      doubleClassAuto.value = 0
    }
  })

  return (
    <div style={{ padding: '50px' }}>
      <div style={{ marginBottom: '50px' }}>
        <h1>Count (Class)</h1>
        <div>number: {countClass.number}</div>
        <button onClick={() => countClass.increase()}>plus</button>
        <button onClick={() => countClass.decrease()}>minus</button>
      </div>

      <div style={{ marginBottom: '50px' }}>
        <h1>Count (Object)</h1>
        <div>num: {countObject.num}</div>
        <button onClick={() => countObject.increase()}>increment</button>
      </div>

      <div>
        <h1>Computed</h1>
        <div>double number: {doubleClassAuto.value}</div>
        <button onClick={() => doubleClassAuto.increment()}>
          double increment
        </button>
      </div>
    </div>
  )
})

export default AppMobx;
