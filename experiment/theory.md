
### Regular Expressions
Regular expressions are a concise way to describe patterns in strings. They are built using a set of basic operations:

1. **Basic Symbols**: Individual characters from an alphabet
2. **Concatenation**: Writing expressions next to each other (e.g., "ab")
3. **Union (|)**: Choice between alternatives (e.g., "a|b")
4. **Kleene Star (*)**: Zero or more repetitions (e.g., "a*")
5. **Plus (+)**: One or more repetitions (e.g., "a+")


### Non-deterministic Finite Automata (NFA)
An NFA is a mathematical model of computation that consists of:
- A finite set of states
- A set of input symbols (alphabet)
- A transition function that maps (state, symbol) pairs to sets of states
- A start state
- A set of accept states

NFAs can have multiple transitions for the same input symbol from a state and can include ε-transitions (transitions that don't consume any input).

### Thompson's Construction
Thompson's construction is an algorithm that converts regular expressions to NFAs. The algorithm works recursively by building NFAs for each subexpression and combining them according to the operators:

1. **Basic Symbol**: Creates a simple NFA with two states and a transition labeled with the symbol
2. **Concatenation**: Connects the accept state of the first NFA to the start state of the second NFA with an ε-transition
3. **Union**: Creates a new start state with ε-transitions to both NFAs and a new accept state with ε-transitions from both NFAs
4. **Kleene Star**: Creates a new start state and accept state, with ε-transitions to handle zero or more repetitions
5. **Plus**: Similar to Kleene star but requires at least one repetition

### Equivalence of Regular Expressions and NFAs
The fundamental theorem states that:
- Every regular expression can be converted to an NFA (Thompson's construction)
- Every NFA can be converted to a regular expression
- Both represent the same class of languages: regular languages

### Applications
Understanding the conversion between regular expressions and NFAs is crucial for:
1. Compiler design and lexical analysis
2. Pattern matching in text processing
3. String searching algorithms
4. Network protocol validation
5. Input validation in programming languages 
