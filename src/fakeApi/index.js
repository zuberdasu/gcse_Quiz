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
          "Each computer on a client-server network is maintained separately",
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
        question: "A virus is a...",

        answers: [
          "program which runs hardware and software",
          "program that can replicate itself",
          "type of social engineering",
          "type of operating system stored in the BIOS",
        ],

        correct: 1,
      },

      {
        question: "Data travels across networks in",

        answers: ["Parcels", "Parts", "Bit rates", "Packets"],

        correct: 3,
      },

      {
        question:
          "An SQL injection attack would give the attacker unauthorised access to",

        answers: ["Network settings", "Emails", "A database", "Hardware"],

        correct: 2,
      },

      {
        question:
          "What process explores vulnerabilities of computer systems and reporting of this in to an organisation",

        answers: [
          "Penetration testing",
          "Packet Tracing",
          "Defragmentation",
          "System backup and restoration",
        ],

        correct: 0,
      },

      {
        question:
          "A user gaining access to a system or intercepting user data without permission would be breaching which law?",

        answers: [
          "Data Protection Act",
          "Regulation of Investigatory Powers Act (RIPA)",
          "Investigatory Powers Act",
          "Computer Misuse Act",
        ],

        correct: 3,
      },
    ],

    systems: [
      {
        question: "The following is not a type of systems software",

        answers: [
          "Device Drivers",
          "Utility Programs",
          "Applications",
          "Operating Systems",
        ],

        correct: 2,
      },
      {
        question:
          "Which type of User Interface is text based and requires the user to write commands?",

        answers: [
          "Command Line Interface",
          "Graphical User Interface",
          "Menu Interface",
          "No User Interface",
        ],

        correct: 0,
      },
      {
        question:
          "Operating Systems will allocate sections of RAM to the processes as part of: ",

        answers: [
          "Processor Management",
          "File Management",
          "Peripheral Management",
          "Memory Management",
        ],

        correct: 3,
      },
      {
        question:
          "This piece of software is used to control hardware devices and allow an operating system to make use of the hardware ",

        answers: [
          "Device Management",
          "Device Driver",
          "Device System",
          "Hardware Peripheral Device",
        ],

        correct: 1,
      },
      {
        question: "The following is an example of a peripheral",

        answers: ["Processor", "Main Memory (RAM)", "Hard Disk Drive", "ROM"],

        correct: 2,
      },
      {
        question:
          "Which Operating System function enables allocation of folders?",

        answers: [
          "User Interface",
          "Memory Management",
          "User Management",
          "File Management",
        ],

        correct: 3,
      },
      {
        question:
          "If an OS has the ability to run more than one program simultaneously what is this called?",

        answers: ["Multihandling", "Multitasking", "Multiuser", "Multitesting"],

        correct: 1,
      },
      {
        question: "To scramble data so that it is unreadable is a form of....?",

        answers: ["Compression", "Encryption", "Backing up", "Defragmentation"],

        correct: 1,
      },
      {
        question: "A fragmented hard drive is one in which.....?",

        answers: [
          "Program instructions and data are spread across tracks and sectors on the hard disk drive",
          "Programs and instructions are grouped together to occupy a continuous section of the hard disk drive",
          "A hard disk drive that has been dropped and broken into lots of pieces",
          "The hard disk drive is split into portions each representing a different logical drive",
        ],

        correct: 0,
      },
      {
        question: "Lossy Compression is.....?",

        answers: [
          "Appropriate for use on text",
          "When some original data is lost, and the original file cannot be re-created",
          "The original file can be re-created from the compressed file",
          "Turning the text into a format that only a reader with a key can decrypt it",
        ],

        correct: 1,
      },
    ],

    impacts: [
      {
        question:
          "What does the Data Protection Act give an individual the right to do? ",

        answers: [
          "A right to request the data an organisation holds about them without paying a fee",
          "A right to request the data an organisation holds on them for a fee",
          "A right to request the data an organisation holds about anyone without paying a fee",
          "A right to request the data an organisation holds about anyone for a fee",
        ],

        correct: 1,
      },
      {
        question:
          "Who is responsible for making sure the requirements of the Data Protection Act are upheld in an organisation?",

        answers: [
          "The Individual",
          "The Data Controller",
          "The Stakeholder",
          "The Computer Network",
        ],

        correct: 1,
      },
      {
        question: "Why are data centres an environmental issue?",

        answers: [
          "They are really large",
          "They consume a lot of power",
          "They are quite difficult to build",
          "They employ too many people",
        ],

        correct: 1,
      },
      {
        question: "Which legislation governs the act of hacking?",

        answers: [
          "The Freedom of Information Act",
          "The Data Protection Act",
          "The Creative Commons License",
          "The Computer Misuse Act",
        ],

        correct: 3,
      },
      {
        question:
          "Which categories would the use of in-game purchases fall under?",

        answers: ["Ethical", "Legal", "Cultural", "Environmental"],

        correct: 0,
      },
      {
        question: "Which of the following describes internet censorship?",

        answers: [
          "Access to foreign websites",
          "Monitoring gambling online",
          "Monitoring what people access on the internet",
          "Controlling what people can access on the internet",
        ],

        correct: 3,
      },
      {
        question: "Supplying malware is illegal under which legislation?",

        answers: [
          "The Computer Misuse Act",
          "Copyright Designs And Patents Act",
          "The Data Protection Act",
          "The Freedom Of Information Act",
        ],

        correct: 0,
      },
      {
        question:
          "A doctor’s surgery has medical records of all its patients. Which legislation does this apply to?",

        answers: [
          "The Computer Misuse Act",
          "Copyright Designs And Patents Act",
          "The Data Protection Act",
          "The Freedom Of Information Act",
        ],

        correct: 2,
      },
      {
        question: "Which of these best describes an Ethical issue?",

        answers: [
          "Issues which affect a particular group of people",
          "What is right and wrong in the eyes of the law",
          "What is deemed right or wrong by society",
          "Issues which impact the natural world",
        ],

        correct: 2,
      },
      {
        question:
          "Which of the following statements is true about open source software?",

        answers: [
          "The software cannot be copied, modified or shared",
          "The software can be copied, modified or shared",
          "There is normally a cost to pay for a licence to use the software",
          "The software is not available for public use",
        ],

        correct: 1,
      },
    ],

    algorithms: [
      {
        question: "Identify the description of a linear search",

        answers: [
          "Put the elements in order, start at the first item, check each item in turn",
          "Put the elements in order, compare to the middle value, split the list in order and repeat",
          "Elements do not need to be in order, check each item in turn",
          "Elements do not need to be in order, compare to the middle value, split the list in order and repeat",
        ],

        correct: 2,
      },
      {
        question: "Define the term abstraction within computational thinking:",

        answers: [
          "Adding together numbers",
          "Adding additional levels of detail to a problem to define it",
          "Performing multiple calculations on a list of variables",
          "Removing unnecessary details from a problem",
        ],

        correct: 3,
      },
      {
        question: "Which error may produce unexpected results in a program?",

        answers: ["Linear", "Sum", "Logic", "Syntax"],

        correct: 2,
      },
      {
        question:
          "A linear search is to be performed on the list - 12 6 8 1 3. How many comparisons would it take to find the number 1?",

        answers: ["1", "2", "3", "4"],

        correct: 3,
      },
      {
        question:
          "A binary search is to be performed on the numbers - 3 5 9 10 23. How many comparisons would it take to find the number 9?",

        answers: ["1", "2", "4", "9 cannot be found"],

        correct: 0,
      },
      {
        question:
          "A binary search is to be performed on the following numbers - 1 5 10 13 48 68 100 101. How many comparisons would it take to the find the number 101?",

        answers: ["1", "2", "3", "4"],

        correct: 3,
      },
      {
        question: "Which error may stop a program from compiling?",

        answers: [
          "Logic errors",
          "Input errors",
          "Run time errors",
          "Syntax errors",
        ],

        correct: 3,
      },
      {
        question: "Which term is part of computational thinking?",

        answers: [
          "Using a computer",
          "Developing an algorithm to solve a problem",
          "Making a computer use artificial intelligence",
          "Google is computational thinking",
        ],

        correct: 1,
      },
      {
        question:
          "Define the term decomposition within computational thinking.",

        answers: [
          "The breaking down of a program until it no longer exists",
          "The creation of music that can be played on a computer",
          "The breaking down of a problem into smaller problems",
          "Adding detail to a solution to make it more complex",
        ],

        correct: 2,
      },
      {
        question:
          "If an unsorted list contains 8 numbers how many passes of a bubble sort will be required to sort the list? ",

        answers: ["4", "7", "8", "9"],

        correct: 2,
      },
    ],

    programming: [
      {
        question: "Consider the following expression: a = b. This means",

        answers: [
          "a will always be equal to b",
          "b is being renamed into a",
          "The value of memory location a gets copied into memory location b",
          "The value of memory location b gets copied into memory location a",
        ],

        correct: 3,
      },
      {
        question: "Whole numbers are best stored using this data type",

        answers: ["Boolean", "Character", "Integer", "Real"],

        correct: 2,
      },
      {
        question: "Casting refers to",

        answers: [
          "Boolean algebra",
          "Rounding of reals",
          "Converting data to a different type",
          "Printing out of the program’s results",
        ],

        correct: 2,
      },
      {
        question: "This operator finds the remainder after integer division",

        answers: ["Integer division", "MOD", "Division", "Subtraction"],

        correct: 1,
      },
      {
        question: "Variable scope refers to",

        answers: [
          "Variable data type",
          "Variable identifier",
          "Logic errors associated with a variable",
          "The visibility of variables within a program ",
        ],

        correct: 3,
      },
      {
        question: "The main difference between procedures and functions is",

        answers: [
          "Procedures are usually longer and have more instructions",
          "Functions use parameter passing, while procedures don’t",
          "Functions are more difficult to debug",
          "Functions may return values, while procedures don’t",
        ],

        correct: 3,
      },
      {
        question:
          "Trying to use a local variable from outside its scope will cause",

        answers: [
          "A global variable to be overwritten by it",
          "A wrong procedure to run",
          "An error when compiling",
          "A logical error",
        ],

        correct: 2,
      },
      {
        question: "The purpose of SELECT * FROM Pupils WHERE Result >90 is",

        answers: [
          "To set every Pupil’s result to 90",
          "To retrieve all the fields from the ‘Pupils’ table but only those where the result is 90",
          "To retrieve all the fields from the ‘Pupils’ table but only those where the result is greater than 90",
          "To retrieve all the fields from the ‘Pupils’ table but only those where the name is greater than 90",
        ],

        correct: 2,
      },
      {
        question: "The following is not a valid file open mode:",

        answers: ["Delete", "Append", "Read", "Write"],

        correct: 0,
      },
      {
        question: "else if keyword is used when",

        answers: [
          "Selection needs to work with more than three choices",
          "Selection needs to work with more than two choices",
          "Using 'case select' statements",
          "Using conditional loops",
        ],

        correct: 1,
      },
    ],

    robustPrograms: [
      {
        question: "What does a range check do?",

        answers: [
          "Checks data is of the right type",
          "Checks the data is between set values",
          "Sorts numbers into ascending order",
          "Checks that the data is in the correct format",
        ],

        correct: 1,
      },
      {
        question: "What is an example of maintainability? ",

        answers: [
          "Checking programs work",
          "Making your code easy to follow, for example, with comments",
          "Testing a program for errors",
          "Training staff to use the program correctly",
        ],

        correct: 1,
      },
      {
        question: "Which of these is not a method for authenticating a user?",

        answers: [
          "Biometrics",
          "Password and Username",
          "Finger print scanner",
          "Encryption ",
        ],

        correct: 3,
      },
      {
        question: "How do sub programs improve maintainability?",

        answers: [
          "By returning a value",
          "Gives the program structure",
          "Carrying out a set of instructions",
          "Calling procedure name",
        ],

        correct: 1,
      },
      {
        question: "When is terminal testing carried out?",

        answers: [
          "Before you start",
          "After all code has been written",
          "During the project",
          "After the design section",
        ],

        correct: 1,
      },
      {
        question: "What is iterative testing?",

        answers: [
          "Testing completed after an error is found",
          "Random tests on a computer program",
          "Tests used to inform development",
          "Tests only completed once all code is written",
        ],

        correct: 2,
      },
      {
        question: "Which of these is not used in a test plan?",

        answers: [
          "Valid Data",
          "Boundary Data",
          "Erroneous Data",
          "Average Data",
        ],

        correct: 3,
      },
      {
        question: "What is the generic name given to an error found in code?",

        answers: ["Bugs", "Validation", "Syntax", "Compilers"],

        correct: 0,
      },
      {
        question: "What is a breakpoint?",

        answers: [
          "The point at which a program breaks",
          "A feature within an IDE to stop a program at a certain line",
          "The point in a program where an error is found",
          "The point at which the coder is frustrated with the program",
        ],

        correct: 1,
      },
      {
        question: "What is the purpose of testing?",

        answers: [
          "To identify errors",
          "To identify issues that may occur when a customer uses the program",
          "To test the security of the program",
          "All of the above",
        ],

        correct: 3,
      },
    ],

    boolean: [
      {
        question: "What is the output of an OR gate if the inputs are 1 and 0?",

        answers: ["0", "1", "OFF", "2"],

        correct: 1,
      },
      {
        question:
          "What is the output of an AND gate if the inputs are 1 and 0?",

        answers: ["ON", "2", "1", "0"],

        correct: 3,
      },
      {
        question: "What is the output of a NOT gate if the input is 0?",

        answers: ["1", "0", "OFF", "2"],

        correct: 0,
      },
      {
        question: "A NOT gate has",

        answers: [
          "Two inputs and one output",
          "One input and one output",
          "One input and two outputs",
          "Two inputs and two outputs",
        ],

        correct: 1,
      },
      {
        question: "An OR gate has",

        answers: [
          "Two inputs and one output",
          "One input and one output",
          "One input and two outputs",
          "Two inputs and two outputs",
        ],

        correct: 0,
      },
      {
        question: "The output of a logic gate can be in one of two",

        answers: ["Gates", "States", "Inputs", "Outputs"],

        correct: 1,
      },
      {
        question: "A logic state can only be",

        answers: ["On or 1", "Off or 0", "1 or 0", "In and Out"],

        correct: 2,
      },
      {
        question: "The output of this gate is only 1 when both inputs are 1",

        answers: ["OR", "NOT", "NAND", "AND"],

        correct: 3,
      },
      {
        question: "A NAND gate is the combination of which two gates",

        answers: ["OR and AND", "AND and NOT", "NOT and OR", "OR and NAND"],

        correct: 1,
      },
      {
        question: "A NOR gate is the combination of which two gates",

        answers: ["OR and AND", "AND and NOT", "NOT and OR", "OR and NAND"],

        correct: 2,
      },
    ],

    languages: [
      {
        question:
          "Machine code is used in which generation of a programming language?",

        answers: [
          "1st Generation",
          "2nd Generation",
          "3rd Generation",
          "4th Generation",
        ],

        correct: 0,
      },
      {
        question: "Which of these is an example of a low-level language?",

        answers: ["Delphi", "LMC", "Basic", "C#"],

        correct: 1,
      },
      {
        question:
          "An advantage of programming in a high-level programming language is",

        answers: [
          "Uses natural language and so can be easier to read/understand",
          "Useful for device drivers",
          "The final file size is smaller",
          "Programs run more quickly at runtime",
        ],

        correct: 0,
      },
      {
        question:
          "What sort of relationship are low-level languages said to have with high-level languages?",

        answers: [
          "One to One (One high level instruction is equivalent to one low level)",
          "One to Two (For every high level instruction there are two low level instructions)",
          "One to many (For every high level instruction there are many low level instructions)",
          "Many to One (Many high level instructions translate into one low level instruction)",
        ],

        correct: 2,
      },
      {
        question: "What is meant by source code?",

        answers: [
          "The final executable program",
          "The code written by the programmer",
          "The additional information about errors",
          "Code relating to sources of information on the Internet",
        ],

        correct: 1,
      },
      {
        question: "Nearly all IDEs will have this to manipulate source code",

        answers: ["Text Editor", "Debugger", "Compiler"],

        correct: 0,
      },
      {
        question: "Helps identify and fix errors in code ",

        answers: ["Text Editor", "Debugger", "Compiler"],

        correct: 1,
      },
      {
        question:
          "Translates source code from a high-level language to a lower level language",

        answers: ["Text Editor", "Debugger", "Compiler"],

        correct: 2,
      },
      {
        question: "Which one would I be using if I had syntax highlighting? ",

        answers: ["Text Editor", "Debugger", "Compiler"],

        correct: 0,
      },
      {
        question:
          "Which feature translates the source code in the code editor?",

        answers: ["Text Editor", "Debugger", "Compiler"],

        correct: 2,
      },
    ],
  },
];
