import { useSelector, useDispatch } from 'react-redux';
import { SetCounter } from './SetCounter';
import { bindActionCreators } from 'redux';
import { set, decrement, increment, multiplyBy } from './actions';

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // const resetCount = () => {
  //   dispatch(set(0));
  // };

  // const incrementCount = () => {
  //   dispatch(increment());
  // };

  // const decrementCount = () => {
  //   dispatch(decrement());
  // };
  // const multiplyCount = () => {
  //   dispatch(multiplyBy(5));
  // };

  const actions = bindActionCreators(
    { set, increment, decrement, multiplyBy },
    dispatch
  );

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button
          onClick={() => {
            actions.increment();
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            actions.set(0);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            actions.decrement();
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            actions.multiplyBy(5);
          }}
        >
          Multi. 5{' '}
        </button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
