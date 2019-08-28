import * as React from 'react';
import { number } from 'prop-types';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  initial: number;
  current: number;
}

const Hello: React.FC<Props> = ({ name, enthusiasmLevel = 1 }: Props) => {
  const [state, setState] = React.useState<State>({
    initial: enthusiasmLevel,
    current: enthusiasmLevel
  })

  if (state.initial <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(state.current)}
      </div>
      <button disabled={state.current === 0} onClick={() => setState({...state, current: state.current - 1})}>-</button>
      <button onClick={() => setState({...state, current: state.current + 1})}>+</button>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
