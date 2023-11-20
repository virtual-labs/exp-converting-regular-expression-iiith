/****
  * File containing descriptions of RE to NFA conversions
  *
  */

const RE1 = {
  "expression": "01*",
  "nfa": [
    {
      "description": "Draw NFA for accepting 0",
      "vertices": [
        {"name": "A", "positionX": 0, "positionY": 0},
        {"name": "B", "positionX": 1, "positionY": 0}
      ],
      "edges": [
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 0},
          "text": "1",
          "type": "st",
          "direction": "forward"
        }
      ]
    },
    {
      "description": "Draw NFA for accepting 1*",
      "vertices": [
        {"name": "A", "positionX": 0, "positionY": 0},
        {"name": "B", "positionX": 1, "positionY": 0},
        {"name": "C", "positionX": 2, "positionY": 0},
        {"name": "D", "positionX": 3, "positionY": 0}
      ],
      "edges": [
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 0},
          "end": {"name": "C", "positionX": 2, "positionY": 0},
          "text": "1",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 0},
          "end": {"name": "D", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 0},
          "text": "e",
          "type": "tc",
          "direction": "backward"
        },
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "D", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "bc",
          "direction": "forward"
        }
      ]
    },
    {
      "description": "Combine NFAs to accept 01*",
      "vertices": [
        {"name": "A", "positionX": 0, "positionY": 0},
        {"name": "B", "positionX": 1, "positionY": 0},
        {"name": "C", "positionX": 2, "positionY": 0},
        {"name": "D", "positionX": 3, "positionY": 0},
        {"name": "E", "positionX": 4, "positionY": 0}
      ],
      "edges": [
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 0},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 0},
          "end": {"name": "C", "positionX": 2, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 0},
          "end": {"name": "D", "positionX": 3, "positionY": 0},
          "text": "1",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "D", "positionX": 3, "positionY": 0},
          "end": {"name": "E", "positionX": 4, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "D", "positionX": 3, "positionY": 0},
          "end": {"name": "C", "positionX": 2, "positionY": 0},
          "text": "e",
          "type": "tc",
          "direction": "backward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 0},
          "end": {"name": "E", "positionX": 4, "positionY": 0},
          "text": "e",
          "type": "bc",
          "direction": "forward"
        }
      ]
    }
  ]
}

const RE2 = {
  "expression": "(0+1)01",
  "nfa": [
    {
      "description": "Draw NFA to accept (0+1)",
      "vertices": [
        {"name": "A", "positionX": 0, "positionY": 0},
        {"name": "B", "positionX": 1, "positionY": 1},
        {"name": "C", "positionX": 2, "positionY": 1},
        {"name": "D", "positionX": 1, "positionY": -1},
        {"name": "E", "positionX": 2, "positionY": -1},
        {"name": "F", "positionX": 3, "positionY": 0}
      ],
      "edges": [
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "D", "positionX": 1, "positionY": -1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 1},
          "end": {"name": "C", "positionX": 2, "positionY": 1},
          "text": "1",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "D", "positionX": 1, "positionY": -1},
          "end": {"name": "E", "positionX": 2, "positionY": -1},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 1},
          "end": {"name": "F", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "E", "positionX": 2, "positionY": -1},
          "end": {"name": "F", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        }
      ]
    },
    {
      "description": "Combine NFAs to accept (0+1)0",
      "vertices": [
        {"name": "A", "positionX": 0, "positionY": 0},
        {"name": "B", "positionX": 1, "positionY": 1},
        {"name": "C", "positionX": 2, "positionY": 1},
        {"name": "D", "positionX": 1, "positionY": -1},
        {"name": "E", "positionX": 2, "positionY": -1},
        {"name": "F", "positionX": 3, "positionY": 0},
        {"name": "G", "positionX": 4, "positionY": 0}
      ],
      "edges": [
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "D", "positionX": 1, "positionY": -1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 1},
          "end": {"name": "C", "positionX": 2, "positionY": 1},
          "text": "1",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "D", "positionX": 1, "positionY": -1},
          "end": {"name": "E", "positionX": 2, "positionY": -1},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 1},
          "end": {"name": "F", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "E", "positionX": 2, "positionY": -1},
          "end": {"name": "F", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "F", "positionX": 3, "positionY": 0},
          "end": {"name": "G", "positionX": 4, "positionY": 0},
          "text": "0",
          "type": "st",
          "direction": "forward"
        }
      ]
    },
    {
      "description": "Combine NFAs to accept (0+1)01",
      "vertices": [
        {"name": "A", "positionX": 0, "positionY": 0},
        {"name": "B", "positionX": 1, "positionY": 1},
        {"name": "C", "positionX": 2, "positionY": 1},
        {"name": "D", "positionX": 1, "positionY": -1},
        {"name": "E", "positionX": 2, "positionY": -1},
        {"name": "F", "positionX": 3, "positionY": 0},
        {"name": "G", "positionX": 4, "positionY": 0},
        {"name": "H", "positionX": 5, "positionY": 0}
      ],
      "edges": [
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "D", "positionX": 1, "positionY": -1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 1},
          "end": {"name": "C", "positionX": 2, "positionY": 1},
          "text": "1",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "D", "positionX": 1, "positionY": -1},
          "end": {"name": "E", "positionX": 2, "positionY": -1},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 1},
          "end": {"name": "F", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "E", "positionX": 2, "positionY": -1},
          "end": {"name": "F", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "F", "positionX": 3, "positionY": 0},
          "end": {"name": "G", "positionX": 4, "positionY": 0},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "G", "positionX": 4, "positionY": 0},
          "end": {"name": "H", "positionX": 5, "positionY": 0},
          "text": "1",
          "type": "st",
          "direction": "forward"
        }
      ]
    }
  ] 
}

const RE3 = {
  "expression": "00(0+1)*",
  "nfa": [
    {
      "description": "Draw NFA to accept (0+1)",
      "vertices": [
        {"name": "A", "positionX": 0, "positionY": 0},
        {"name": "B", "positionX": 1, "positionY": 1},
        {"name": "C", "positionX": 2, "positionY": 1},
        {"name": "D", "positionX": 1, "positionY": -1},
        {"name": "E", "positionX": 2, "positionY": -1},
        {"name": "F", "positionX": 3, "positionY": 0}
      ],
      "edges": [
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 1},
          "end": {"name": "C", "positionX": 2, "positionY": 1},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 1},
          "end": {"name": "F", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "D", "positionX": 1, "positionY": -1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "D", "positionX": 1, "positionY": -1},
          "end": {"name": "E", "positionX": 2, "positionY": -1},
          "text": "1",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "E", "positionX": 2, "positionY": -1},
          "end": {"name": "F", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        }
      ]
    },
    {
      "description": "Update NFA to accept (0+1)*",
      "vertices": [
        {"name": "A", "positionX": 0, "positionY": 0},
        {"name": "B", "positionX": 1, "positionY": 0},
        {"name": "C", "positionX": 2, "positionY": 1},
        {"name": "D", "positionX": 3, "positionY": 1},
        {"name": "E", "positionX": 2, "positionY": -1},
        {"name": "F", "positionX": 3, "positionY": -1},
        {"name": "G", "positionX": 4, "positionY": 0},
        {"name": "H", "positionX": 5, "positionY": 0}
      ],
      "edges": [
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 0},
          "end": {"name": "C", "positionX": 2, "positionY": 1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 1},
          "end": {"name": "D", "positionX": 3, "positionY": 1},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "D", "positionX": 3, "positionY": 1},
          "end": {"name": "G", "positionX": 4, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 0},
          "end": {"name": "E", "positionX": 2, "positionY": -1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "E", "positionX": 2, "positionY": -1},
          "end": {"name": "F", "positionX": 3, "positionY": -1},
          "text": "1",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "F", "positionX": 3, "positionY": -1},
          "end": {"name": "G", "positionX": 4, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "G", "positionX": 4, "positionY": 0},
          "end": {"name": "H", "positionX": 5, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "G", "positionX": 4, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "backward"
        },
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "H", "positionX": 5, "positionY": 0},
          "text": "e",
          "type": "bc",
          "direction": "forward"
        }
      ]
    },
    {
      "description": "Combine NFAs to accept 0(0+1)*",
      "vertices": [
        {"name": "A", "positionX": 0, "positionY": 0},
        {"name": "B", "positionX": 1, "positionY": 0},
        {"name": "C", "positionX": 2, "positionY": 0},
        {"name": "D", "positionX": 3, "positionY": 1},
        {"name": "E", "positionX": 4, "positionY": 1},
        {"name": "F", "positionX": 3, "positionY": -1},
        {"name": "G", "positionX": 4, "positionY": -1},
        {"name": "H", "positionX": 5, "positionY": 0},
        {"name": "I", "positionX": 6, "positionY": 0}
      ],
      "edges": [
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 0},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 0},
          "end": {"name": "C", "positionX": 2, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 0},
          "end": {"name": "D", "positionX": 3, "positionY": 1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "D", "positionX": 3, "positionY": 1},
          "end": {"name": "E", "positionX": 4, "positionY": 1},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "E", "positionX": 4, "positionY": 1},
          "end": {"name": "H", "positionX": 5, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 0},
          "end": {"name": "F", "positionX": 3, "positionY": -1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "F", "positionX": 3, "positionY": -1},
          "end": {"name": "G", "positionX": 4, "positionY": -1},
          "text": "1",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "G", "positionX": 4, "positionY": -1},
          "end": {"name": "H", "positionX": 5, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "H", "positionX": 5, "positionY": 0},
          "end": {"name": "I", "positionX": 6, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "H", "positionX": 5, "positionY": 0},
          "end": {"name": "C", "positionX": 2, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "backward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 0},
          "end": {"name": "I", "positionX": 6, "positionY": 0},
          "text": "e",
          "type": "bc",
          "direction": "forward"
        }
      ]
    },
    {
      "description": "Combine NFAs to accept 00(0+1)*",
      "vertices": [
        {"name": "A", "positionX": 0, "positionY": 0},
        {"name": "B", "positionX": 1, "positionY": 0},
        {"name": "C", "positionX": 2, "positionY": 0},
        {"name": "D", "positionX": 3, "positionY": 0},
        {"name": "E", "positionX": 4, "positionY": 1},
        {"name": "F", "positionX": 5, "positionY": 1},
        {"name": "G", "positionX": 4, "positionY": -1},
        {"name": "H", "positionX": 5, "positionY": -1},
        {"name": "I", "positionX": 6, "positionY": 0},
        {"name": "J", "positionX": 7, "positionY": 0}
      ],
      "edges": [
        {
          "start": {"name": "A", "positionX": 0, "positionY": 0},
          "end": {"name": "B", "positionX": 1, "positionY": 0},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "B", "positionX": 1, "positionY": 0},
          "end": {"name": "C", "positionX": 2, "positionY": 0},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 0},
          "end": {"name": "D", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "D", "positionX": 3, "positionY": 0},
          "end": {"name": "E", "positionX": 4, "positionY": 1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "E", "positionX": 4, "positionY": 1},
          "end": {"name": "F", "positionX": 5, "positionY": 1},
          "text": "0",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "F", "positionX": 5, "positionY": 1},
          "end": {"name": "I", "positionX": 6, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "D", "positionX": 3, "positionY": 0},
          "end": {"name": "G", "positionX": 4, "positionY": -1},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "G", "positionX": 4, "positionY": -1},
          "end": {"name": "H", "positionX": 5, "positionY": -1},
          "text": "1",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "H", "positionX": 5, "positionY": -1},
          "end": {"name": "I", "positionX": 6, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "I", "positionX": 6, "positionY": 0},
          "end": {"name": "J", "positionX": 7, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "forward"
        },
        {
          "start": {"name": "I", "positionX": 6, "positionY": 0},
          "end": {"name": "D", "positionX": 3, "positionY": 0},
          "text": "e",
          "type": "st",
          "direction": "backward"
        },
        {
          "start": {"name": "C", "positionX": 2, "positionY": 0},
          "end": {"name": "J", "positionX": 7, "positionY": 0},
          "text": "e",
          "type": "bc",
          "direction": "forward"
        }
      ]
    }
  ]
}
