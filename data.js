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

const INTERVIEW = [
  // ── DS1: Array ──────────────────────────────────────────────────────────────
  {
    id: "ds1",
    title: "Array",
    learn: {
      what: "An ordered, index-based collection. Python's list is a dynamic array — it resizes automatically. Elements are stored contiguously so random access is O(1), but inserting or deleting in the middle shifts elements and costs O(n).",
      operations: [
        { name: "Access by index", complexity: "O(1)" },
        { name: "Append", complexity: "O(1) amortized" },
        { name: "Insert / delete at middle", complexity: "O(n)" },
        { name: "Search (unsorted)", complexity: "O(n)" },
        { name: "Slice [i:j]", complexity: "O(k)" },
      ],
      pythonTools: ["enumerate(iterable)", "zip(a, b)", "any(iterable)", "all(iterable)"],
      example: `nums = [3, 1, 4, 1, 5]

# enumerate: index + value
for i, v in enumerate(nums):
    pass  # i=0,v=3  i=1,v=1 ...

# zip: parallel iteration
a, b = [1, 2, 3], [4, 5, 6]
for x, y in zip(a, b):
    pass  # (1,4), (2,5), (3,6)

# two-pointer template
left, right = 0, len(nums) - 1
while left < right:
    left += 1
    right -= 1

# any / all
print(any(v > 4 for v in nums))  # True
print(all(v > 0 for v in nums))  # True`,
    },
    problems: [
      {
        id: "ds1_1", title: "Two Sum", difficulty: "easy",
        leetcode: { number: 1, url: "https://leetcode.com/problems/two-sum/" },
        description: "Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target. Assume exactly one solution exists. Return indices in ascending order.",
        stub: "def two_sum(nums, target):\n    pass",
        functionName: "two_sum",
        tests: [
          { args: [[2,7,11,15], 9],  expected: [0,1] },
          { args: [[3,2,4], 6],      expected: [1,2] },
          { args: [[3,3], 6],        expected: [0,1] },
        ],
      },
      {
        id: "ds1_2", title: "Best Time to Buy and Sell Stock", difficulty: "easy",
        leetcode: { number: 121, url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        description: "Given an array prices where prices[i] is the price of a stock on day i, return the maximum profit you can achieve from one buy and one sell. If no profit is possible, return 0.",
        stub: "def max_profit(prices):\n    pass",
        functionName: "max_profit",
        tests: [
          { args: [[7,1,5,3,6,4]], expected: 5 },
          { args: [[7,6,4,3,1]],   expected: 0 },
          { args: [[1,2]],         expected: 1 },
        ],
      },
      {
        id: "ds1_3", title: "Contains Duplicate", difficulty: "easy",
        leetcode: { number: 217, url: "https://leetcode.com/problems/contains-duplicate/" },
        description: "Given an integer array nums, return True if any value appears at least twice in the array, and False if every element is distinct.",
        stub: "def contains_duplicate(nums):\n    pass",
        functionName: "contains_duplicate",
        tests: [
          { args: [[1,2,3,1]],             expected: true },
          { args: [[1,2,3,4]],             expected: false },
          { args: [[1,1,1,3,3,4,3,2,4,2]], expected: true },
        ],
      },
      {
        id: "ds1_4", title: "Maximum Subarray", difficulty: "easy",
        leetcode: { number: 53, url: "https://leetcode.com/problems/maximum-subarray/" },
        description: "Given an integer array nums, find the contiguous subarray with the largest sum and return its sum. (Kadane's algorithm)",
        stub: "def max_subarray(nums):\n    pass",
        functionName: "max_subarray",
        tests: [
          { args: [[-2,1,-3,4,-1,2,1,-5,4]], expected: 6 },
          { args: [[1]],                      expected: 1 },
          { args: [[5,4,-1,7,8]],             expected: 23 },
        ],
      },
      {
        id: "ds1_5", title: "Product of Array Except Self", difficulty: "medium",
        leetcode: { number: 238, url: "https://leetcode.com/problems/product-of-array-except-self/" },
        description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements of nums except nums[i]. Solve it in O(n) without using division.",
        stub: "def product_except_self(nums):\n    pass",
        functionName: "product_except_self",
        tests: [
          { args: [[1,2,3,4]],      expected: [24,12,8,6] },
          { args: [[-1,1,0,-3,3]], expected: [0,0,9,0,0] },
          { args: [[2,3]],          expected: [3,2] },
        ],
      },
    ],
  },

  // ── DS2: Hash Map ────────────────────────────────────────────────────────────
  {
    id: "ds2",
    title: "Hash Map",
    learn: {
      what: "A key-value store with O(1) average-case insert, delete, and lookup. Python's dict is a hash map. Counter counts element frequencies. defaultdict avoids KeyError by providing a default factory for missing keys.",
      operations: [
        { name: "Get / set / delete", complexity: "O(1) average" },
        { name: "Iterate all keys", complexity: "O(n)" },
        { name: "Counter(iterable)", complexity: "O(n)" },
        { name: "most_common(k)", complexity: "O(n log k)" },
      ],
      pythonTools: ["dict.get(key, default)", "Counter(iterable)", "defaultdict(list)"],
      example: `from collections import Counter, defaultdict

# dict: frequency map
freq = {}
for c in "hello":
    freq[c] = freq.get(c, 0) + 1  # {'h':1,'e':1,'l':2,'o':1}

# Counter: same thing, one line
freq = Counter("hello")
print(freq.most_common(2))  # [('l', 2), ('h', 1)]

# defaultdict: no KeyError on missing key
graph = defaultdict(list)
graph['a'].append('b')  # auto-creates 'a' key

# two-sum lookup pattern
seen = {}
for i, v in enumerate([2, 7, 11]):
    if 9 - v in seen:
        print([seen[9 - v], i])  # [0, 1]
    seen[v] = i`,
    },
    problems: [
      {
        id: "ds2_1", title: "Valid Anagram", difficulty: "easy",
        leetcode: { number: 242, url: "https://leetcode.com/problems/valid-anagram/" },
        description: "Given two strings s and t, return True if t is an anagram of s, and False otherwise.",
        stub: "def is_anagram(s, t):\n    pass",
        functionName: "is_anagram",
        tests: [
          { args: ["anagram", "nagaram"], expected: true  },
          { args: ["rat",     "car"],     expected: false },
          { args: ["a",       "a"],       expected: true  },
        ],
      },
      {
        id: "ds2_2", title: "Ransom Note", difficulty: "easy",
        leetcode: { number: 383, url: "https://leetcode.com/problems/ransom-note/" },
        description: "Given two strings ransomNote and magazine, return True if ransomNote can be constructed by using the letters from magazine (each letter used at most once).",
        stub: "def can_construct(ransom_note, magazine):\n    pass",
        functionName: "can_construct",
        tests: [
          { args: ["a",  "b"],   expected: false },
          { args: ["aa", "ab"],  expected: false },
          { args: ["aa", "aab"], expected: true  },
        ],
      },
      {
        id: "ds2_3", title: "Word Pattern", difficulty: "easy",
        leetcode: { number: 290, url: "https://leetcode.com/problems/word-pattern/" },
        description: "Given a pattern and a string s, return True if s follows the same pattern. Each letter in pattern maps to exactly one word and each word maps to exactly one letter.",
        stub: "def word_pattern(pattern, s):\n    pass",
        functionName: "word_pattern",
        tests: [
          { args: ["abba", "dog cat cat dog"],  expected: true  },
          { args: ["abba", "dog cat cat fish"], expected: false },
          { args: ["aaaa", "dog cat cat dog"],  expected: false },
        ],
      },
      {
        id: "ds2_4", title: "First Unique Character in a String", difficulty: "easy",
        leetcode: { number: 387, url: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
        description: "Given a string s, find the first non-repeating character and return its index. If it does not exist, return -1.",
        stub: "def first_uniq_char(s):\n    pass",
        functionName: "first_uniq_char",
        tests: [
          { args: ["leetcode"],     expected: 0  },
          { args: ["loveleetcode"], expected: 2  },
          { args: ["aabb"],         expected: -1 },
        ],
      },
      {
        id: "ds2_5", title: "Longest Consecutive Sequence", difficulty: "medium",
        leetcode: { number: 128, url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
        description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. Must run in O(n).",
        stub: "def longest_consecutive(nums):\n    pass",
        functionName: "longest_consecutive",
        tests: [
          { args: [[100,4,200,1,3,2]],        expected: 4 },
          { args: [[0,3,7,2,5,8,4,6,0,1]],   expected: 9 },
          { args: [[1]],                       expected: 1 },
        ],
      },
    ],
  },

  // ── DS3: Stack ───────────────────────────────────────────────────────────────
  {
    id: "ds3",
    title: "Stack",
    learn: {
      what: "A last-in, first-out (LIFO) structure. Use Python list with append() (push) and pop(). The monotonic stack pattern maintains a stack in sorted order — powerful for 'next greater/smaller element' and histogram problems.",
      operations: [
        { name: "Push (append)", complexity: "O(1)" },
        { name: "Pop",           complexity: "O(1)" },
        { name: "Peek ([-1])",   complexity: "O(1)" },
        { name: "Search",        complexity: "O(n)" },
      ],
      pythonTools: ["list.append(x)", "list.pop()", "list[-1]  # peek"],
      example: `stack = []
stack.append(1)   # push
stack.append(2)
top = stack[-1]   # peek → 2
stack.pop()       # pop  → 2

# Matching brackets
def is_valid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for c in s:
        if c in '([{':
            stack.append(c)
        elif not stack or stack[-1] != pairs[c]:
            return False
        else:
            stack.pop()
    return not stack

# Monotonic stack: next greater element
temps = [73, 74, 75, 71, 69]
result = [0] * len(temps)
stack = []  # indices
for i, t in enumerate(temps):
    while stack and temps[stack[-1]] < t:
        idx = stack.pop()
        result[idx] = i - idx
    stack.append(i)`,
    },
    problems: [
      {
        id: "ds3_1", title: "Valid Parentheses", difficulty: "easy",
        leetcode: { number: 20, url: "https://leetcode.com/problems/valid-parentheses/" },
        description: "Given a string s containing only '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Brackets must close in the correct order.",
        stub: "def is_valid(s):\n    pass",
        functionName: "is_valid",
        tests: [
          { args: ["()"],     expected: true  },
          { args: ["()[]{}"], expected: true  },
          { args: ["(]"],     expected: false },
        ],
      },
      {
        id: "ds3_2", title: "Baseball Game", difficulty: "easy",
        leetcode: { number: 682, url: "https://leetcode.com/problems/baseball-game/" },
        description: "You are keeping score for a baseball game. Operations: an integer (add score), '+' (sum of last two), 'D' (double last), 'C' (remove last). Return the sum of all scores after processing all operations.",
        stub: "def cal_points(operations):\n    pass",
        functionName: "cal_points",
        tests: [
          { args: [["5","2","C","D","+"]],         expected: 30 },
          { args: [["5","-2","4","C","D","9","+","+"]], expected: 27 },
          { args: [["1","C"]],                     expected: 0  },
        ],
      },
      {
        id: "ds3_3", title: "Remove Outermost Parentheses", difficulty: "easy",
        leetcode: { number: 1021, url: "https://leetcode.com/problems/remove-outermost-parentheses/" },
        description: "A valid parentheses string is primitive if it is non-empty and cannot be split into two non-empty valid strings. Given a valid string s, remove the outermost parentheses of every primitive string and return the result.",
        stub: "def remove_outer_parentheses(s):\n    pass",
        functionName: "remove_outer_parentheses",
        tests: [
          { args: ["(()())(())"],       expected: "()()()" },
          { args: ["(()())(())(()())"], expected: "()()()()()" },
          { args: ["()()"],             expected: "" },
        ],
      },
      {
        id: "ds3_4", title: "Backspace String Compare", difficulty: "easy",
        leetcode: { number: 844, url: "https://leetcode.com/problems/backspace-string-compare/" },
        description: "Given two strings s and t, return True if they are equal when both are typed into empty text editors. '#' means a backspace character.",
        stub: "def backspace_compare(s, t):\n    pass",
        functionName: "backspace_compare",
        tests: [
          { args: ["ab#c",  "ad#c"], expected: true  },
          { args: ["ab##",  "c#d#"], expected: true  },
          { args: ["a#c",   "b"],    expected: false },
        ],
      },
      {
        id: "ds3_5", title: "Daily Temperatures", difficulty: "medium",
        leetcode: { number: 739, url: "https://leetcode.com/problems/daily-temperatures/" },
        description: "Given an array of integers temperatures, return an array answer such that answer[i] is the number of days until a warmer temperature. If no future day is warmer, answer[i] = 0.",
        stub: "def daily_temperatures(temperatures):\n    pass",
        functionName: "daily_temperatures",
        tests: [
          { args: [[73,74,75,71,69,72,76,73]], expected: [1,1,4,2,1,1,0,0] },
          { args: [[30,40,50,60]],             expected: [1,1,1,0] },
          { args: [[30,60,90]],                expected: [1,1,0] },
        ],
      },
    ],
  },

  // ── DS4: Queue & Deque ───────────────────────────────────────────────────────
  {
    id: "ds4",
    title: "Queue & Deque",
    learn: {
      what: "A first-in, first-out (FIFO) structure. Always use collections.deque — it provides O(1) append and popleft from both ends. A regular list costs O(n) for popleft. Deque is essential for BFS and sliding-window problems.",
      operations: [
        { name: "append (right)",   complexity: "O(1)" },
        { name: "appendleft",       complexity: "O(1)" },
        { name: "popleft",          complexity: "O(1)" },
        { name: "pop (right)",      complexity: "O(1)" },
        { name: "list.pop(0)",      complexity: "O(n) — avoid!" },
      ],
      pythonTools: ["from collections import deque", "deque.append()", "deque.appendleft()", "deque.popleft()"],
      example: `from collections import deque

q = deque([1, 2, 3])
q.append(4)       # [1,2,3,4]
q.appendleft(0)   # [0,1,2,3,4]
q.popleft()       # 0 — O(1)

# BFS template
def bfs(graph, start):
    visited = {start}
    q = deque([start])
    while q:
        node = q.popleft()
        for nb in graph[node]:
            if nb not in visited:
                visited.add(nb)
                q.append(nb)

# Sliding window with deque (monotonic)
# deque stores indices, front = max index
def max_window(nums, k):
    dq, result = deque(), []
    for i, v in enumerate(nums):
        while dq and nums[dq[-1]] <= v:
            dq.pop()
        dq.append(i)
        if dq[0] < i - k + 1:
            dq.popleft()
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result`,
    },
    problems: [
      {
        id: "ds4_1", title: "Number of Students Unable to Eat Lunch", difficulty: "easy",
        leetcode: { number: 1700, url: "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/" },
        description: "Students queue for sandwiches. students[i] is the preference (0 or 1) of student i. sandwiches[i] is the top sandwich. A student who doesn't want the top sandwich goes to the back. Return the number of students who are unable to eat.",
        stub: "def count_students(students, sandwiches):\n    pass",
        functionName: "count_students",
        tests: [
          { args: [[1,1,0,0], [0,1,0,1]], expected: 0 },
          { args: [[1,1,1,0,0,1], [1,0,0,0,1,1]], expected: 3 },
          { args: [[0], [0]], expected: 0 },
        ],
      },
      {
        id: "ds4_2", title: "Time Needed to Buy Tickets", difficulty: "easy",
        leetcode: { number: 2073, url: "https://leetcode.com/problems/time-needed-to-buy-tickets/" },
        description: "People stand in a queue to buy tickets. tickets[i] is how many tickets person i wants. Each round, one ticket is sold per person. Return the time for person at index k to finish buying all their tickets.",
        stub: "def time_to_buy_tickets(tickets, k):\n    pass",
        functionName: "time_to_buy_tickets",
        tests: [
          { args: [[2,3,2], 2], expected: 6 },
          { args: [[5,1,1,1], 0], expected: 8 },
          { args: [[1], 0], expected: 1 },
        ],
      },
      {
        id: "ds4_3", title: "Remove All Adjacent Duplicates In String", difficulty: "easy",
        leetcode: { number: 1047, url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/" },
        description: "Given a string s, repeatedly remove adjacent duplicate characters until no more can be removed. Return the final string. Use a stack/deque for an efficient one-pass solution.",
        stub: "def remove_duplicates(s):\n    pass",
        functionName: "remove_duplicates",
        tests: [
          { args: ["abbaca"], expected: "ca" },
          { args: ["azxxzy"], expected: "ay" },
          { args: ["aaa"],    expected: "a"  },
        ],
      },
      {
        id: "ds4_4", title: "Number of Recent Calls", difficulty: "easy",
        leetcode: { number: 933, url: "https://leetcode.com/problems/number-of-recent-calls/" },
        description: "Given a list of ping timestamps (strictly increasing), process each ping and count how many pings occurred in the last 3000 ms (inclusive). Return a list of counts, one per ping.",
        stub: "def ping_history(requests):\n    \"\"\"\n    For each request at time t, count pings in [t-3000, t].\n    Return list of counts, one per ping.\n    \"\"\"\n    pass",
        functionName: "ping_history",
        tests: [
          { args: [[1, 100, 3001, 3002]], expected: [1, 2, 3, 3] },
          { args: [[1]],                  expected: [1] },
          { args: [[100, 200, 300, 400]], expected: [1, 2, 3, 4] },
        ],
      },
      {
        id: "ds4_5", title: "Sliding Window Maximum", difficulty: "medium",
        leetcode: { number: 239, url: "https://leetcode.com/problems/sliding-window-maximum/" },
        description: "Given an integer array nums and an integer k, return the maximum value in each sliding window of size k. There are n - k + 1 windows total.",
        stub: "def max_sliding_window(nums, k):\n    pass",
        functionName: "max_sliding_window",
        tests: [
          { args: [[1,3,-1,-3,5,3,6,7], 3], expected: [3,3,5,5,6,7] },
          { args: [[1], 1],                  expected: [1] },
          { args: [[1,-1], 1],               expected: [1,-1] },
        ],
      },
    ],
  },

  // ── DS5: Heap ────────────────────────────────────────────────────────────────
  {
    id: "ds5",
    title: "Heap",
    learn: {
      what: "A complete binary tree satisfying the heap property. Python's heapq is a min-heap. For a max-heap, negate values. Enables O(log n) insert and O(log n) extract-min. heapify converts a list in O(n). Use nlargest/nsmallest for top-k queries.",
      operations: [
        { name: "heappush",        complexity: "O(log n)" },
        { name: "heappop",         complexity: "O(log n)" },
        { name: "Peek (h[0])",     complexity: "O(1)" },
        { name: "heapify",         complexity: "O(n)" },
        { name: "nlargest(k, h)",  complexity: "O(n log k)" },
      ],
      pythonTools: ["import heapq", "heapq.heappush(h, x)", "heapq.heappop(h)", "heapq.nlargest(k, iterable)", "heapq.heapify(list)"],
      example: `import heapq

# Min-heap
h = [3, 1, 4, 1, 5]
heapq.heapify(h)           # O(n)
heapq.heappush(h, 2)       # O(log n)
print(heapq.heappop(h))    # 1 — smallest

# Max-heap: negate to invert order
nums = [3, 1, 4, 1, 5]
max_h = [-x for x in nums]
heapq.heapify(max_h)
print(-heapq.heappop(max_h))  # 5 — largest

# Top-k pattern
print(heapq.nlargest(2, nums))   # [5, 4]
print(heapq.nsmallest(2, nums))  # [1, 1]

# Heap with tuples: sort by first element
tasks = [(3, 'low'), (1, 'urgent'), (2, 'normal')]
heapq.heapify(tasks)
print(heapq.heappop(tasks))  # (1, 'urgent')`,
    },
    problems: [
      {
        id: "ds5_1", title: "Last Stone Weight", difficulty: "easy",
        leetcode: { number: 1046, url: "https://leetcode.com/problems/last-stone-weight/" },
        description: "You have stones with integer weights. Each turn smash the two heaviest: if equal both are destroyed, otherwise the remainder survives. Return the weight of the last stone, or 0 if none remain.",
        stub: "def last_stone_weight(stones):\n    pass",
        functionName: "last_stone_weight",
        tests: [
          { args: [[2,7,4,1,8,1]], expected: 1 },
          { args: [[1]],           expected: 1 },
          { args: [[2,2]],         expected: 0 },
        ],
      },
      {
        id: "ds5_2", title: "Take Gifts From the Richest Pile", difficulty: "easy",
        leetcode: { number: 2558, url: "https://leetcode.com/problems/take-gifts-from-the-richest-pile/" },
        description: "Each second, take gifts from the richest pile and leave floor(sqrt(pile)) gifts. After k seconds, return the total number of gifts remaining.",
        stub: "import math\n\ndef pick_gifts(gifts, k):\n    pass",
        functionName: "pick_gifts",
        tests: [
          { args: [[25,64,9,4,100], 4], expected: 29 },
          { args: [[1,1,1,1], 4],       expected: 4  },
          { args: [[4], 1],             expected: 2  },
        ],
      },
      {
        id: "ds5_3", title: "K Weakest Rows in a Matrix", difficulty: "easy",
        leetcode: { number: 1337, url: "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/" },
        description: "Given a matrix of 1s (soldiers) and 0s (civilians) where soldiers always precede civilians in each row, return the indices of the k weakest rows (fewest soldiers, ties broken by index).",
        stub: "def k_weakest_rows(mat, k):\n    pass",
        functionName: "k_weakest_rows",
        tests: [
          { args: [[[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], 3], expected: [2,0,3] },
          { args: [[[1,0,0],[1,1,0],[1,1,1]], 2], expected: [0,1] },
          { args: [[[1]], 1], expected: [0] },
        ],
      },
      {
        id: "ds5_4", title: "Top K Frequent Elements", difficulty: "easy",
        leetcode: { number: 347, url: "https://leetcode.com/problems/top-k-frequent-elements/" },
        description: "Given an integer array nums and an integer k, return the k most frequent elements sorted in ascending order.",
        stub: "def top_k_frequent(nums, k):\n    pass",
        functionName: "top_k_frequent",
        tests: [
          { args: [[1,1,1,2,2,3], 2],   expected: [1,2]  },
          { args: [[1], 1],              expected: [1]    },
          { args: [[4,1,-1,2,-1,2,3], 2], expected: [-1,2] },
        ],
      },
      {
        id: "ds5_5", title: "Kth Largest Element in an Array", difficulty: "medium",
        leetcode: { number: 215, url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        description: "Given an integer array nums and an integer k, return the kth largest element in the array (not the kth distinct element).",
        stub: "def find_kth_largest(nums, k):\n    pass",
        functionName: "find_kth_largest",
        tests: [
          { args: [[3,2,1,5,6,4], 2],       expected: 5 },
          { args: [[3,2,3,1,2,4,5,5,6], 4], expected: 4 },
          { args: [[1], 1],                  expected: 1 },
        ],
      },
    ],
  },

  // ── DS6: Linked List ─────────────────────────────────────────────────────────
  {
    id: "ds6",
    title: "Linked List",
    preamble: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def _list_to_ll(lst):
    dummy = ListNode()
    cur = dummy
    for v in lst:
        cur.next = ListNode(v)
        cur = cur.next
    return dummy.next

def _ll_to_list(node):
    result = []
    while node:
        result.append(node.val)
        node = node.next
    return result`,
    learn: {
      what: "A sequence of nodes, each storing a value and a pointer to the next node. O(1) insert/delete at a known node, O(n) search. The slow/fast pointer technique detects cycles and finds midpoints. The dummy head node simplifies edge cases.",
      operations: [
        { name: "Insert at head",      complexity: "O(1)" },
        { name: "Insert at tail",      complexity: "O(n)" },
        { name: "Delete known node",   complexity: "O(1)" },
        { name: "Search",              complexity: "O(n)" },
        { name: "Access by index",     complexity: "O(n)" },
      ],
      pythonTools: ["Custom ListNode class", "Dummy head pattern", "Slow/fast pointer"],
      example: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Traverse
cur = head
while cur:
    print(cur.val)
    cur = cur.next

# Reverse in-place
prev, cur = None, head
while cur:
    nxt = cur.next
    cur.next = prev
    prev = cur
    cur = nxt
# prev is new head

# Dummy head (simplifies edge cases)
dummy = ListNode(0)
dummy.next = head
cur = dummy
# ... manipulate ...
return dummy.next

# Slow/fast pointer — find middle
slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
# slow is at middle`,
    },
    problems: [
      {
        id: "ds6_1", title: "Reverse Linked List", difficulty: "easy",
        leetcode: { number: 206, url: "https://leetcode.com/problems/reverse-linked-list/" },
        description: "Reverse a singly linked list. The function receives a ListNode head and must return the new head. (ListNode and helpers are pre-defined.)",
        stub: "def reverse_list(head):\n    pass",
        functionName: "reverse_list",
        argTypes: ["ll"], returnType: "ll",
        tests: [
          { args: [[1,2,3,4,5]], expected: [5,4,3,2,1] },
          { args: [[1,2]],       expected: [2,1] },
          { args: [[1]],         expected: [1] },
        ],
      },
      {
        id: "ds6_2", title: "Merge Two Sorted Lists", difficulty: "easy",
        leetcode: { number: 21, url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        description: "Merge two sorted linked lists and return the merged list's head. (ListNode and helpers are pre-defined.)",
        stub: "def merge_two_lists(list1, list2):\n    pass",
        functionName: "merge_two_lists",
        argTypes: ["ll", "ll"], returnType: "ll",
        tests: [
          { args: [[1,2,4], [1,3,4]], expected: [1,1,2,3,4,4] },
          { args: [[], []],           expected: [] },
          { args: [[0], []],          expected: [0] },
        ],
      },
      {
        id: "ds6_3", title: "Remove Linked List Elements", difficulty: "easy",
        leetcode: { number: 203, url: "https://leetcode.com/problems/remove-linked-list-elements/" },
        description: "Remove all nodes from the linked list that have value equal to val. Return the new head. (ListNode and helpers are pre-defined.)",
        stub: "def remove_elements(head, val):\n    pass",
        functionName: "remove_elements",
        argTypes: ["ll", null], returnType: "ll",
        tests: [
          { args: [[1,2,6,3,4,5,6], 6], expected: [1,2,3,4,5] },
          { args: [[], 1],               expected: [] },
          { args: [[7,7,7,7], 7],        expected: [] },
        ],
      },
      {
        id: "ds6_4", title: "Middle of the Linked List", difficulty: "easy",
        leetcode: { number: 876, url: "https://leetcode.com/problems/middle-of-the-linked-list/" },
        description: "Given a linked list, return the middle node. If two middle nodes exist, return the second one. Return as a list of values from the middle node to the end. (ListNode and helpers are pre-defined.)",
        stub: "def middle_node(head):\n    pass",
        functionName: "middle_node",
        argTypes: ["ll"], returnType: "ll",
        tests: [
          { args: [[1,2,3,4,5]], expected: [3,4,5] },
          { args: [[1,2,3,4,5,6]], expected: [4,5,6] },
          { args: [[1]], expected: [1] },
        ],
      },
      {
        id: "ds6_5", title: "Remove Nth Node From End of List", difficulty: "medium",
        leetcode: { number: 19, url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
        description: "Given the head of a linked list, remove the nth node from the end and return the new head. (ListNode and helpers are pre-defined.)",
        stub: "def remove_nth_from_end(head, n):\n    pass",
        functionName: "remove_nth_from_end",
        argTypes: ["ll", null], returnType: "ll",
        tests: [
          { args: [[1,2,3,4,5], 2], expected: [1,2,3,5] },
          { args: [[1], 1],          expected: [] },
          { args: [[1,2], 1],        expected: [1] },
        ],
      },
    ],
  },

  // ── DS7: Binary Tree ─────────────────────────────────────────────────────────
  {
    id: "ds7",
    title: "Binary Tree",
    preamble: `from collections import deque as _deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def _build_tree(vals):
    if not vals or vals[0] is None:
        return None
    root = TreeNode(vals[0])
    q = _deque([root])
    i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i])
            q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i])
            q.append(node.right)
        i += 1
    return root

def _level_order(root):
    if not root:
        return []
    result, q = [], _deque([root])
    while q:
        node = q.popleft()
        result.append(node.val)
        if node.left:  q.append(node.left)
        if node.right: q.append(node.right)
    return result`,
    learn: {
      what: "A hierarchical structure where each node has at most two children. DFS traversal (recursive) costs O(n). Key traversal orders: inorder (left-root-right), preorder (root-left-right), postorder (left-right-root). BFS (level order) uses a deque.",
      operations: [
        { name: "DFS traversal",     complexity: "O(n)" },
        { name: "BFS traversal",     complexity: "O(n)" },
        { name: "BST insert/search", complexity: "O(log n) avg, O(n) worst" },
        { name: "Height",            complexity: "O(n)" },
      ],
      pythonTools: ["collections.deque  # for BFS", "Recursion with base case: if not root: return"],
      example: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Inorder DFS (recursive)
def inorder(root):
    if not root:
        return []
    return inorder(root.left) + [root.val] + inorder(root.right)

# Max depth
def max_depth(root):
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

# Level order BFS
from collections import deque
def level_order(root):
    if not root: return []
    result, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left:  q.append(node.left)
            if node.right: q.append(node.right)
        result.append(level)
    return result`,
    },
    problems: [
      {
        id: "ds7_1", title: "Maximum Depth of Binary Tree", difficulty: "easy",
        leetcode: { number: 104, url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        description: "Given the root of a binary tree, return its maximum depth (number of nodes along the longest root-to-leaf path). Input is a level-order array; None means no node. (TreeNode and helpers are pre-defined.)",
        stub: "def max_depth(root):\n    pass",
        functionName: "max_depth",
        argTypes: ["tree"], returnType: "int",
        tests: [
          { args: [[3,9,20,null,null,15,7]], expected: 3 },
          { args: [[1,null,2]],              expected: 2 },
          { args: [[]],                      expected: 0 },
        ],
      },
      {
        id: "ds7_2", title: "Invert Binary Tree", difficulty: "easy",
        leetcode: { number: 226, url: "https://leetcode.com/problems/invert-binary-tree/" },
        description: "Invert a binary tree (mirror it). Return the root of the inverted tree. Result is validated as level-order traversal. (TreeNode and helpers are pre-defined.)",
        stub: "def invert_tree(root):\n    pass",
        functionName: "invert_tree",
        argTypes: ["tree"], returnType: "tree",
        tests: [
          { args: [[4,2,7,1,3,6,9]], expected: [4,7,2,9,6,3,1] },
          { args: [[2,1,3]],          expected: [2,3,1] },
          { args: [[]],               expected: [] },
        ],
      },
      {
        id: "ds7_3", title: "Symmetric Tree", difficulty: "easy",
        leetcode: { number: 101, url: "https://leetcode.com/problems/symmetric-tree/" },
        description: "Given the root of a binary tree, check whether it is a mirror of itself (symmetric around its center). (TreeNode and helpers are pre-defined.)",
        stub: "def is_symmetric(root):\n    pass",
        functionName: "is_symmetric",
        argTypes: ["tree"], returnType: "bool",
        tests: [
          { args: [[1,2,2,3,4,4,3]],       expected: true  },
          { args: [[1,2,2,null,3,null,3]], expected: false },
          { args: [[1]],                    expected: true  },
        ],
      },
      {
        id: "ds7_4", title: "Path Sum", difficulty: "easy",
        leetcode: { number: 112, url: "https://leetcode.com/problems/path-sum/" },
        description: "Given the root of a binary tree and an integer targetSum, return True if the tree has a root-to-leaf path such that the sum of all node values equals targetSum. (TreeNode and helpers are pre-defined.)",
        stub: "def has_path_sum(root, target_sum):\n    pass",
        functionName: "has_path_sum",
        argTypes: ["tree", null], returnType: "bool",
        tests: [
          { args: [[5,4,8,11,null,13,4,7,2,null,null,null,1], 22], expected: true  },
          { args: [[1,2,3], 5],                                     expected: false },
          { args: [[], 0],                                          expected: false },
        ],
      },
      {
        id: "ds7_5", title: "Binary Tree Level Order Traversal", difficulty: "medium",
        leetcode: { number: 102, url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        description: "Given the root of a binary tree, return the level order traversal of its node values as a list of lists (left to right, level by level). (TreeNode and helpers are pre-defined.)",
        stub: "from collections import deque\n\ndef level_order(root):\n    pass",
        functionName: "level_order",
        argTypes: ["tree"], returnType: "list",
        tests: [
          { args: [[3,9,20,null,null,15,7]], expected: [[3],[9,20],[15,7]] },
          { args: [[1]],                     expected: [[1]] },
          { args: [[]],                      expected: [] },
        ],
      },
    ],
  },

  // ── DS8: Graph ───────────────────────────────────────────────────────────────
  {
    id: "ds8",
    title: "Graph",
    learn: {
      what: "A collection of nodes (vertices) connected by edges. Represent as an adjacency list using defaultdict(list). BFS finds shortest paths in unweighted graphs; DFS explores all reachable nodes. Both run in O(V + E).",
      operations: [
        { name: "Add edge",              complexity: "O(1)" },
        { name: "BFS / DFS traversal",  complexity: "O(V + E)" },
        { name: "Adjacency lookup",      complexity: "O(degree)" },
      ],
      pythonTools: ["from collections import defaultdict, deque", "visited = set()  # track visited nodes"],
      example: `from collections import defaultdict, deque

# Build adjacency list
graph = defaultdict(list)
for u, v in [[0,1],[0,2],[1,2]]:
    graph[u].append(v)
    graph[v].append(u)

# BFS — shortest path, level by level
def bfs(graph, start):
    visited = {start}
    q = deque([start])
    while q:
        node = q.popleft()
        for nb in graph[node]:
            if nb not in visited:
                visited.add(nb)
                q.append(nb)

# DFS — recursive
def dfs(node, visited, graph):
    visited.add(node)
    for nb in graph[node]:
        if nb not in visited:
            dfs(nb, visited, graph)

# Grid DFS (4-directional)
def explore(grid, r, c, visited):
    if (r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0])
            or (r, c) in visited or grid[r][c] == 0):
        return
    visited.add((r, c))
    for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
        explore(grid, r+dr, c+dc, visited)`,
    },
    problems: [
      {
        id: "ds8_1", title: "Find the Town Judge", difficulty: "easy",
        leetcode: { number: 997, url: "https://leetcode.com/problems/find-the-town-judge/" },
        description: "In a town of n people (labeled 1..n), there may be a judge: trusted by everyone else, trusts nobody. Given trust[i]=[a,b] meaning a trusts b, find the judge. Return -1 if no judge.",
        stub: "def find_judge(n, trust):\n    pass",
        functionName: "find_judge",
        tests: [
          { args: [2, [[1,2]]],         expected: 2  },
          { args: [3, [[1,3],[2,3]]],   expected: 3  },
          { args: [3, [[1,3],[2,3],[3,1]]], expected: -1 },
        ],
      },
      {
        id: "ds8_2", title: "Find if Path Exists in Graph", difficulty: "easy",
        leetcode: { number: 1971, url: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
        description: "Given n nodes (0..n-1), a list of undirected edges, a source node, and a destination node, return True if a path exists from source to destination.",
        stub: "def valid_path(n, edges, source, destination):\n    pass",
        functionName: "valid_path",
        tests: [
          { args: [3, [[0,1],[1,2],[2,0]], 0, 2], expected: true  },
          { args: [6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5], expected: false },
          { args: [1, [], 0, 0], expected: true },
        ],
      },
      {
        id: "ds8_3", title: "Island Perimeter", difficulty: "easy",
        leetcode: { number: 463, url: "https://leetcode.com/problems/island-perimeter/" },
        description: "Given a grid where 1 = land and 0 = water, compute the perimeter of the island. Assume there is exactly one island and no holes.",
        stub: "def island_perimeter(grid):\n    pass",
        functionName: "island_perimeter",
        tests: [
          { args: [[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]], expected: 16 },
          { args: [[[1]]],                                        expected: 4  },
          { args: [[[1,0]]],                                      expected: 4  },
        ],
      },
      {
        id: "ds8_4", title: "Max Area of Island", difficulty: "easy",
        leetcode: { number: 695, url: "https://leetcode.com/problems/max-area-of-island/" },
        description: "Given a binary matrix grid (1=land, 0=water), return the area of the largest island (connected group of 1s). Return 0 if there is no island.",
        stub: "def max_area_of_island(grid):\n    pass",
        functionName: "max_area_of_island",
        tests: [
          { args: [[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]], expected: 6 },
          { args: [[[0,0,0,0,0,0,0,0]]],                                                                                                                                                                                                                                        expected: 0 },
          { args: [[[1,1],[1,0]]],                                                                                                                                                                                                                                               expected: 3 },
        ],
      },
      {
        id: "ds8_5", title: "Number of Islands", difficulty: "medium",
        leetcode: { number: 200, url: "https://leetcode.com/problems/number-of-islands/" },
        description: "Given a 2D grid of '1' (land) and '0' (water), return the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.",
        stub: "def num_islands(grid):\n    pass",
        functionName: "num_islands",
        tests: [
          { args: [[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]], expected: 1 },
          { args: [[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]], expected: 3 },
          { args: [[["1"]]],                                                                                   expected: 1 },
        ],
      },
    ],
  },

  // ── DS9: Sorting & Binary Search ─────────────────────────────────────────────
  {
    id: "ds9",
    title: "Sorting & Binary Search",
    learn: {
      what: "Binary search runs in O(log n) by halving the search space each step — requires a sorted input. Python's sorted() returns a new sorted list in O(n log n). The bisect module finds insert positions in O(log n) on already-sorted lists.",
      operations: [
        { name: "sorted(iterable)",     complexity: "O(n log n)" },
        { name: "list.sort()",          complexity: "O(n log n) in-place" },
        { name: "Binary search",        complexity: "O(log n)" },
        { name: "bisect_left/right",    complexity: "O(log n)" },
      ],
      pythonTools: ["sorted(iterable, key=fn)", "bisect.bisect_left(a, x)", "bisect.bisect_right(a, x)"],
      example: `import bisect

nums = [1, 3, 5, 7, 9]

# Classic binary search template
def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# bisect: O(log n) insert position
idx = bisect.bisect_left(nums, 6)  # 3

# sorted with key function
words = ["banana", "apple", "cherry"]
print(sorted(words, key=len))  # ['apple', 'banana', 'cherry']

# sort descending
print(sorted(nums, reverse=True))  # [9,7,5,3,1]`,
    },
    problems: [
      {
        id: "ds9_1", title: "Binary Search", difficulty: "easy",
        leetcode: { number: 704, url: "https://leetcode.com/problems/binary-search/" },
        description: "Given a sorted array of integers nums and a target, return the index of target. If not found, return -1. Must run in O(log n).",
        stub: "def search(nums, target):\n    pass",
        functionName: "search",
        tests: [
          { args: [[-1,0,3,5,9,12], 9], expected: 4  },
          { args: [[-1,0,3,5,9,12], 2], expected: -1 },
          { args: [[5], 5],              expected: 0  },
        ],
      },
      {
        id: "ds9_2", title: "Search Insert Position", difficulty: "easy",
        leetcode: { number: 35, url: "https://leetcode.com/problems/search-insert-position/" },
        description: "Given a sorted array and a target, return the index if found, or the index where it would be inserted to keep the array sorted. Must run in O(log n).",
        stub: "def search_insert(nums, target):\n    pass",
        functionName: "search_insert",
        tests: [
          { args: [[1,3,5,6], 5], expected: 2 },
          { args: [[1,3,5,6], 2], expected: 1 },
          { args: [[1,3,5,6], 7], expected: 4 },
        ],
      },
      {
        id: "ds9_3", title: "Squares of a Sorted Array", difficulty: "easy",
        leetcode: { number: 977, url: "https://leetcode.com/problems/squares-of-a-sorted-array/" },
        description: "Given an integer array sorted in non-decreasing order, return an array of the squares of each number, also sorted in non-decreasing order. Try to solve it in O(n) with two pointers.",
        stub: "def sorted_squares(nums):\n    pass",
        functionName: "sorted_squares",
        tests: [
          { args: [[-4,-1,0,3,10]], expected: [0,1,9,16,100] },
          { args: [[-7,-3,2,3,11]], expected: [4,9,9,49,121] },
          { args: [[0,2]],          expected: [0,4] },
        ],
      },
      {
        id: "ds9_4", title: "Sort Colors", difficulty: "easy",
        leetcode: { number: 75, url: "https://leetcode.com/problems/sort-colors/" },
        description: "Given an array nums with values 0 (red), 1 (white), 2 (blue), sort them in-place so that reds come first, then whites, then blues. Return the sorted array. (Dutch National Flag problem — try one pass with three pointers.)",
        stub: "def sort_colors(nums):\n    pass",
        functionName: "sort_colors",
        tests: [
          { args: [[2,0,2,1,1,0]], expected: [0,0,1,1,2,2] },
          { args: [[2,0,1]],        expected: [0,1,2] },
          { args: [[0]],            expected: [0] },
        ],
      },
      {
        id: "ds9_5", title: "Find Minimum in Rotated Sorted Array", difficulty: "medium",
        leetcode: { number: 153, url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
        description: "Given a sorted array rotated at an unknown pivot, find the minimum element. Must run in O(log n).",
        stub: "def find_min(nums):\n    pass",
        functionName: "find_min",
        tests: [
          { args: [[3,4,5,1,2]],    expected: 1  },
          { args: [[4,5,6,7,0,1,2]], expected: 0  },
          { args: [[11,13,15,17]], expected: 11 },
        ],
      },
    ],
  },
];
