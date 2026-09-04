import React, { useEffect, useMemo, useState } from "react";
import {
    Award,
    BookOpen,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Clock3,
    FileQuestion,
    PlayCircle,
    Search,
    Trophy,
    X,
    XCircle,
} from "lucide-react";

const Quiz = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(0);

    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const quizzes = [
        {
            id: 1,
            title: "JavaScript Fundamentals Quiz",
            course: "JavaScript Essentials",
            instructor: "Rahul Sharma",
            questions: 10,
            duration: 15,
            attempts: 2,
            maxAttempts: 3,
            status: "Available",
            difficulty: "Beginner",
            description:
                "Test your understanding of JavaScript variables, functions, arrays, objects, operators, and basic ES6 concepts.",
            questionsData: [
                {
                    question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
                    options: ["var", "let", "define", "variable"],
                    answer: "let",
                },
                {
                    question: "Which method is used to add an element to the end of an array?",
                    options: ["push()", "pop()", "shift()", "unshift()"],
                    answer: "push()",
                },
                {
                    question: "Which symbol is used for strict equality comparison?",
                    options: ["==", "=", "===", "!="],
                    answer: "===",
                },
                {
                    question: "Which of the following is an object in JavaScript?",
                    options: ["{ name: 'Mansi' }", "[1, 2, 3]", "42", "true"],
                    answer: "{ name: 'Mansi' }",
                },
                {
                    question: "Which method converts a JSON string into a JavaScript object?",
                    options: [
                        "JSON.parse()",
                        "JSON.stringify()",
                        "JSON.convert()",
                        "JSON.object()",
                    ],
                    answer: "JSON.parse()",
                },
                {
                    question: "Which keyword is used to define a function?",
                    options: ["function", "func", "method", "define"],
                    answer: "function",
                },
                {
                    question: "What does DOM stand for?",
                    options: [
                        "Document Object Model",
                        "Data Object Model",
                        "Document Oriented Method",
                        "Data Oriented Model",
                    ],
                    answer: "Document Object Model",
                },
                {
                    question: "Which operator is used for logical AND?",
                    options: ["||", "&&", "!", "&"],
                    answer: "&&",
                },
                {
                    question: "Which method removes the last element from an array?",
                    options: ["push()", "shift()", "pop()", "remove()"],
                    answer: "pop()",
                },
                {
                    question: "Which feature was introduced with ES6?",
                    options: [
                        "let and const",
                        "HTML",
                        "CSS selectors",
                        "SQL tables",
                    ],
                    answer: "let and const",
                },
            ],
        },

        {
            id: 2,
            title: "Java OOPs Assessment",
            course: "Java Programming",
            instructor: "Amit Verma",
            questions: 15,
            duration: 20,
            attempts: 1,
            maxAttempts: 2,
            status: "Available",
            difficulty: "Intermediate",
            description:
                "Evaluate your knowledge of classes, objects, inheritance, polymorphism, abstraction, encapsulation, and interfaces in Java.",
            questionsData: [
                {
                    question: "Which concept combines data and methods into a single unit?",
                    options: [
                        "Inheritance",
                        "Encapsulation",
                        "Polymorphism",
                        "Abstraction",
                    ],
                    answer: "Encapsulation",
                },
                {
                    question: "Which keyword is used to inherit a class in Java?",
                    options: ["inherits", "extends", "implements", "super"],
                    answer: "extends",
                },
                {
                    question: "Which keyword is used to create an object?",
                    options: ["class", "object", "new", "create"],
                    answer: "new",
                },
                {
                    question: "Which OOP concept allows one interface to have multiple implementations?",
                    options: [
                        "Encapsulation",
                        "Polymorphism",
                        "Abstraction",
                        "Inheritance",
                    ],
                    answer: "Polymorphism",
                },
                {
                    question: "Which keyword refers to the current object?",
                    options: ["self", "current", "this", "object"],
                    answer: "this",
                },
            ],
        },

        {
            id: 3,
            title: "SQL & Database Quiz",
            course: "Database Management System",
            instructor: "Priya Singh",
            questions: 12,
            duration: 18,
            attempts: 0,
            maxAttempts: 2,
            status: "Available",
            difficulty: "Intermediate",
            description:
                "Check your understanding of SQL queries, keys, constraints, joins, normalization, and relational databases.",
            questionsData: [
                {
                    question: "Which SQL command is used to retrieve data?",
                    options: ["GET", "SELECT", "FETCH", "READ"],
                    answer: "SELECT",
                },
                {
                    question: "Which key uniquely identifies each row in a table?",
                    options: [
                        "Foreign Key",
                        "Primary Key",
                        "Candidate Key",
                        "Composite Key",
                    ],
                    answer: "Primary Key",
                },
                {
                    question: "Which SQL clause is used to filter records?",
                    options: ["ORDER BY", "GROUP BY", "WHERE", "FILTER"],
                    answer: "WHERE",
                },
                {
                    question: "Which JOIN returns matching rows from both tables?",
                    options: [
                        "INNER JOIN",
                        "OUTER JOIN",
                        "FULL JOIN",
                        "CROSS JOIN",
                    ],
                    answer: "INNER JOIN",
                },
                {
                    question: "Which command is used to modify existing records?",
                    options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
                    answer: "UPDATE",
                },
            ],
        },

        {
            id: 4,
            title: "HTML & CSS Fundamentals",
            course: "HTML & CSS Fundamentals",
            instructor: "Neha Gupta",
            questions: 10,
            duration: 15,
            attempts: 1,
            maxAttempts: 1,
            status: "Completed",
            difficulty: "Beginner",
            description:
                "Review your knowledge of HTML structure, semantic elements, CSS selectors, layouts, and responsive design.",
            score: 90,
            questionsData: [
                {
                    question: "Which HTML element is used for the largest heading?",
                    options: ["<h6>", "<heading>", "<h1>", "<head>"],
                    answer: "<h1>",
                },
                {
                    question: "Which CSS property changes text color?",
                    options: ["font-color", "color", "text-color", "foreground"],
                    answer: "color",
                },
            ],
        },

        {
            id: 5,
            title: "React Basics Assessment",
            course: "Full Stack Web Development",
            instructor: "Rahul Sharma",
            questions: 15,
            duration: 25,
            attempts: 0,
            maxAttempts: 2,
            status: "Locked",
            difficulty: "Intermediate",
            description:
                "This assessment will become available after completing the required React lessons.",
            questionsData: [],
        },
    ];

    const filteredQuizzes = useMemo(() => {
        return quizzes.filter((quiz) => {
            const matchesSearch =
                quiz.title.toLowerCase().includes(search.toLowerCase()) ||
                quiz.course.toLowerCase().includes(search.toLowerCase()) ||
                quiz.instructor.toLowerCase().includes(search.toLowerCase());

            const matchesFilter =
                filter === "All" || quiz.status === filter;

            return matchesSearch && matchesFilter;
        });
    }, [search, filter]);

    const totalQuizzes = quizzes.length;
    const availableQuizzes = quizzes.filter(
        (quiz) => quiz.status === "Available"
    ).length;
    const completedQuizzes = quizzes.filter(
        (quiz) => quiz.status === "Completed"
    ).length;
    const averageScore = Math.round(
        quizzes
            .filter((quiz) => quiz.score)
            .reduce((sum, quiz) => sum + quiz.score, 0) /
        quizzes.filter((quiz) => quiz.score).length
    );

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return `${String(minutes).padStart(2, "0")}:${String(
            remainingSeconds
        ).padStart(2, "0")}`;
    };

    const startQuiz = (quiz) => {
        if (
            quiz.status !== "Available" ||
            quiz.attempts >= quiz.maxAttempts ||
            quiz.questionsData.length === 0
        ) {
            return;
        }

        setSelectedQuiz(quiz);
        setQuizStarted(true);
        setCurrentQuestion(0);
        setAnswers({});
        setQuizSubmitted(false);
        setShowResult(false);
        setShowSubmitModal(false);
        setTimeLeft(quiz.duration * 60);
    };

    const closeQuiz = () => {
        setSelectedQuiz(null);
        setQuizStarted(false);
        setCurrentQuestion(0);
        setAnswers({});
        setQuizSubmitted(false);
        setShowSubmitModal(false);
        setShowResult(false);
        setTimeLeft(0);
    };

    useEffect(() => {
        if (!quizStarted || quizSubmitted || showResult) return;

        if (timeLeft <= 0) {
            setQuizSubmitted(true);
            setShowResult(true);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((previous) => previous - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [quizStarted, quizSubmitted, showResult, timeLeft]);

    const selectAnswer = (option) => {
        setAnswers((previous) => ({
            ...previous,
            [currentQuestion]: option,
        }));
    };

    const calculateScore = () => {
        if (!selectedQuiz) return 0;

        const questions = selectedQuiz.questionsData;

        if (!questions.length) return 0;

        const correct = questions.reduce((total, question, index) => {
            return total + (answers[index] === question.answer ? 1 : 0);
        }, 0);

        return Math.round((correct / questions.length) * 100);
    };

    const submitQuiz = () => {
        setShowSubmitModal(false);
        setQuizSubmitted(true);
        setShowResult(true);
    };

    const getCorrectAnswers = () => {
        if (!selectedQuiz) return 0;

        return selectedQuiz.questionsData.reduce(
            (total, question, index) =>
                total + (answers[index] === question.answer ? 1 : 0),
            0
        );
    };

    const answeredCount = Object.keys(answers).length;

    if (quizStarted && selectedQuiz && showResult) {
        const score = calculateScore();
        const correctAnswers = getCorrectAnswers();
        const totalQuestions = selectedQuiz.questionsData.length;

        return (
            <div className="min-h-screen bg-[#161F19] text-[#F3EEDD] p-4 sm:p-6 lg:p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#1B241E] border border-[#7C9A82]/30 rounded-2xl overflow-hidden">
                        <div className="bg-[#F2B84B] p-8 text-center text-[#161F19]">
                            <div className="w-20 h-20 mx-auto rounded-full bg-[#161F19] flex items-center justify-center mb-4">
                                <Trophy
                                    size={38}
                                    className="text-[#F2B84B]"
                                />
                            </div>

                            <h1 className="text-3xl font-bold">
                                Quiz Completed
                            </h1>

                            <p className="mt-2 opacity-80">
                                {selectedQuiz.title}
                            </p>
                        </div>

                        <div className="p-6 sm:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                <div className="bg-[#161F19] border border-[#7C9A82]/25 rounded-xl p-5 text-center">
                                    <p className="text-[#7C9A82] text-sm">
                                        Your Score
                                    </p>
                                    <p className="text-3xl font-bold text-[#F2B84B] mt-1">
                                        {score}%
                                    </p>
                                </div>

                                <div className="bg-[#161F19] border border-[#7C9A82]/25 rounded-xl p-5 text-center">
                                    <p className="text-[#7C9A82] text-sm">
                                        Correct Answers
                                    </p>
                                    <p className="text-3xl font-bold mt-1">
                                        {correctAnswers}/{totalQuestions}
                                    </p>
                                </div>

                                <div className="bg-[#161F19] border border-[#7C9A82]/25 rounded-xl p-5 text-center">
                                    <p className="text-[#7C9A82] text-sm">
                                        Status
                                    </p>
                                    <p
                                        className={`text-xl font-bold mt-2 ${score >= 60
                                            ? "text-[#7C9A82]"
                                            : "text-[#D6402C]"
                                            }`}
                                    >
                                        {score >= 60 ? "Passed" : "Needs Practice"}
                                    </p>
                                </div>
                            </div>

                            <div className="text-center mb-8">
                                <div className="w-28 h-28 mx-auto rounded-full border-8 border-[#F2B84B]/20 flex items-center justify-center">
                                    <span className="text-3xl font-bold text-[#F2B84B]">
                                        {score}%
                                    </span>
                                </div>

                                <p className="text-[#7C9A82] mt-4">
                                    {score >= 80
                                        ? "Excellent work! Keep learning."
                                        : score >= 60
                                            ? "Good job! Keep improving."
                                            : "Review the course material and try again."}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button
                                    onClick={closeQuiz}
                                    className="px-6 py-3 rounded-xl bg-[#F2B84B] text-[#161F19] font-semibold hover:bg-[#e5aa3f] transition"
                                >
                                    Back to Quizzes
                                </button>

                                <button
                                    onClick={() => {
                                        setShowResult(false);
                                        setCurrentQuestion(0);
                                    }}
                                    className="px-6 py-3 rounded-xl border border-[#7C9A82]/40 text-[#F3EEDD] font-semibold hover:bg-[#161F19] transition"
                                >
                                    Review Answers
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (quizStarted && selectedQuiz) {
        const question =
            selectedQuiz.questionsData[currentQuestion];

        const totalQuestions = selectedQuiz.questionsData.length;
        const progress =
            ((currentQuestion + 1) / totalQuestions) * 100;

        return (
            <div className="min-h-screen bg-[#161F19] text-[#F3EEDD] p-4 sm:p-6 lg:p-8">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div>
                            <p className="text-[#7C9A82] text-sm">
                                {selectedQuiz.course}
                            </p>

                            <h1 className="text-xl sm:text-2xl font-bold mt-1">
                                {selectedQuiz.title}
                            </h1>
                        </div>

                        <div
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${timeLeft <= 60
                                ? "border-[#D6402C] text-[#D6402C]"
                                : "border-[#F2B84B]/40 text-[#F2B84B]"
                                }`}
                        >
                            <Clock3 size={18} />
                            <span className="font-semibold">
                                {formatTime(timeLeft)}
                            </span>
                        </div>
                    </div>

                    <div className="h-2 bg-[#1B241E] rounded-full overflow-hidden mb-6">
                        <div
                            className="h-full bg-[#F2B84B] transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6">
                        <div className="bg-[#1B241E] border border-[#7C9A82]/30 rounded-2xl p-5 sm:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-sm text-[#7C9A82]">
                                    Question {currentQuestion + 1} of{" "}
                                    {totalQuestions}
                                </span>

                                <span className="text-sm text-[#7C9A82]">
                                    {answeredCount}/{totalQuestions} answered
                                </span>
                            </div>

                            <h2 className="text-xl sm:text-2xl font-semibold leading-relaxed mb-8">
                                {question.question}
                            </h2>

                            <div className="space-y-3">
                                {question.options.map((option, index) => {
                                    const selected =
                                        answers[currentQuestion] === option;

                                    return (
                                        <button
                                            key={option}
                                            onClick={() =>
                                                selectAnswer(option)
                                            }
                                            className={`w-full text-left p-4 rounded-xl border transition flex items-center gap-4 ${selected
                                                ? "border-[#F2B84B] bg-[#F2B84B]/10"
                                                : "border-[#7C9A82]/25 hover:border-[#7C9A82] hover:bg-[#161F19]"
                                                }`}
                                        >
                                            <span
                                                className={`w-9 h-9 rounded-lg flex items-center justify-center font-semibold shrink-0 ${selected
                                                    ? "bg-[#F2B84B] text-[#161F19]"
                                                    : "bg-[#161F19] text-[#7C9A82]"
                                                    }`}
                                            >
                                                {String.fromCharCode(
                                                    65 + index
                                                )}
                                            </span>

                                            <span>{option}</span>

                                            {selected && (
                                                <CheckCircle2
                                                    size={20}
                                                    className="ml-auto text-[#F2B84B]"
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="flex justify-between gap-3 mt-8 pt-6 border-t border-[#7C9A82]/20">
                                <button
                                    onClick={() =>
                                        setCurrentQuestion((previous) =>
                                            Math.max(previous - 1, 0)
                                        )
                                    }
                                    disabled={currentQuestion === 0}
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[#7C9A82]/30 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#161F19]"
                                >
                                    <ChevronLeft size={18} />
                                    Previous
                                </button>

                                {currentQuestion === totalQuestions - 1 ? (
                                    <button
                                        onClick={() =>
                                            setShowSubmitModal(true)
                                        }
                                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F2B84B] text-[#161F19] font-semibold hover:bg-[#e5aa3f]"
                                    >
                                        Submit Quiz
                                        <CheckCircle2 size={18} />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            setCurrentQuestion((previous) =>
                                                Math.min(
                                                    previous + 1,
                                                    totalQuestions - 1
                                                )
                                            )
                                        }
                                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F2B84B] text-[#161F19] font-semibold hover:bg-[#e5aa3f]"
                                    >
                                        Next
                                        <ChevronRight size={18} />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="bg-[#1B241E] border border-[#7C9A82]/30 rounded-2xl p-5 h-fit">
                            <h3 className="font-semibold mb-4">
                                Questions
                            </h3>

                            <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-4 gap-2">
                                {selectedQuiz.questionsData.map(
                                    (_, index) => {
                                        const answered =
                                            answers[index] !== undefined;
                                        const active =
                                            currentQuestion === index;

                                        return (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    setCurrentQuestion(index)
                                                }
                                                className={`w-10 h-10 rounded-lg text-sm font-semibold border ${active
                                                    ? "bg-[#F2B84B] text-[#161F19] border-[#F2B84B]"
                                                    : answered
                                                        ? "bg-[#7C9A82]/20 text-[#7C9A82] border-[#7C9A82]"
                                                        : "bg-[#161F19] border-[#7C9A82]/25 text-[#F3EEDD]"
                                                    }`}
                                            >
                                                {index + 1}
                                            </button>
                                        );
                                    }
                                )}
                            </div>

                            <div className="mt-6 pt-5 border-t border-[#7C9A82]/20 space-y-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#F2B84B]" />
                                    Current
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#7C9A82]" />
                                    Answered
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#161F19] border border-[#7C9A82]" />
                                    Not Answered
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showSubmitModal && (
                    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                        <div className="w-full max-w-md bg-[#1B241E] border border-[#7C9A82]/30 rounded-2xl p-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">
                                    Submit Quiz?
                                </h2>

                                <button
                                    onClick={() =>
                                        setShowSubmitModal(false)
                                    }
                                    className="p-2 rounded-lg hover:bg-[#161F19]"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <p className="text-[#7C9A82] mt-4">
                                You have answered {answeredCount} out of{" "}
                                {totalQuestions} questions.
                            </p>

                            {answeredCount < totalQuestions && (
                                <div className="mt-4 p-3 rounded-xl bg-[#D6402C]/10 border border-[#D6402C]/30 text-[#D6402C] text-sm">
                                    You still have unanswered questions.
                                    You can submit now or continue answering.
                                </div>
                            )}

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={() =>
                                        setShowSubmitModal(false)
                                    }
                                    className="flex-1 px-4 py-3 rounded-xl border border-[#7C9A82]/30"
                                >
                                    Continue
                                </button>

                                <button
                                    onClick={submitQuiz}
                                    className="flex-1 px-4 py-3 rounded-xl bg-[#F2B84B] text-[#161F19] font-semibold"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#161F19] text-[#F3EEDD] p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-[#F2B84B] text-[#161F19] flex items-center justify-center">
                                <FileQuestion size={25} />
                            </div>

                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold">
                                    Quizzes
                                </h1>

                                <p className="text-[#7C9A82] mt-1">
                                    Test your knowledge and track your results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-[#1B241E] border border-[#7C9A82]/25 rounded-2xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#7C9A82]">
                                    Total Quizzes
                                </p>
                                <p className="text-2xl font-bold mt-1">
                                    {totalQuizzes}
                                </p>
                            </div>

                            <div className="w-11 h-11 rounded-xl bg-[#F2B84B]/10 flex items-center justify-center">
                                <FileQuestion
                                    size={22}
                                    className="text-[#F2B84B]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1B241E] border border-[#7C9A82]/25 rounded-2xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#7C9A82]">
                                    Available
                                </p>
                                <p className="text-2xl font-bold mt-1">
                                    {availableQuizzes}
                                </p>
                            </div>

                            <div className="w-11 h-11 rounded-xl bg-[#7C9A82]/10 flex items-center justify-center">
                                <PlayCircle
                                    size={22}
                                    className="text-[#7C9A82]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1B241E] border border-[#7C9A82]/25 rounded-2xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#7C9A82]">
                                    Completed
                                </p>
                                <p className="text-2xl font-bold mt-1">
                                    {completedQuizzes}
                                </p>
                            </div>

                            <div className="w-11 h-11 rounded-xl bg-[#7C9A82]/10 flex items-center justify-center">
                                <CheckCircle2
                                    size={22}
                                    className="text-[#7C9A82]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1B241E] border border-[#7C9A82]/25 rounded-2xl p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[#7C9A82]">
                                    Average Score
                                </p>
                                <p className="text-2xl font-bold mt-1">
                                    {averageScore}%
                                </p>
                            </div>

                            <div className="w-11 h-11 rounded-xl bg-[#F2B84B]/10 flex items-center justify-center">
                                <Award
                                    size={22}
                                    className="text-[#F2B84B]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and filters */}
                <div className="bg-[#1B241E] border border-[#7C9A82]/25 rounded-2xl p-4 mb-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search
                                size={19}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7C9A82]"
                            />

                            <input
                                type="text"
                                placeholder="Search quizzes..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-[#161F19] border border-[#7C9A82]/25 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#F2B84B] text-[#F3EEDD] placeholder:text-[#7C9A82]"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {[
                                "All",
                                "Available",
                                "Completed",
                                "Locked",
                            ].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setFilter(item)}
                                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${filter === item
                                        ? "bg-[#F2B84B] text-[#161F19]"
                                        : "border border-[#7C9A82]/25 text-[#7C9A82] hover:bg-[#161F19]"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quiz list */}
                {filteredQuizzes.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {filteredQuizzes.map((quiz) => (
                            <div
                                key={quiz.id}
                                className="bg-[#1B241E] border border-[#7C9A82]/25 rounded-2xl p-5 hover:border-[#7C9A82]/60 transition"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#F2B84B]/10 flex items-center justify-center shrink-0">
                                            <FileQuestion
                                                size={23}
                                                className="text-[#F2B84B]"
                                            />
                                        </div>

                                        <div>
                                            <h2 className="font-semibold text-lg">
                                                {quiz.title}
                                            </h2>

                                            <p className="text-sm text-[#7C9A82] mt-1">
                                                {quiz.course}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${quiz.status === "Available"
                                            ? "bg-[#7C9A82]/15 text-[#7C9A82]"
                                            : quiz.status === "Completed"
                                                ? "bg-[#F2B84B]/15 text-[#F2B84B]"
                                                : "bg-[#D6402C]/10 text-[#D6402C]"
                                            }`}
                                    >
                                        {quiz.status}
                                    </span>
                                </div>

                                <p className="text-sm text-[#7C9A82] leading-6 mt-5">
                                    {quiz.description}
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                                    <div className="bg-[#161F19] rounded-xl p-3">
                                        <div className="flex items-center gap-2 text-[#7C9A82]">
                                            <FileQuestion size={16} />
                                            <span className="text-xs">
                                                Questions
                                            </span>
                                        </div>
                                        <p className="font-semibold mt-1">
                                            {quiz.questions}
                                        </p>
                                    </div>

                                    <div className="bg-[#161F19] rounded-xl p-3">
                                        <div className="flex items-center gap-2 text-[#7C9A82]">
                                            <Clock3 size={16} />
                                            <span className="text-xs">
                                                Duration
                                            </span>
                                        </div>
                                        <p className="font-semibold mt-1">
                                            {quiz.duration} min
                                        </p>
                                    </div>

                                    <div className="bg-[#161F19] rounded-xl p-3">
                                        <div className="flex items-center gap-2 text-[#7C9A82]">
                                            <BookOpen size={16} />
                                            <span className="text-xs">
                                                Level
                                            </span>
                                        </div>
                                        <p className="font-semibold mt-1">
                                            {quiz.difficulty}
                                        </p>
                                    </div>

                                    <div className="bg-[#161F19] rounded-xl p-3">
                                        <div className="flex items-center gap-2 text-[#7C9A82]">
                                            <Award size={16} />
                                            <span className="text-xs">
                                                Attempts
                                            </span>
                                        </div>
                                        <p className="font-semibold mt-1">
                                            {quiz.attempts}/{quiz.maxAttempts}
                                        </p>
                                    </div>
                                </div>

                                {quiz.status === "Completed" && (
                                    <div className="mt-4 p-3 rounded-xl bg-[#F2B84B]/10 border border-[#F2B84B]/20 flex items-center justify-between">
                                        <span className="text-sm text-[#7C9A82]">
                                            Your Score
                                        </span>

                                        <span className="font-bold text-[#F2B84B]">
                                            {quiz.score}%
                                        </span>
                                    </div>
                                )}

                                <div className="flex gap-3 mt-5">
                                    <button
                                        onClick={() =>
                                            setSelectedQuiz(quiz)
                                        }
                                        className="flex-1 px-4 py-3 rounded-xl border border-[#7C9A82]/30 text-[#F3EEDD] font-medium hover:bg-[#161F19] transition"
                                    >
                                        View Details
                                    </button>

                                    {quiz.status === "Available" ? (
                                        <button
                                            onClick={() => startQuiz(quiz)}
                                            className="flex-1 px-4 py-3 rounded-xl bg-[#F2B84B] text-[#161F19] font-semibold hover:bg-[#e5aa3f] transition flex items-center justify-center gap-2"
                                        >
                                            <PlayCircle size={18} />
                                            Start Quiz
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            className="flex-1 px-4 py-3 rounded-xl bg-[#161F19] text-[#7C9A82] cursor-not-allowed"
                                        >
                                            {quiz.status === "Completed"
                                                ? "Completed"
                                                : "Locked"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-[#1B241E] border border-[#7C9A82]/25 rounded-2xl p-12 text-center">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#F2B84B]/10 flex items-center justify-center">
                            <FileQuestion
                                size={30}
                                className="text-[#F2B84B]"
                            />
                        </div>

                        <h2 className="text-xl font-semibold mt-5">
                            No quizzes found
                        </h2>

                        <p className="text-[#7C9A82] mt-2">
                            Try changing your search or filter.
                        </p>
                    </div>
                )}

                {/* Details Modal */}
                {selectedQuiz && !quizStarted && (
                    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                        <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1B241E] border border-[#7C9A82]/30 rounded-2xl">
                            <div className="p-6 border-b border-[#7C9A82]/20 flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-[#7C9A82]">
                                        {selectedQuiz.course}
                                    </p>

                                    <h2 className="text-2xl font-bold mt-1">
                                        {selectedQuiz.title}
                                    </h2>
                                </div>

                                <button
                                    onClick={() => setSelectedQuiz(null)}
                                    className="p-2 rounded-lg hover:bg-[#161F19]"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6">
                                <p className="text-[#7C9A82] leading-7">
                                    {selectedQuiz.description}
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                                    <div className="bg-[#161F19] rounded-xl p-4 text-center">
                                        <FileQuestion
                                            size={20}
                                            className="mx-auto text-[#F2B84B]"
                                        />
                                        <p className="text-xl font-bold mt-2">
                                            {selectedQuiz.questions}
                                        </p>
                                        <p className="text-xs text-[#7C9A82]">
                                            Questions
                                        </p>
                                    </div>

                                    <div className="bg-[#161F19] rounded-xl p-4 text-center">
                                        <Clock3
                                            size={20}
                                            className="mx-auto text-[#F2B84B]"
                                        />
                                        <p className="text-xl font-bold mt-2">
                                            {selectedQuiz.duration}
                                        </p>
                                        <p className="text-xs text-[#7C9A82]">
                                            Minutes
                                        </p>
                                    </div>

                                    <div className="bg-[#161F19] rounded-xl p-4 text-center">
                                        <BookOpen
                                            size={20}
                                            className="mx-auto text-[#F2B84B]"
                                        />
                                        <p className="text-xl font-bold mt-2">
                                            {selectedQuiz.difficulty}
                                        </p>
                                        <p className="text-xs text-[#7C9A82]">
                                            Level
                                        </p>
                                    </div>

                                    <div className="bg-[#161F19] rounded-xl p-4 text-center">
                                        <Award
                                            size={20}
                                            className="mx-auto text-[#F2B84B]"
                                        />
                                        <p className="text-xl font-bold mt-2">
                                            {selectedQuiz.maxAttempts}
                                        </p>
                                        <p className="text-xs text-[#7C9A82]">
                                            Max Attempts
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-7">
                                    <h3 className="font-semibold">
                                        Quiz Instructions
                                    </h3>

                                    <div className="mt-3 space-y-2 text-sm text-[#7C9A82]">
                                        <p>
                                            • Answer all questions carefully.
                                        </p>
                                        <p>
                                            • The timer starts when you begin
                                            the quiz.
                                        </p>
                                        <p>
                                            • You can navigate between
                                            questions.
                                        </p>
                                        <p>
                                            • Your quiz will be submitted when
                                            the timer reaches zero.
                                        </p>
                                        <p>
                                            • You can use your remaining
                                            attempts if available.
                                        </p>
                                    </div>
                                </div>

                                {selectedQuiz.status === "Completed" && (
                                    <div className="mt-6 p-4 rounded-xl bg-[#F2B84B]/10 border border-[#F2B84B]/20 flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-[#7C9A82]">
                                                Previous Score
                                            </p>
                                            <p className="text-2xl font-bold text-[#F2B84B]">
                                                {selectedQuiz.score}%
                                            </p>
                                        </div>

                                        <CheckCircle2
                                            size={32}
                                            className="text-[#7C9A82]"
                                        />
                                    </div>
                                )}

                                <div className="flex gap-3 mt-7">
                                    <button
                                        onClick={() =>
                                            setSelectedQuiz(null)
                                        }
                                        className="flex-1 px-5 py-3 rounded-xl border border-[#7C9A82]/30"
                                    >
                                        Close
                                    </button>

                                    {selectedQuiz.status === "Available" && (
                                        <button
                                            onClick={() =>
                                                startQuiz(selectedQuiz)
                                            }
                                            className="flex-1 px-5 py-3 rounded-xl bg-[#F2B84B] text-[#161F19] font-semibold flex items-center justify-center gap-2"
                                        >
                                            <PlayCircle size={18} />
                                            Start Quiz
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;