export const user = [
  {
    id: 0,
    userName: "zuber",
    signupDate: 12345678910,
    testScores: [{ 1: 60 }, { 2: 70 }, { 3: 44 }, { 4: 88 }, { 5: 33 }],
  },
];

export const topics = [
  {
    architecture: [
      {
        question:
          "Which part of the CPU is responsible for making calculations?",

        answers: ["Program counter", "ALU", "Accumulator", "MAR"],

        correct: 1,
      },

      {
        question: "Which component is used to hold the BIOS?",

        answers: ["Hard Disk", "RAM", "SSD", "ROM"],

        correct: 3,
      },

      {
        question: "Which of the following is an example of an embedded system?",

        answers: ["Washing machine", "Laptop", "Desktop", "Games console"],

        correct: 0,
      },

      {
        question: "The processor…",

        answers: [
          "Executes out instructions",
          "Is main memory",
          "Is secondary storage",
          "Is an input device",
        ],

        correct: 0,
      },

      {
        question: "What is held in cache?",

        answers: [
          "All the programming instructions",
          "Frequently used instructions and data",
          "Instructions that have been processed",
          "Data that hasn’t been used for a long time",
        ],

        correct: 1,
      },

      {
        question: "This is not an example of secondary storage",

        answers: [
          "Blu-Ray Drive/Disc",
          "Flash Memory",
          "Hard Disk Drive",
          "RAM",
        ],

        correct: 3,
      },

      {
        question: "Which processor speed is the fastest?",

        answers: ["16Hz", "100MHz", "4GHz", "300Hz"],

        correct: 2,
      },

      {
        question:
          "If the processing speed goes up from 1GHZ to 4GHZ, what is the potential effect on the performance of the computer?",

        answers: [
          "The maximum number of instructions executed per second doubles",
          "The maximum number of instructions executed per second quadruples",
          "The maximum number of instructions executed per second is halved",
          "The maximum number of instructions executed per second is quartered",
        ],

        correct: 1,
      },

      {
        question: "Which one is a characteristic of an embedded system?",

        answers: [
          "Has many cores",
          "Easy to update",
          "A single microprocessor including RAM, ROM and a CPU",
          "Anyone can program",
        ],

        correct: 2,
      },

      {
        question: "This is a primary storage:",

        answers: ["CPU", "GPU", "Pen drive", "RAM"],

        correct: 3,
      },
    ],

    memory: [
      {
        question:
          "What happens to the data in RAM when the electricity is turned off?",

        answers: [
          "The data from the memory is saved onto virtual memory",
          "The data from the memory is saved onto the hard disk",
          "The data from the memory is not saved",
          "The data from the memory is saved onto ROM",
        ],

        correct: 2,
      },

      {
        question: "Virtual memory is stored on/in the...",

        answers: ["RAM", "Cache", "Hard Disk", "ROM"],

        correct: 2,
      },

      {
        question: "What type of storage is a DVD ROM?",

        answers: [
          "Optical",
          "Magnetic",
          "Solid state",
          "It is not a storage device",
        ],

        correct: 0,
      },

      {
        question: "What type of storage is a USB memory stick?",

        answers: [
          "Optical",
          "Magnetic",
          "Solid state",
          "It is not a storage device",
        ],

        correct: 2,
      },

      {
        question:
          "Which of the following types of storage would usually have the faster read/write speed?",

        answers: [
          "Optical",
          "Magnetic",
          "Solid state",
          "They are all the same",
        ],

        correct: 2,
      },

      {
        question:
          "Which of the following types of storage is the most durable?",

        answers: [
          "Optical",
          "Magnetic",
          "Solid state",
          "They are all the same",
        ],

        correct: 2,
      },

      {
        question: "Why does a laptop need secondary storage?",

        answers: [
          "To reduce the amount of virtual memory it needs",
          "To store data, files and software for future use",
          "To make the laptop run faster",
          "To store data that the processor needs",
        ],

        correct: 1,
      },

      {
        question: "Which is the largest of these data capacities?",

        answers: ["2048 MB", "2 GB", "2050 MB", "100000 KB"],

        correct: 2,
      },

      {
        question:
          "Which formula can be used to estimate the file size of an image?",

        answers: [
          "number of pixels * number of bytes per pixel",
          "number of pixels",
          "number of pixels wide * number of pixels high * number of bytes per pixel",
          "number of pixels wide * number of bytes per pixel * number of pixels",
        ],

        correct: 2,
      },

      {
        question: "How many bits are there in a byte?",

        answers: ["8", "16", "1", "2"],

        correct: 0,
      },
    ],

    networks: [
      {
        question: "Which of these is a characteristic of a LAN?",

        answers: [
          "It covers a wide geographical area",
          "Computers are connected together using a leased line or a satellite",
          "Users can share files and peripherals",
          "Data can only be transmitted at a very slow rate",
        ],

        correct: 2,
      },

      {
        question: "Which of these statements is true?",

        answers: [
          "A client-server network has a central computer that provides services to the rest of the network",
          "A client-server network is cheap and easy to set up",
          "A client-server network cannot be used to share files",
          "Each computer on a client-server network is maintain separately",
        ],

        correct: 0,
      },

      {
        question: "Which of these is a function of a router?",

        answers: [
          "Forwards data packets along a network",
          "Corrects errors that are found in data packets",
          "A type of transmission media that provides the greatest bandwidth",
          "A server within a network",
        ],

        correct: 0,
      },

      {
        question:
          "Which of these components is usually built in to a laptop and is required to connect the computer to a network?",

        answers: [
          "Wireless Access Point",
          "Network Interface card",
          "Switch",
          "Hub",
        ],

        correct: 1,
      },

      {
        question: "What is meant by latency in the performance of a network?",

        answers: [
          "The time delay of data travelling from the source to the destination",
          "The maximum rate that data can be transferred at",
          "The number of errors that are found in a data packet after transmission",
          "The route a packet takes when it is being transmitted",
        ],

        correct: 0,
      },

      {
        question: "What is the role of a web server?",

        answers: [
          "To provide access to website data",
          "To control which devices on a network are able to access the Internet",
          "To request a specific web page from a web host and display the results",
          "To allow the user to create their own web pages",
        ],

        correct: 0,
      },

      {
        question: "Which of these is a correct definition of DNS?",

        answers: [
          "An internet service that is used to detect errors",
          "An internet service that stores data in large quantities for different companies",
          "An internet service that provides a messaging service for users to communicate",
          "An internet service that translates URLs into IP addresses",
        ],

        correct: 3,
      },

      {
        question:
          "What is a benefit of a wired network over a wireless network?",

        answers: [
          "Increased costs",
          "Technical Knowledge needed",
          "Faster Data Transfer Speeds",
          "Easier to hack",
        ],

        correct: 2,
      },

      {
        question: "What is a MAC address?",

        answers: [
          "A specific type of network computer",
          "A unique network address given to a device",
          "A list of all the devices on a network",
          "A type of protocol",
        ],

        correct: 1,
      },

      {
        question: "Which of these is a valid IPv4 address?",

        answers: [
          "192.168.2.256",
          "192.168.2.1000",
          "192.168.2.200",
          "192.168.2.328",
        ],

        correct: 2,
      },
    ],

    security: [
      {
        question: "An example of social engineering",

        answers: ["Viruses", "Worms", "Phishing", "Trojan horses"],

        correct: 2,
      },

      {
        question: "User access levels means that",

        answers: [
          "Anyone can update software to the latest version",
          "Passwords must be shared with the network manager",
          "Hackers can never gain access to the system",
          "Areas of a system can be limited to certain users only",
        ],

        correct: 3,
      },

      {
        question: "Trojan horse",

        answers: [
          "Does not need to attach to a program",
          "Can only occur when a computer is not connected to a network",
          "A type of social engineering",
          "Pretends to be a genuine program so that a user will run it",
        ],

        correct: 3,
      },

      {
        question:
          "A network of computers infected with malicious software and controlled as part of a group without the owners’ knowledge to commit a DDOS attack is called a :",

        answers: ["Virus", "Stuxnet", "Ring", "Botnet"],

        correct: 3,
      },

      {
        question:
          "A type of hacker who does so for good reasons, with permission",

        answers: ["Black hat", "Grey hat", "Red hat", "White hat"],

        correct: 3,
      },

      {
        question: "",

        answers: ["", "", "", ""],

        correct: 1,
      },

      {
        question: "",

        answers: ["", "", "", ""],

        correct: 1,
      },

      {
        question: "",

        answers: ["", "", "", ""],

        correct: 1,
      },

      {
        question: "",

        answers: ["", "", "", ""],

        correct: 1,
      },

      {
        question: "",

        answers: ["", "", "", ""],

        correct: 1,
      },
    ],

    impacts: [
      {
        question:
          "Which part of the CPU is responsible for making calculations?",

        answers: ["Program counter", "ALU", "Accumulator", "MAR"],

        correct: 1,
      },

      {
        question: "Which component is used to hold the BIOS?",

        answers: ["Hard Disk", "RAM", "SSD", "ROM"],

        correct: 3,
      },

      {
        question: "Which of the following is an example of an embedded system?",

        answers: ["Washing machine", "Laptop", "Desktop", "Games console"],

        correct: 0,
      },
    ],

    algorithms: [
      {
        question:
          "Which part of the CPU is responsible for making calculations?",

        answers: ["Program counter", "ALU", "Accumulator", "MAR"],

        correct: 1,
      },

      {
        question: "Which component is used to hold the BIOS?",

        answers: ["Hard Disk", "RAM", "SSD", "ROM"],

        correct: 3,
      },

      {
        question: "Which of the following is an example of an embedded system?",

        answers: ["Washing machine", "Laptop", "Desktop", "Games console"],

        correct: 0,
      },
    ],

    programming: [
      {
        question:
          "Which part of the CPU is responsible for making calculations?",

        answers: ["Program counter", "ALU", "Accumulator", "MAR"],

        correct: 1,
      },

      {
        question: "Which component is used to hold the BIOS?",

        answers: ["Hard Disk", "RAM", "SSD", "ROM"],

        correct: 3,
      },

      {
        question: "Which of the following is an example of an embedded system?",

        answers: ["Washing machine", "Laptop", "Desktop", "Games console"],

        correct: 0,
      },
    ],

    robustPrograms: [
      {
        question:
          "Which part of the CPU is responsible for making calculations?",

        answers: ["Program counter", "ALU", "Accumulator", "MAR"],

        correct: 1,
      },

      {
        question: "Which component is used to hold the BIOS?",

        answers: ["Hard Disk", "RAM", "SSD", "ROM"],

        correct: 3,
      },

      {
        question: "Which of the following is an example of an embedded system?",

        answers: ["Washing machine", "Laptop", "Desktop", "Games console"],

        correct: 0,
      },
    ],

    boolean: [
      {
        question:
          "Which part of the CPU is responsible for making calculations?",

        answers: ["Program counter", "ALU", "Accumulator", "MAR"],

        correct: 1,
      },

      {
        question: "Which component is used to hold the BIOS?",

        answers: ["Hard Disk", "RAM", "SSD", "ROM"],

        correct: 3,
      },

      {
        question: "Which of the following is an example of an embedded system?",

        answers: ["Washing machine", "Laptop", "Desktop", "Games console"],

        correct: 0,
      },
    ],

    languages: [
      {
        question:
          "Which part of the CPU is responsible for making calculations?",

        answers: ["Program counter", "ALU", "Accumulator", "MAR"],

        correct: 1,
      },

      {
        question: "Which component is used to hold the BIOS?",

        answers: ["Hard Disk", "RAM", "SSD", "ROM"],

        correct: 3,
      },

      {
        question: "Which of the following is an example of an embedded system?",

        answers: ["Washing machine", "Laptop", "Desktop", "Games console"],

        correct: 0,
      },
    ],
  },
];
