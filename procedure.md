## 1. Getting Started with Regular Expression Input

### 1.1: Entering a Regular Expression

- Locate the "Enter RegEx" button in the main control panel
- Click the button to open the input dialog
- Type your desired regular expression in the text field that appears
- Click "Start Construction" to begin the NFA conversion process

### 1.2: Using Example Expressions

- Click the "Examples" button to automatically load a pre-defined regular expression
- The system will randomly select from available examples including: a*, a|b, ab, (a|b)*, (a|b)*abb, a+b*, (ab)*
- This is particularly useful for beginners to understand different types of regular expressions

## 2. Navigating Through Thompson's Algorithm Construction

### 2.1: Understanding the Construction Process

- Once a regular expression is entered, the system displays the step-by-step construction using Thompson's Algorithm
- The construction process is broken down into discrete steps, each showing a specific operation
- A progress bar at the top indicates your current position in the construction sequence

### 2.2: Step Navigation Controls

- Use the "Next Step" button to advance to the subsequent construction step
- Use the "Previous" button to return to earlier steps for review
- Alternative navigation: Use the right arrow key (→) to move forward and left arrow key (←) to move backward
- The step counter displays your current position (e.g., "3 / 8" means step 3 of 8 total steps)

### 2.3: Construction Steps Panel

- The right sidebar displays a detailed list of all construction steps
- Each step is numbered and includes a descriptive title and explanation
- The current step is highlighted for easy identification
- Steps are marked as completed as you progress through the construction

## 3. Understanding the NFA Visualization

### 3.1: State Representation

- States are represented as circles with unique identifiers
- The start state is indicated by an incoming arrow from the left
- Accept states are shown as double circles (circle within a circle)
- Currently active states during step navigation may be highlighted

### 3.2: Transition Interpretation

- Solid arrows represent character transitions labeled with the specific symbol
- Dashed arrows represent epsilon (ε) transitions, which occur without consuming input
- Multiple transitions from a state may curve to avoid overlap
- Self-loops appear as curved arrows returning to the same state

### 3.3: Visual Layout

- The NFA diagram automatically adjusts its layout for optimal viewing
- States are positioned to minimize crossing transitions
- The visualization scales to fit within the display area

## 4. Testing the Constructed NFA

### 4.1: Accessing the Test Function

- After completing the construction, the test section becomes available in the right panel
- Locate the "Test NFA" section at the bottom of the construction steps panel

### 4.2: String Testing Process

- Enter a test string in the input field labeled "Test string"
- Click the "Test" button to verify if the string is accepted by the constructed NFA
- The result will display as either "ACCEPTED" (in green) or "REJECTED" (in red)

### 4.3: Understanding Test Results

- An accepted string means the NFA reaches an accept state after processing all input characters
- A rejected string means the NFA cannot reach an accept state with the given input
- Test multiple strings to better understand the language recognized by your regular expression

## 5. Learning Through Different Expression Types

### 5.1: Basic Expressions

- Start with simple single character expressions like "a" or "b"
- Observe how these create the most basic two-state NFAs

### 5.2: Union Operations

- Try expressions like "a|b" to understand how the union operator creates parallel paths
- Notice how epsilon transitions connect the start state to multiple sub-expressions

### 5.3: Concatenation Operations

- Experiment with expressions like "ab" to see how concatenation connects NFAs in sequence
- Observe how the accept state of the first NFA becomes connected to the start state of the second

### 5.4: Kleene Star Operations

- Test expressions like "a*" to understand how the star operator creates loops
- Notice the epsilon transitions that allow for zero or more repetitions

### 5.5: Complex Expressions

- Try comprehensive expressions like "(a|b)*abb" that combine multiple operators
- Follow the construction step-by-step to understand how complex expressions are built from simpler components

## 6. Best Practices for Learning

### 6.1: Systematic Exploration

- Begin with simple expressions and gradually increase complexity
- Complete the entire construction process for each expression before moving to the next
- Use the step navigation to review difficult concepts multiple times

### 6.2: Testing Comprehension

- After constructing an NFA, predict whether certain strings should be accepted before testing
- Verify your predictions using the test function
- If results differ from expectations, review the construction steps to understand why

### 6.3: Pattern Recognition

- Notice how certain regular expression patterns consistently produce similar NFA structures
- Observe the relationship between expression complexity and the number of construction steps
- Identify common sub-patterns that appear in multiple expressions