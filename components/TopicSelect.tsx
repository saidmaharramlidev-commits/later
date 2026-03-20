import { setStep, setTopic } from "@/redux/counterSlice";
import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"


export const fieldTopics = {
    skills: [
        { id: 1, name: "Learning a Language", description: "Start now and fluency comes faster." },
        { id: 2, name: "Playing an Instrument", description: "Pick up a guitar or piano today." },
        { id: 3, name: "Drawing or Painting", description: "Express creativity from day one." },
        { id: 4, name: "Writing a Journal", description: "Document thoughts and ideas immediately." },
        { id: 5, name: "Public Speaking Practice", description: "Start small to gain confidence." },
        { id: 6, name: "Coding Projects", description: "Build small projects today and learn faster." },
        { id: 7, name: "Photography", description: "Start taking photos and improve skills instantly." },
        { id: 8, name: "Cooking New Recipes", description: "Experiment in the kitchen today." },
        { id: 9, name: "Learning Magic Tricks", description: "Start impressing people immediately." },
        { id: 10, name: "Building a Personal Blog", description: "Share your thoughts and projects today." }
    ],
    health: [
        { id: 1, name: "Morning Walks", description: "Start moving now for long-term health." },
        { id: 2, name: "Yoga Sessions", description: "Improve flexibility starting today." },
        { id: 3, name: "Home Workouts", description: "Get stronger without leaving home." },
        { id: 4, name: "Healthy Cooking", description: "Eat better from today onward." },
        { id: 5, name: "Meditation", description: "Calm your mind starting now." },
        { id: 6, name: "Stretching Routine", description: "Prevent stiffness with daily stretches." },
        { id: 7, name: "Drinking More Water", description: "Hydrate now for better energy." },
        { id: 8, name: "Sleep Routine", description: "Start going to bed on time tonight." },
        { id: 9, name: "Cycling", description: "Hop on a bike and move immediately." },
        { id: 10, name: "Home Cardio", description: "Boost fitness with simple exercises today." }
    ],
    money: [
        { id: 1, name: "Start Saving", description: "Even a small amount today matters." },
        { id: 2, name: "Track Expenses", description: "Know where your money goes immediately." },
        { id: 3, name: "Set a Budget", description: "Plan spending and control finances today." },
        { id: 4, name: "Sell Unused Items", description: "Make extra money starting now." },
        { id: 5, name: "Open a Savings Account", description: "Start storing money safely today." },
        { id: 6, name: "Start a Side Hustle", description: "Pick a small project and earn fast." },
        { id: 7, name: "Learn About Investments", description: "Research today to earn tomorrow." },
        { id: 8, name: "Create an Emergency Fund", description: "Start saving for the unexpected." },
        { id: 9, name: "Budget Meal Planning", description: "Save money while eating better." },
        { id: 10, name: "Use Cashback Apps", description: "Start saving instantly on purchases." }
    ],
    career: [
        { id: 1, name: "Update Resume", description: "Make your profile ready today." },
        { id: 2, name: "Apply for Jobs", description: "Even one application counts now." },
        { id: 3, name: "Build Portfolio", description: "Showcase your work starting today." },
        { id: 4, name: "Freelancing", description: "Start small gigs immediately." },
        { id: 5, name: "Networking Online", description: "Connect with people today." },
        { id: 6, name: "LinkedIn Profile", description: "Set up a profile for opportunities." },
        { id: 7, name: "Learn a Work Tool", description: "Pick Excel, Figma, or others today." },
        { id: 8, name: "Attend Webinars", description: "Gain knowledge starting now." },
        { id: 9, name: "Volunteer Projects", description: "Get experience immediately." },
        { id: 10, name: "Side Projects", description: "Start building something small today." }
    ],
    growth: [
        { id: 1, name: "Read a Book", description: "Start your personal growth today." },
        { id: 2, name: "Daily Journaling", description: "Reflect and improve from now." },
        { id: 3, name: "Set Daily Goals", description: "Even small steps today matter." },
        { id: 4, name: "Meditation", description: "Develop calm and focus instantly." },
        { id: 5, name: "Learn New Hobby", description: "Pick up painting, music, or sport today." },
        { id: 6, name: "Declutter Space", description: "Organize your environment now." },
        { id: 7, name: "Try a Challenge", description: "Push your limits starting today." },
        { id: 8, name: "Reflect on Achievements", description: "See progress and plan next steps." },
        { id: 9, name: "Practice Gratitude", description: "Write 3 things today to improve mindset." },
        { id: 10, name: "Digital Detox", description: "Take a break from screens today." }
    ]
};

function TopicSelect() {

    const dispatch = useDispatch()

    const { field } = useSelector((state: RootState) => state.counter)

    const topics = field ? fieldTopics[field as keyof typeof fieldTopics] : [];



    return (
        <div id="mainTopic">
            <h1>Select your topic to continue →</h1>
            <span>(
                {field === 'skills' ? "Skills & Learning" : ''}
                {field === 'health' ? "Health & Fitness" : ''}
                {field === 'money' ? "Money & Saving" : ''}
                {field === 'career' ? "Career & Work" : ''}
                {field === 'growth' ? "Personal Growth" : ''} )
            </span>


            <div id="topics-wrapper">
                {
                    topics.map((topic) => (
                        <div key={topic.id} className="topic" onClick={() => {
                            dispatch(setStep('when'))
                            dispatch(setTopic(topic.name))
                        }}>
                            <p>{topic.name}</p>

                        </div>
                    ))
                }

            </div>

            <div className="ctaOfField" onClick={() => dispatch(setStep('field'))}>{'< Back'}</div>




        </div>
    )
}

export default TopicSelect