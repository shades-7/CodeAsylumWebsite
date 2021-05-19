
import JS from '../../../images/js.png'
import JS1 from '../../../images/js1.png'
import JS2 from '../../../images/js2.png'
import JS3 from '../../../images/js3.png'

    const detailsDA =[
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

    const DataDA = [
        {
            module: "Fundamentals - 25 sessions",
            submodule : [
                {
                title: "Guesstimate & Case Study - 5 Sessions",
                content: "Guesstimate is defined as an estimate made without using adequate or complete information, or, more strongly, as an estimate arrived at by guesswork or conjecture."
                },
                {
                title: "Excel - 5 Sessions",
                content: "Excel is used for calculation, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications."
                },
                {
                title: "Aptitude Quant & DI - 5 Sessions",
                content: "For developing the right mindset and brainpower."
                },
                {
                title: "Tableau - 5 Sessions",
                content: "Tableau is the fastest growing data visualization tool that aims to help people see and understand data"
                },
                {
                title: "R - 5 Sessions",
                content: "R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing."
                },
            ]
        },
        {
            module: "SQL - 10 sessions",
            submodule : [
                {
                title: "SQL - 5 Sessions",
                content: "USE, DESCRIBE, SHOW TABLES, SELECT, LIMIT, OFFSET, ORDER BY, DISTINCT, WHERE, Comparison operators, NULL, Logical Operators, Aggregate Functions: COUNT, MIN, MAX, AVG, SUM, GROUP BY, HAVING, Order of keywords, Join and Natural Join, Inner, Left, Right and Outer joins, Nested Queries, INSERT, UPDATE, DELETE, CREATE TABLE, ADD, MODIFY, DROP, DROP TABLE, TRUNCATE, DELETE, GRANT, REVOKE"
                },
                {
                title: "Advanced SQL - 5 Sessions",
                content: "Nested Queries over Industry level database"
                }
            ]
        },
        {
            module: "Python - 7 sessions",
            submodule : [
                {
                title: "Python - 7 Sessions",
                content: "Keywords, Identifiers, Variables, Standard Input & Output, Operators, Control Flow,Strings, Loops, Lists, Tuples, Dictionary, Functions, Lambda, Module, Packages, FileHandling, Error Handling, Map, Reduce, Filter, Zip"
                }
            ]
        },
        {
            module: "Hands on problems and test",
            submodule : [
                {
                title: "Test, Assignments and Discussions",
                content: "Hackerrank Tests for SQL & Python, Assignments for Tableau & R programming, Case Studies Discussions."
                }
            ]
        },
        {
            module: "Case studies",
            submodule : [
                {
                title: "Case Study & Analysis Sessions - 5 Sessions (1 - 2 Case Studies)",
                content: "Remote learning, distance education, and online learning during the COVID19 pandemic"
                }
            ]
        },
        {
            module: "Interview Preparation - 2 sessions",
            submodule : [
                {
                title: "Interview Preparation",
                content: "Will be taken by the industry people who are working in startups and product-based Companies"
                }
            ]
        },
        {
            module: "Placement Assistance - 2 Sessions",
            submodule : [
                {
                title: "Career and placement support",
                content: "Tech talks and discussions around the tech and industry culture."
                }
            ]
        }

    ]

    const overviewDA = 
    {
        content: "Let Data do the talking for you. Derive insights, trends and inferences from real-world data using technologies like SQL, Python, Tableau. Join today to land exciting career opportunities in the hottest career prospect of the century. 3 Month intensive training on the latest Data Analytics tools and Technologies to make you learn Data Analytics from scratch!"
    }

    const landingDA = 
    {
        heading: "Data Analyst with ",
        headingHighlight:"Business Analysts",
        containt:"Become a Data Analyst in 91 days"
    }

    
    function Dsa() {
    return detailsDA, DataDA, overviewDA, landingDA
}

export {detailsDA, DataDA, overviewDA, landingDA};