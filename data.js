const PROBLEMS = {
  beginner: [
    // ── Part 1: Printing ──────────────────────────────────────────────────────
    {
      id: "b1",
      title: "Say Hello",
      description: "Print 'Hello, World!' to the screen.",
      hint: "Use the print() function with the exact text inside quotes.",
      expectedOutput: "Hello, World!"
    },
    {
      id: "b2",
      title: "Print a Number",
      description: "Print the number 42.",
      hint: "Numbers don't need quotes: print(42)",
      expectedOutput: "42"
    },
    {
      id: "b3",
      title: "Two Lines",
      description: "Print 'Hello' on the first line and 'World' on the second line.",
      hint: "Call print() twice — once for each line.",
      expectedOutput: "Hello\nWorld"
    },
    // ── Part 2: Variables ─────────────────────────────────────────────────────
    {
      id: "b4",
      title: "Number Variable",
      description: "Create a variable called score with the value 100 and print it.",
      hint: "score = 100, then print(score)",
      expectedOutput: "100"
    },
    {
      id: "b5",
      title: "String Variable",
      description: "Create a variable called greeting with the value 'Hi there!' and print it.",
      expectedOutput: "Hi there!"
    },
    {
      id: "b6",
      title: "Variable Math",
      description: "Create variables a = 15 and b = 25, then print their sum.",
      hint: "print(a + b)",
      expectedOutput: "40"
    },
    {
      id: "b7",
      title: "Update a Variable",
      description: "Create a variable x = 5. Then add 3 to it and print the new value.",
      hint: "x = x + 3",
      expectedOutput: "8"
    },
    // ── Part 3: Strings ───────────────────────────────────────────────────────
    {
      id: "b8",
      title: "String Concatenation",
      description: "Create two variables: first = 'Hello' and second = 'World'. Print them joined with a space between.",
      hint: "Use + to join strings: first + ' ' + second",
      expectedOutput: "Hello World"
    },
    {
      id: "b9",
      title: "Repeat a String",
      description: "Print the word 'ha' repeated 3 times (no spaces).",
      hint: "You can multiply a string: 'ha' * 3",
      expectedOutput: "hahaha"
    },
    {
      id: "b10",
      title: "String Length",
      description: "Print the number of characters in the word 'Python'.",
      hint: "Use the len() function.",
      expectedOutput: "6",
      requiredKeywords: ["len("]
    },
    {
      id: "b11",
      title: "First Character",
      description: "Print the first character of the string 'Python'.",
      hint: "Use index 0: 'Python'[0]",
      expectedOutput: "P"
    },
    {
      id: "b12",
      title: "Last Character",
      description: "Print the last character of the string 'Python'.",
      hint: "Use index -1: 'Python'[-1]",
      expectedOutput: "n"
    },
    {
      id: "b13",
      title: "Slicing",
      description: "Print the first 3 characters of the string 'Python'.",
      hint: "Use slicing: 'Python'[0:3]",
      expectedOutput: "Pyt"
    },
    // ── Part 4: String Methods ────────────────────────────────────────────────
    {
      id: "b14",
      title: "Uppercase",
      description: "Print the word 'python' in all uppercase letters.",
      hint: "Strings have an .upper() method.",
      expectedOutput: "PYTHON",
      requiredKeywords: [".upper"]
    },
    {
      id: "b15",
      title: "Lowercase",
      description: "Print the word 'HELLO' in all lowercase letters.",
      hint: "Strings have a .lower() method.",
      expectedOutput: "hello",
      requiredKeywords: [".lower"]
    },
    {
      id: "b16",
      title: "Strip Whitespace",
      description: "Print the string '  hello  ' with the leading and trailing spaces removed.",
      hint: "Strings have a .strip() method.",
      expectedOutput: "hello",
      requiredKeywords: [".strip"]
    },
    {
      id: "b17",
      title: "Replace Word",
      description: "Start with the string 'Hello World'. Replace 'World' with 'Python' and print the result.",
      hint: "Strings have a .replace(old, new) method.",
      expectedOutput: "Hello Python",
      requiredKeywords: [".replace"]
    },
    {
      id: "b18",
      title: "f-string",
      description: "Create a variable age = 12. Use an f-string to print: I am 12 years old",
      hint: "f\"I am {age} years old\"",
      expectedOutput: "I am 12 years old",
      requiredKeywords: ["{age}"]
    },
    // ── Part 5: Arithmetic ────────────────────────────────────────────────────
    {
      id: "b19",
      title: "Addition",
      description: "Print the result of adding 7 and 5.",
      expectedOutput: "12"
    },
    {
      id: "b20",
      title: "Subtraction",
      description: "Print the result of 20 minus 8.",
      expectedOutput: "12"
    },
    {
      id: "b21",
      title: "Multiplication",
      description: "Print the result of 6 multiplied by 7.",
      expectedOutput: "42"
    },
    {
      id: "b22",
      title: "Division",
      description: "Print the result of dividing 10 by 4.",
      hint: "Use the / operator. The result will be a decimal.",
      expectedOutput: "2.5"
    },
    {
      id: "b23",
      title: "Integer Division",
      description: "Print the result of dividing 17 by 3 using integer (floor) division — no decimals, just the whole number part.",
      hint: "Use the // operator.",
      expectedOutput: "5",
      requiredKeywords: ["//"]
    },
    {
      id: "b24",
      title: "Remainder",
      description: "Print the remainder when 17 is divided by 5.",
      hint: "Use the % (modulo) operator.",
      expectedOutput: "2",
      requiredKeywords: ["%"]
    },
    {
      id: "b25",
      title: "Power",
      description: "Print 2 to the power of 10.",
      hint: "Use the ** operator: 2 ** 10",
      expectedOutput: "1024",
      requiredKeywords: ["**"]
    },
    {
      id: "b26",
      title: "Order of Operations",
      description: "Print the result of (10 + 5) * 2 - 3.",
      hint: "Python follows standard math order: parentheses first.",
      expectedOutput: "27"
    },
    // ── Part 6: Built-in Math Functions ──────────────────────────────────────
    {
      id: "b27",
      title: "Absolute Value",
      description: "Print the absolute value of -42.",
      hint: "Use the abs() function.",
      expectedOutput: "42",
      requiredKeywords: ["abs("]
    },
    {
      id: "b28",
      title: "Round a Number",
      description: "Print 3.7 rounded to the nearest whole number.",
      hint: "Use the round() function.",
      expectedOutput: "4",
      requiredKeywords: ["round("]
    },
    {
      id: "b29",
      title: "Maximum of Three",
      description: "Print the largest of the numbers 3, 7, and 2.",
      hint: "Use the max() function.",
      expectedOutput: "7",
      requiredKeywords: ["max("]
    },
    {
      id: "b30",
      title: "Minimum of Three",
      description: "Print the smallest of the numbers 3, 7, and 2.",
      hint: "Use the min() function.",
      expectedOutput: "2",
      requiredKeywords: ["min("]
    },
    // ── Part 7: Types & Conversion ────────────────────────────────────────────
    {
      id: "b31",
      title: "Type of Integer",
      description: "Print the type of the value 42.",
      hint: "Use print(type(42))",
      expectedOutput: "<class 'int'>"
    },
    {
      id: "b32",
      title: "Type of Float",
      description: "Print the type of the value 3.14.",
      hint: "Use print(type(3.14))",
      expectedOutput: "<class 'float'>"
    },
    {
      id: "b33",
      title: "Type of String",
      description: "Print the type of the value 'hello'.",
      hint: "Use print(type('hello'))",
      expectedOutput: "<class 'str'>"
    },
    {
      id: "b34",
      title: "String to Integer",
      description: "Convert the string '25' to an integer, add 5 to it, and print the result.",
      hint: "Use int() to convert: int('25')",
      expectedOutput: "30",
      requiredKeywords: ["int("]
    },
    {
      id: "b35",
      title: "Integer to Float",
      description: "Convert the integer 5 to a float and print it.",
      hint: "Use float() to convert: float(5)",
      expectedOutput: "5.0",
      requiredKeywords: ["float("]
    },
    {
      id: "b36",
      title: "Number to String",
      description: "Convert the number 42 to a string, join it with '!' and print the result.",
      hint: "Use str() to convert: str(42) + '!'",
      expectedOutput: "42!",
      requiredKeywords: ["str("]
    },
    // ── Part 8: Lists Introduction ────────────────────────────────────────────
    {
      id: "b37",
      title: "Create a List",
      description: "Create a list called fruits containing 'apple', 'banana', and 'cherry'. Print the list.",
      hint: "fruits = ['apple', 'banana', 'cherry']",
      expectedOutput: "['apple', 'banana', 'cherry']"
    },
    {
      id: "b38",
      title: "List Index",
      description: "Create the list nums = [10, 20, 30, 40, 50] and print the third item.",
      hint: "List indexes start at 0, so the third item is index 2: nums[2]",
      expectedOutput: "30"
    },
    {
      id: "b39",
      title: "Last List Item",
      description: "Create the list nums = [10, 20, 30, 40, 50] and print the last item using a negative index.",
      hint: "Use index -1 to get the last item: nums[-1]",
      expectedOutput: "50"
    },
    {
      id: "b40",
      title: "Length of a List",
      description: "Print the number of items in the list [10, 20, 30, 40, 50].",
      hint: "Use len().",
      expectedOutput: "5",
      requiredKeywords: ["len("]
    }
  ],
  intermediate: [
    // ── Loops ─────────────────────────────────────────────────────────────────
    {
      id: "i1",
      title: "Count to Five",
      description: "Print the numbers 1 to 5, each on a new line.",
      hint: "Use a for loop with range().",
      expectedOutput: "1\n2\n3\n4\n5"
    },
    {
      id: "i2",
      title: "Count Down",
      description: "Print numbers from 5 down to 1, each on a new line.",
      hint: "Use range(5, 0, -1).",
      expectedOutput: "5\n4\n3\n2\n1"
    },
    {
      id: "i3",
      title: "Even Numbers",
      description: "Print all even numbers from 2 to 10, each on a new line.",
      hint: "Use range(2, 11, 2) or check with % 2.",
      expectedOutput: "2\n4\n6\n8\n10"
    },
    {
      id: "i4",
      title: "Multiplication Table",
      description: "Print the 3 times table from 3×1 to 3×10, one result per line.",
      hint: "for i in range(1, 11): print(3 * i)",
      expectedOutput: "3\n6\n9\n12\n15\n18\n21\n24\n27\n30"
    },
    {
      id: "i5",
      title: "Sum of 1 to 100",
      description: "Print the sum of all integers from 1 to 100.",
      hint: "Use sum(range(1, 101)) or a loop.",
      expectedOutput: "5050"
    },
    {
      id: "i6",
      title: "While Loop",
      description: "Use a while loop to print the numbers 1 to 5, each on a new line.",
      hint: "Start with n = 1, loop while n <= 5.",
      expectedOutput: "1\n2\n3\n4\n5",
      requiredKeywords: ["while"]
    },
    {
      id: "i7",
      title: "Star Triangle",
      description: "Print a triangle of stars with 5 rows: row 1 has 1 star, row 2 has 2, ..., row 5 has 5.",
      hint: "for i in range(1, 6): print('*' * i)",
      expectedOutput: "*\n**\n***\n****\n*****"
    },
    {
      id: "i8",
      title: "FizzBuzz",
      description: "Print numbers 1 to 15. For multiples of 3 print 'Fizz', for multiples of 5 print 'Buzz', for multiples of both print 'FizzBuzz'.",
      expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz"
    },
    // ── Lists ─────────────────────────────────────────────────────────────────
    {
      id: "i9",
      title: "List Append",
      description: "Start with an empty list, append the numbers 1, 2, and 3, then print the list.",
      expectedOutput: "[1, 2, 3]"
    },
    {
      id: "i10",
      title: "Sum a List",
      description: "Create the list [1, 2, 3, 4, 5] and print its sum.",
      hint: "Use the sum() function.",
      expectedOutput: "15",
      requiredKeywords: ["sum("]
    },
    {
      id: "i11",
      title: "List Maximum",
      description: "Print the largest number in the list [3, 1, 4, 1, 5, 9, 2, 6].",
      hint: "Use the max() function.",
      expectedOutput: "9",
      requiredKeywords: ["max("]
    },
    {
      id: "i12",
      title: "Reverse a List",
      description: "Print the list [1, 2, 3, 4, 5] in reverse order.",
      hint: "Use slicing: my_list[::-1]",
      expectedOutput: "[5, 4, 3, 2, 1]"
    },
    {
      id: "i13",
      title: "List Slicing",
      description: "Print the first 3 items of the list [10, 20, 30, 40, 50].",
      hint: "Use slicing: my_list[:3]",
      expectedOutput: "[10, 20, 30]"
    },
    {
      id: "i14",
      title: "Remove Duplicates",
      description: "Given the list [1, 2, 2, 3, 3, 3, 4], print a sorted list with duplicates removed.",
      hint: "Convert to a set, then back to a sorted list.",
      expectedOutput: "[1, 2, 3, 4]",
      requiredKeywords: ["set("]
    },
    {
      id: "i15",
      title: "List of Squares",
      description: "Use a list comprehension to create a list of squares of 1 to 5 and print it.",
      hint: "[x**2 for x in range(1, 6)]",
      expectedOutput: "[1, 4, 9, 16, 25]"
    },
    // ── Functions ─────────────────────────────────────────────────────────────
    {
      id: "i16",
      title: "Double a Number",
      description: "Write a function called double that returns a number multiplied by 2. Print double(6).",
      hint: "def double(n): return n * 2",
      expectedOutput: "12",
      requiredKeywords: ["def "]
    },
    {
      id: "i17",
      title: "Factorial",
      description: "Write a function called factorial that returns n! (n factorial). Print factorial(5).",
      hint: "Use a loop: result = 1, multiply by each number up to n.",
      expectedOutput: "120",
      requiredKeywords: ["def "]
    },
    {
      id: "i18",
      title: "Is Even",
      description: "Write a function called is_even that returns True if a number is even, False otherwise. Print is_even(4) then is_even(7), each on a new line.",
      hint: "Use the % operator: n % 2 == 0",
      expectedOutput: "True\nFalse",
      requiredKeywords: ["def "]
    },
    {
      id: "i19",
      title: "Default Argument",
      description: "Write a function greet(name='World') that prints 'Hello, ' followed by the name and '!'. Call greet('Alice').",
      hint: "def greet(name='World'): print(f'Hello, {name}!')",
      expectedOutput: "Hello, Alice!",
      requiredKeywords: ["def "]
    },
    {
      id: "i20",
      title: "Sum of Digits",
      description: "Write a function sum_digits(n) that returns the sum of digits of n. Print sum_digits(123).",
      hint: "Convert to string, then sum each digit as int.",
      expectedOutput: "6",
      requiredKeywords: ["def "]
    },
    // ── Conditionals ──────────────────────────────────────────────────────────
    {
      id: "i21",
      title: "Positive Check",
      description: "Print 'positive' if the number 8 is greater than 0, otherwise print 'not positive'.",
      expectedOutput: "positive"
    },
    {
      id: "i22",
      title: "Grade",
      description: "Given score = 75, print 'A' if score >= 90, 'B' if >= 80, 'C' if >= 70, otherwise 'F'.",
      expectedOutput: "C"
    },
    {
      id: "i23",
      title: "Is Palindrome",
      description: "Check if the string 'racecar' reads the same forwards and backwards. Print True or False.",
      hint: "Compare the string to its reverse: s == s[::-1]",
      expectedOutput: "True"
    },
    // ── Strings ───────────────────────────────────────────────────────────────
    {
      id: "i24",
      title: "Count Vowels",
      description: "Count and print the number of vowels (a, e, i, o, u) in the string 'hello world'.",
      hint: "Loop through each character and check if it's in 'aeiou'.",
      expectedOutput: "3"
    },
    {
      id: "i25",
      title: "Join Words",
      description: "Join the list ['Hello', 'World', 'from', 'Python'] into a single string with spaces between words and print it.",
      hint: "Use ' '.join(my_list)",
      expectedOutput: "Hello World from Python",
      requiredKeywords: [".join("]
    },
    {
      id: "i26",
      title: "Word Count",
      description: "Print the number of words in the sentence 'the quick brown fox jumps over the lazy dog'.",
      hint: "Use .split() and len().",
      expectedOutput: "9",
      requiredKeywords: [".split(", "len("]
    },
    // ── Algorithms ────────────────────────────────────────────────────────────
    {
      id: "i27",
      title: "Fibonacci Sequence",
      description: "Print the first 8 Fibonacci numbers, each on a new line. Start with 0 and 1.",
      hint: "a, b = 0, 1. Each step: a, b = b, a + b.",
      expectedOutput: "0\n1\n1\n2\n3\n5\n8\n13"
    },
    {
      id: "i28",
      title: "Count Divisible",
      description: "Print how many numbers from 1 to 50 are divisible by 7.",
      hint: "Use a loop and check n % 7 == 0.",
      expectedOutput: "7"
    },
    {
      id: "i29",
      title: "Sort a List",
      description: "Print the list [3, 1, 4, 1, 5, 9, 2, 6] sorted in ascending order.",
      hint: "Use sorted().",
      expectedOutput: "[1, 1, 2, 3, 4, 5, 6, 9]",
      requiredKeywords: ["sorted("]
    },
    {
      id: "i30",
      title: "Nested Loop — Times Table",
      description: "Print the multiplication table for 2 and 3. Each line: '2 x 1 = 2', '2 x 2 = 4', ..., '3 x 5 = 15' (2×1 through 2×5, then 3×1 through 3×5).",
      hint: "Use a nested for loop: for n in [2,3]: for i in range(1,6):",
      expectedOutput: "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15"
    }
  ],
  advanced: [
    {
      id: "a1",
      title: "Dictionary Lookup",
      description: "Create a dictionary with keys 'name' and 'age' set to 'Bob' and 12. Print the value of 'name'.",
      expectedOutput: "Bob"
    },
    {
      id: "a2",
      title: "List Comprehension",
      description: "Use a list comprehension to create a list of squares of numbers 1 to 5 and print it.",
      hint: "[x**2 for x in ...]",
      expectedOutput: "[1, 4, 9, 16, 25]"
    },
    {
      id: "a3",
      title: "Simple Class",
      description: "Create a class called Dog with a method speak() that returns 'Woof!'. Create an instance and print dog.speak().",
      expectedOutput: "Woof!",
      requiredKeywords: ["class "]
    },
    {
      id: "a4",
      title: "Handle an Error",
      description: "Use try/except to attempt int('abc') and print 'error caught' if it fails.",
      expectedOutput: "error caught",
      requiredKeywords: ["try"]
    },
    {
      id: "a5",
      title: "Filter a List",
      description: "From the list [1,2,3,4,5,6], print a new list containing only numbers greater than 3.",
      hint: "Use a list comprehension with a condition.",
      expectedOutput: "[4, 5, 6]"
    },
    {
      id: "a6",
      title: "Count Words",
      description: "Print the number of words in the string 'the quick brown fox'.",
      hint: "Use the .split() method and len().",
      expectedOutput: "4",
      requiredKeywords: [".split(", "len("]
    },
    {
      id: "a7",
      title: "Reverse a String",
      description: "Print the string 'Python' reversed.",
      hint: "Use slicing: string[::-1]",
      expectedOutput: "nohtyP"
    },
    {
      id: "a8",
      title: "Dictionary Keys",
      description: "Create a dictionary {'a': 1, 'b': 2, 'c': 3} and print a sorted list of its keys.",
      expectedOutput: "['a', 'b', 'c']",
      requiredKeywords: ["sorted("]
    }
  ]
};

const TUTORIAL = [
  {
    id: "t1",
    title: "Your First Line of Code",
    explanation: {
      what: "print() is a built-in function that displays output on the screen. Anything you put inside the parentheses gets shown.",
      when: "Any time you want to see a result, show a message, or check what a value is.",
      example: `print("Hello, Python!")\nprint(42)`
    },
    questions: [
      { id: "t1_1", description: "Print Hello, Python! to the screen.", expectedOutput: "Hello, Python!" },
      { id: "t1_2", description: "Print the number 42.", expectedOutput: "42" },
      { id: "t1_3", description: "Print Hello on the first line and World on the second line.", expectedOutput: "Hello\nWorld" }
    ]
  },
  {
    id: "t2",
    title: "Numbers and Math",
    explanation: {
      what: "Python can do arithmetic using + (add), - (subtract), * (multiply), and / (divide). Python follows standard math order: parentheses first, then * and /, then + and -.",
      when: "Any time you need to calculate something — scores, distances, prices, ages.",
      example: `print(10 + 5)     # 15\nprint(3 * 4)      # 12\nprint(10 / 4)     # 2.5\nprint(3 * 4 + 2)  # 14`
    },
    questions: [
      { id: "t2_1", description: "Print the result of 3 * 4 + 2.", expectedOutput: "14" },
      { id: "t2_2", description: "Print the result of 10 - 3.", expectedOutput: "7" },
      { id: "t2_3", description: "Print the result of 15 / 2.", expectedOutput: "7.5" }
    ]
  },
  {
    id: "t3",
    title: "Variables",
    explanation: {
      what: "A variable is a named container that stores a value. You create one with: name = value.\n\nNaming rules:\n• Use only letters, digits, and underscores\n• Cannot start with a digit (2fast is invalid)\n• No spaces or special characters\n• Case-sensitive: name and Name are different variables\n• Cannot use reserved words: if, for, while, True, False, and, or, not, in, return",
      when: "Any time you want to save a value and use it again later — like storing a player name, a score, or a calculation result.",
      example: `name = "Alex"\nscore = 100\nprint(name)      # Alex\nprint(score)     # 100\n\n# Case matters!\nmy_score = 50\nMyScore = 99\nprint(my_score)  # 50`
    },
    questions: [
      { id: "t3_1", description: "Create a variable called name with the value \"Alex\" and print it.", expectedOutput: "Alex" },
      { id: "t3_2", description: "Create my_score = 100 and MyScore = 200. Print my_score.", expectedOutput: "100" },
      { id: "t3_3", description: "Create x = 5 and y = 3, then print their sum.", expectedOutput: "8" }
    ]
  },
  {
    id: "t4",
    title: "Data Types",
    explanation: {
      what: "Every value in Python has a type. The four basic types are:\n• int — whole numbers like 42\n• float — decimal numbers like 3.14\n• str — text in quotes like \"hello\"\n• bool — True or False\n\nUse type() to check what type something is.",
      when: "When you need to know what kind of value you are working with — especially before doing math or joining values together.",
      example: `print(type(42))       # <class 'int'>\nprint(type(3.14))     # <class 'float'>\nprint(type("hello"))  # <class 'str'>\nprint(type(True))     # <class 'bool'>`
    },
    questions: [
      { id: "t4_1", description: "Print the type of 42.", expectedOutput: "<class 'int'>" },
      { id: "t4_2", description: "Print the type of 3.14.", expectedOutput: "<class 'float'>" },
      { id: "t4_3", description: "Print the type of \"hello\".", expectedOutput: "<class 'str'>" }
    ]
  },
  {
    id: "t5",
    title: "Type Conversion",
    explanation: {
      what: "You can convert a value from one type to another:\n• int() converts to a whole number\n• float() converts to a decimal\n• str() converts to text",
      when: "When you have text that contains a number and need to do math with it, or when you need to join a number with a string.",
      example: `num = int("5")      # "5" becomes 5\ndec = float(3)      # 3 becomes 3.0\ntxt = str(42)       # 42 becomes "42"\nprint(num + 10)     # 15\nprint(txt + "!")    # 42!`
    },
    questions: [
      { id: "t5_1", description: "Convert the string \"7\" to an integer, add 3, and print the result.", expectedOutput: "10" },
      { id: "t5_2", description: "Convert the integer 5 to a float and print it.", expectedOutput: "5.0" },
      { id: "t5_3", description: "Convert the number 42 to a string, join it with \"!\", and print the result.", expectedOutput: "42!" }
    ]
  },
  {
    id: "t6",
    title: "Text (Strings)",
    explanation: {
      what: "A string is text wrapped in quotes (single or double — both work). You can:\n• Join two strings with + (concatenation)\n• Repeat a string with * and a number\n• Get its length with len()",
      when: "Any time you work with words, names, sentences, or messages.",
      example: `greeting = "Hello" + " " + "World"\nprint(greeting)       # Hello World\nprint("ha" * 3)       # hahaha\nprint(len("Python"))  # 6`
    },
    questions: [
      { id: "t6_1", description: "Create first = \"Hello\" and second = \"World\". Print them joined with a space between.", expectedOutput: "Hello World" },
      { id: "t6_2", description: "Print the word \"ha\" repeated 3 times (no spaces).", expectedOutput: "hahaha" },
      { id: "t6_3", description: "Print the number of characters in the word \"Python\".", expectedOutput: "6" }
    ]
  },
  {
    id: "t7",
    title: "True and False",
    explanation: {
      what: "A bool is a value that is either True or False. Comparison operators produce bools:\n• == equal to\n• != not equal to\n• > greater than\n• < less than\n• >= greater than or equal\n• <= less than or equal",
      when: "Any time you need to check a condition — is the score high enough? Are two values equal? Is a number positive?",
      example: `print(10 > 3)    # True\nprint(5 == 5)    # True\nprint(4 != 4)    # False\nprint(7 >= 7)    # True`
    },
    questions: [
      { id: "t7_1", description: "Print whether 10 > 3.", expectedOutput: "True" },
      { id: "t7_2", description: "Print whether 5 == 5.", expectedOutput: "True" },
      { id: "t7_3", description: "Print whether 7 != 7.", expectedOutput: "False" }
    ]
  },
  {
    id: "t8",
    title: "And, Or, Not",
    explanation: {
      what: "Logical operators combine boolean values:\n• and — both conditions must be True\n• or — at least one must be True\n• not — flips True to False and False to True",
      when: "When a decision depends on more than one condition — like checking that someone is both old enough and has a ticket.",
      example: `age = 9\nprint(age > 5 and age < 13)  # True\nprint(age > 10 or age < 5)   # False\nprint(not True)               # False\nprint(not False)              # True`
    },
    questions: [
      { id: "t8_1", description: "Given age = 9, print whether age > 5 and age < 13.", expectedOutput: "True" },
      { id: "t8_2", description: "Given x = 3, print whether x > 10 or x < 5.", expectedOutput: "True" },
      { id: "t8_3", description: "Given raining = False, print not raining.", expectedOutput: "True" }
    ]
  },
  {
    id: "t9",
    title: "Making Decisions",
    explanation: {
      what: "An if statement runs a block of code only when a condition is True. else runs when the condition is False. The code inside the block must be indented (4 spaces or 1 tab).",
      when: "Any time your program needs to behave differently depending on a value — show different messages for different ages, handle correct and incorrect answers.",
      example: `age = 10\nif age < 13:\n    print("child")\nelse:\n    print("teen")`
    },
    questions: [
      { id: "t9_1", description: "Given age = 10, print \"child\" if age is less than 13, otherwise print \"teen\".", expectedOutput: "child" },
      { id: "t9_2", description: "Given num = 5, print \"big\" if num is greater than 3, otherwise print \"small\".", expectedOutput: "big" },
      { id: "t9_3", description: "Given temperature = 35, print \"hot\" if temperature is greater than 30, otherwise print \"cool\".", expectedOutput: "hot" }
    ]
  },
  {
    id: "t10",
    title: "More Conditions",
    explanation: {
      what: "elif (short for 'else if') lets you check multiple conditions in sequence. Python checks each one in order and runs the first block that matches. If none match, else runs.",
      when: "When there are more than two possible outcomes — like assigning letter grades A, B, C, or F.",
      example: `score = 75\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")`
    },
    questions: [
      { id: "t10_1", description: "Given score = 75, print \"A\" if >= 90, \"B\" if >= 80, \"C\" if >= 70, otherwise \"F\".", expectedOutput: "C" },
      { id: "t10_2", description: "Given hour = 14, print \"morning\" if hour < 12, \"afternoon\" if hour < 18, otherwise \"evening\".", expectedOutput: "afternoon" },
      { id: "t10_3", description: "Given num = 0, print \"positive\" if > 0, \"negative\" if < 0, otherwise \"zero\".", expectedOutput: "zero" }
    ]
  },
  {
    id: "t11",
    title: "Repeating Things",
    explanation: {
      what: "A for loop repeats a block of code for each value in a sequence. range(n) gives numbers from 0 up to (but not including) n. range(1, n+1) gives 1 through n.",
      when: "Any time you need to do something multiple times — printing numbers, adding up a total, building a pattern.",
      example: `for i in range(3):\n    print(i)       # prints 0, then 1, then 2 (one per line)\n\nfor i in range(1, 6):\n    print(i)       # prints 1, then 2, then 3, then 4, then 5`
    },
    questions: [
      { id: "t11_1", description: "Print the numbers 1 to 5, each on a new line.", expectedOutput: "1\n2\n3\n4\n5" },
      { id: "t11_2", description: "Print \"hello\" 3 times, each on a new line.", expectedOutput: "hello\nhello\nhello" },
      { id: "t11_3", description: "Use a loop to calculate and print the sum of numbers 1 to 5.", expectedOutput: "15" }
    ]
  },
  {
    id: "t12",
    title: "Controlling the Range",
    explanation: {
      what: "range(x, y) starts at x and stops before y. range(x, y, z) also sets the step — how much to add each time. Use a negative step to count down.",
      when: "When you need to loop over a specific span — starting mid-way, stepping by twos, or counting backwards.",
      example: `for i in range(3, 8):      # prints 3, 4, 5, 6, 7 (one per line)\n    print(i)\n\nfor i in range(0, 11, 2):  # prints 0, 2, 4, 6, 8, 10 (one per line)\n    print(i)\n\nfor i in range(5, 0, -1):  # prints 5, 4, 3, 2, 1 (one per line)\n    print(i)`
    },
    questions: [
      { id: "t12_1", description: "Print the numbers from 3 to 7, each on a new line.", expectedOutput: "3\n4\n5\n6\n7" },
      { id: "t12_2", description: "Print the even numbers from 2 to 10, each on a new line.", expectedOutput: "2\n4\n6\n8\n10" },
      { id: "t12_3", description: "Print the numbers counting down from 5 to 1, each on a new line.", expectedOutput: "5\n4\n3\n2\n1" }
    ]
  },
  {
    id: "t13",
    title: "Lists",
    explanation: {
      what: "A list stores multiple values in one variable, in order, inside square brackets [ ]. Items are accessed by their index (position) starting at 0. len() tells you how many items are in the list.",
      when: "Any time you have multiple related values to keep together — a list of names, scores, colours, or anything.",
      example: `fruits = ["apple", "banana", "cherry"]\nprint(fruits)       # ['apple', 'banana', 'cherry']\nprint(fruits[0])    # apple  (first item)\nprint(fruits[1])    # banana (second item)\nprint(len(fruits))  # 3`
    },
    questions: [
      { id: "t13_1", description: "Create a list called fruits containing \"apple\", \"banana\", and \"cherry\". Print the list.", expectedOutput: "['apple', 'banana', 'cherry']" },
      { id: "t13_2", description: "Create the list [10, 20, 30, 40, 50] and print the second item.", expectedOutput: "20" },
      { id: "t13_3", description: "Print the number of items in the list [\"red\", \"green\", \"blue\"].", expectedOutput: "3" }
    ]
  }
];
