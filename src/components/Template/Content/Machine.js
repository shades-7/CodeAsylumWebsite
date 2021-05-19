
import JS from '../../../images/js.png'
import JS1 from '../../../images/js1.png'
import JS2 from '../../../images/js2.png'
import JS3 from '../../../images/js3.png'

    const detailsML =[
        {
            "image" : JS,
            "title" : "ML",
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

    const DataML = [
        {
            module: "Python - 5 Sessions",
            submodule : [
                {
                title: "Python",
                content: "Keywords, Identifiers, Variables, Standard Input & Output,operators, Control Flow, Strings, Loops, Lists, Tuples, Dictionary, Functions, Lambda, Module, Packages, File Handling, Error Handling, Map, Reduce, Filter, Zip."
                }
            ]
        },
        {
            module: "Mathematics & Statistics - 10 Sessions",
            submodule : [
                {
                title: "Linear Algebra",
                content: "Scalars, Vectors, Matrices, Tensors, Determinant, Dot Product, Hyperplane, Linear Dependence, and Span, Norms, Eigen decomposition, Singular Value Decomposition"
                },
                {
                title: "Statistics",
                content: "PDF, CDF, Bayes’ Rule, Expectations, Variance, Covariance, Kernel Density Estimation, Kernel Density Classification, Central Limit Theorem, Chebyshev’s Inequality, Continuous Probability Distribution, and its Significance, Correlation, Confidence Interval, Hypothesis Testing, Conditional Probability"
                },
                {
                title: "Calculus",
                content: "Differentiation, Maxima-Minima Concepts, Gradient Descent, Stochastic Gradient Descent"
                }
            ]
        },
        {
            module: "Exploratory Data Analysis - 7 Sessions",
            submodule : [
                {
                title: "Data Analysis",
                content: "DVariable Identification, Univariate Analysis, Bivariate Analysis, Missing Value Imputation, Outlier Detection, Feature Engineering, Variable Transformation, Numpy, Pandas, Matplotlib, SciPy, Seaborn, Bar Plot, Histograms, Contingency Table, Heat Map, Scatter Plot, Correlation Matrix, Violin Plot, Line Plots"
                }
            ]
        },
        {
            module: "Machine Learning - 15 Sessions",
            submodule : [
                {
                title: "Exploring Machine Learning",
                content: "Linear Regression, Logistic Regression, KNN, Naive Bayes, Decision Tree, Random Forest, SVM, KMeans, PCA, Recommendation System, Accuracy Measurement Technique"
                }
            ]
        },
        {
            module: "Introduction to Neural Networks - 5 Sessions",
            submodule : [
                {
                title: "Fundamentals and Concepts of Neural Networks",
                content: "Basic Awareness sessions on Neural Networks for Deep Learning, Introduction to Artificial Neural Network, Multi-Layer Perceptron & Activation Function."
                }
            ]
        },
        {
            module: "Mentored Kaggle Contest - 4 Sessions",
            submodule : [
                {
                title: "Kaggle Based Contest",
                content: "Teams based project development."
                }
            ]
        },
        {
            module: "Project Development Sessions - 7 Sessions",
            submodule : [
                {
                title: "Project 1",
                content: "Housing Price Prediction"
                },
                {
                title: "Project 2",
                content: "Credit Card Fraud Detection"
                },
                {
                title: "Project 3",
                content: "Detecting Parkinson's Disease with XGBoost"
                },
                {
                title: "Project 4",
                content: "Catching Illegal Fishing Projects"
                },
                {
                title: "Project 5",
                content: "Customer Segmentation"
                },
                {
                title: "Project 6",
                content: "Corona Research & Predictions"
                }
            ]
        },
        {
            module: "Mock Interviews - 2 Sessions",
            submodule : [
                {
                title: "Interview Preparation",
                content: "Will be taken by the industry people who are working in startups and product-based Companies."
                }
            ]
        },
        {
            module: "Placement Assistance- 2 Sessions",
            submodule : [
                {
                title: "Career and placement assistance",
                content: "Tech talks and discussions around the tech and industry culture."
                }
            ]
        }

    ]

    const overviewML = 
    {
        content: "For the people who are interested in extracting insightful information from structured as well as unstructured data and want to switch careers in Machine Learning to become a Data Scientist."
    }

    const landingML = 
    {
        heading: "Data Science & ",
        headingHighlight:"Machine Learning",
        containt:"Crack the coding interviews of Tier-1 Data Science based companies"
    }
    
    function Dsa() {
    return detailsML, DataML, overviewML, landingML
}

export {detailsML, DataML, overviewML,landingML};