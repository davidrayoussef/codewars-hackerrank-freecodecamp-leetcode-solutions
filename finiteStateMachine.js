/*
Create a finite automaton that has three states. Finite automatons are the same as finite state machines
for our purposes.

Our simple automaton accepts the language of A, defined as {0, 1} and should have three states:
q1, q2, and q3. Here is the description if the states:

q1 is our start state, we begin reading commands from here
q2 is our accept state, we return true if this is our last state

And the transitions:
q1 moves to q2 when given a 1, and stays at q1 when given a 0
q2 moves to q3 when given a 0, and stays at q2 when given a 1
q3 moves to q2 when given a 0 or 1

The automaton should return whether we end in our accepted state (q2), or not (true/false).

You will have to design your state objects, and how your Automaton handles transitions.
*/

class Automaton {
  constructor() {
    this.states = {
      1: { q1: 'q2', q2: 'q2', q3: 'q2' },
      0: { q1: 'q1', q2: 'q3', q3: 'q2' }
    };
  }

  readCommands(commands) {
    return commands.reduce((state, curr) => {
      return this.states[curr][state];
    }, 'q1') === 'q2';
  }
}

const a = new Automaton();
a.readCommands(['1', '0', '0', '1', '0']); //=> false
a.readCommands(['1']); //=> true
a.readCommands(['1', '0', '0', '1']); //=> true
