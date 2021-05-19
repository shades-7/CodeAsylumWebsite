
import JS from '../../../images/js.png'
import JS1 from '../../../images/js1.png'
import JS2 from '../../../images/js2.png'
import JS3 from '../../../images/js3.png'

    const detailsDSA =[
        {
            "image" : JS,
            "title" : "d",
            "subtext" : "JavaScript is the universal programming language of the web. You'll gain firsthand experience with Javascript and Node ecosystems, as well as modern tooling and libraries such as Babel and webpack."
        },
        {
            "image" : JS1,
            "title" : "c",
            "subtext" : "JavaScript is the universal programming language of the web. You'll gain firsthand experience with Javascript and Node ecosystems, as well as modern tooling and libraries such as Babel and webpack."
        },
        {
            "image" : JS2,
            "title" : "a",
            "subtext" : "JavaScript is the universal programming language of the web. You'll gain firsthand experience with Javascript and Node ecosystems, as well as modern tooling and libraries such as Babel and webpack."
        },
        {
            "image" : JS3,
            "title" : "d",
            "subtext" : "JavaScript is the universal programming language of the web. You'll gain firsthand experience with Javascript and Node ecosystems, as well as modern tooling and libraries such as Babel and webpack."
        }
    ]

    const DataDSA = [
        {
            module: "Module 1",
            submodule : [
                {
                title: "Python - 7 Sessions",
                content: "Keywords, Identifiers, Variables, Standard Input & Output, Operators, Control Flow, Strings, Loops, Lists, Tuples, Dictionary, Functions, Lambda, Module, Packages, Error Handling, Map, Reduce, Filter, OOPS, Bitwise operators, Range, Pattern formation, Analysis of Algorithms, Time Complexity, Space Complexity, Analysis of Loops, Lower bound and upper Bound theory, Amortised Analysis, Asymptotic Analysis, Recursion."
                }
            ]
        },
        {
            module: "Module 2",
            submodule : [
                {
                title: "Number Theory- 4 Sessions",
                content: "GCD-LCM, Factorials, Fibonacci, Prime Factors, Euler’s Totient Function, Primirality Test, Modular Exponentiation, Sieve of Eratosthenes, Minmax Game, Nim Game, Bit Manipulation, Bit Masking."
                }
            ]
        },
        {
            module: "Module 3",
            submodule : [
                {
                title: "Arrays - 4 Sessions",
                content: "Two pointer approach, Three pointer approach, Sliding window technique, Kadane’s Algorithm, Linear Search, Binary Search, Discrete Binary Search."
                }
            ]
        },
        {
            module: "Module 4",
            submodule : [
                {
                title: "Sorting- 3 Sessions",
                content: "Bubble Sort,Selection Sort, Insertion Sort, Quick Sort, Merge Sort, Heap Sort."
                }
            ]
        },
        {
            module: "Module 5",
            submodule : [
                {
                title: "Linked-Lists- 4 Sessions",
                content: "Insertion,Updation, Deletion in a linked list, Finding and Removing loop in a Linked list, Sorting in Linked list, Doubly Linked List, Circular Linked List Josephus Problem."
                }
            ]
        },
        {
            module: "Module 6",
            submodule : [
                {
                title: "Stack and Queue- 6 Sessions",
                content: "Insertion and deletion in Stacks, Stock Span Problem, Histogram Program, Balanced Parentheses Problem, Insertion and Deletion in Queue, Stack using Queues, Queue using Stacks, STL implementation for Stack and Queues."
                }
            ]
        },
        {
            module: "Module 7",
            submodule : [
                {
                title: "Trees- Binary Tree and Binary Search Tree- 6 Sessions",
                content: "Insertion, Updation, Deletion in a Tree, Pre-order traversal, Post-order Traversal, In-order Traversal, Level Order Traversal, Boundary Traversal, Diagonal Traversal, Reverse Traversal, Lowest Common Ancestor problem, Mirror of a tree, Binary tree to Linked List and vice-versa."
                }
            ]
        },
        {
            module: "Module 8",
            submodule : [
                {
                title: "Graphs- 6 Sessions",
                content: "Graph Representation, Insertion, Updation and Deletion in a Graph, Breadth-first Search, Depth-first Search, Minimum Spanning Tree, Dijkstra’s Algorithm, Prim’s Algorithm, Kruskal’s Algorithm, Topological Sort."
                }
            ]
        },
        {
            module: "Module 9",
            submodule : [
                {
                title: "Recursion and Backtracking- 3 Sessions",
                content: "Backtracking vs DFS, N-Queens Problem, Knight’s Tour Problem, Sudoku Solving Problem, Rat in Maze Problem."
                }
            ]
        },
        {
            module: "Module 10",
            submodule : [
                {
                title: "Greedy Algorithm- 3 Sessions",
                content: "Activity Selection Problem, Job Sequencing Problem, Egyptian Fraction, Fractional Knapsack Problem, Huffman Coding."
                }
            ]
        },
        {
            module: "Module 11",
            submodule : [
                {
                title: "Dynamic Programming- 6 Sessions",
                content: "Top-Down approach, Bottom-up approach, Fibonacci Problem, Knapsack Problem, Egg Dropping Puzzle, Longest Increasing Subsequence, Longest Common Subsequence, Edit Distance, Minimum Cost Path, Cutting Rod Problem. Staircase Problem."
                }
            ]
        },
        {
            module: "Module 12",
            submodule : [
                {
                title: "Strings- 4 Sessions",
                content: "KMP Algorithm, Z Algorithm, Tries, String Manipulation(Palindrome check, Substring check)."
                }
            ]
        },
        {
            module: "Module 13",
            submodule : [
                {
                title: "Mock Interviews - 2 Sessions",
                content: "Activity Selection Problem, Job Sequencing Problem, Egyptian Fraction, Fractional Knapsack Problem, Huffman Coding."
                }
            ]
        },
        {
            module: "Module 14",
            submodule : [
                {
                title: "Coding Competitions - 15 Tests",
                content: "Coding tests from various algorithms, for pressure handling experience for company interviews."
                }
            ]
        },
        {
            module: "Module 15",
            submodule : [
                {
                title: "Assignment Discussion- 15 Sessions",
                content: "Each topic consists of proper assignment questions for which detailed discussion classes will be hosted."
                }
            ]
        },
        {
            module: "Module 16",
            submodule : [
                {
                title: "Placement Assistance - 2 Sessions",
                content: "Tech talks and discussions around the tech and industry culture. Also, resume consultation by the industry panel."
                }
            ]
        }

    ]

    const overviewDSA = 
    {
        content: "Specifically tailored for those looking to boost their knowledge in Data Structures & Algorithms, our curated content takes a deep dive into algorithms like Trees, Graphs & Dynamic Programming. Supported with HackerRank Contests, Self Practice Material, and a Hands-On Coding Sessions and Pair Programming. We ensure that you'll be ready for every coding test."
    }

    const landingDSA = 
    {
        heading: "Data Structures and ",
        headingHighlight:"Algorithms",
        containt:"Implement Data Structures and crack coding interviews"
    }

    
    function Dsa() {
    return detailsDSA, DataDSA, overviewDSA, landingDSA
}

export {detailsDSA, DataDSA, overviewDSA, landingDSA};