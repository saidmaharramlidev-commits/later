import { setStep, setTopic, setTopicName } from "@/redux/counterSlice";
import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"


export const fieldTopics = {
    Skills: [
        { id: 'language', name: "Learning a Language" },
        { id: 'instrument', name: "Playing an Instrument" },
        { id: 'drawing', name: "Drawing or Painting" },
        { id: 'journal', name: "Writing a Journal" },
        { id: "speaking", name: "Public Speaking Practice" },
        { id: "projects", name: "Coding Projects" },
        { id: "photography", name: "Photography" },
        { id: "cooking", name: "Cooking New Recipes" },
        { id: "magic", name: "Learning Magic Tricks", },
        { id: "blog", name: "Building a Personal Blog" }
    ],
    Health: [
        { id: 'walks', name: "Morning Walks", },
        { id: 'yoga', name: "Yoga Sessions", },
        { id: 'workouts', name: "Home Workouts", },
        { id: 'healthy', name: "Healthy Cooking", },
        { id: 'meditation', name: "Meditation", },
        { id: 'stretching', name: "Stretching Routine" },
        { id: 'water', name: "Drinking More Water" },
        { id: 'sleep', name: "Sleep Routine" },
        { id: 'cycling', name: "Cycling", },
        { id: 'cardio', name: "Home Cardio", }
    ],
    Money: [
        { id: 'saving', name: "Start Saving" },
        { id: 'expenses', name: "Track Expenses" },
        { id: 'budget', name: "Set a Budget", },
        { id: 'unused', name: "Sell Unused Items" },
        { id: 'account', name: "Open a Savings Account" },
        { id: 'hustle', name: "Start a Side Hustle" },
        { id: 'inverstments', name: "Learn About Investarn" },
        { id: 'fund', name: "Create an Emergency Fund" },
        { id: 'meal', name: "Budget Meal Planning", },
        { id: 'cashback', name: "Use Cashback Apps", }
    ],
    Career: [
        { id: 'resume', name: "Update Resume" },
        { id: 'apply', name: "Apply for Jobs" },
        { id: 'portfolio', name: "Build Portfolio" },
        { id: 'freelancing', name: "Freelancing" },
        { id: 'networking', name: "Networking Online" },
        { id: 'linkedin', name: "LinkedIn Profile" },
        { id: 'tool', name: "Learn a Work Tool", },
        { id: 'webinars', name: "Attend Webinars", },
        { id: 'volunteer', name: "Volunteer Projects" },
        { id: 'side', name: "Side Projects", }
    ],
    Growth: [
        { id: 'book', name: "Read a Book" },
        { id: 'daily', name: "Daily Journaling" },
        { id: 'goals', name: "Set Daily Goals" },
        { id: 'meditation', name: "Meditation" },
        { id: 'hobby', name: "Learn New Hobby" },
        { id: 'space', name: "Declutter Space" },
        { id: 'challange', name: "Try a Challenge" },
        { id: 'achivements', name: "Reflect on Achievements" },
        { id: 'gratitude', name: "Practice Gratitude" },
        { id: 'detox', name: "Digital Detox" }
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
                {field === 'Skills' ? "Skills & Learning" : ''}
                {field === 'Health' ? "Health & Fitness" : ''}
                {field === 'Money' ? "Money & Saving" : ''}
                {field === 'Career' ? "Career & Work" : ''}
                {field === 'Growth' ? "Personal Growth" : ''} )
            </span>


            <div id="topics-wrapper">
                {
                    topics.map((topic) => (
                        <div key={topic.id} className="topic" onClick={() => {
                            dispatch(setStep('when'))
                            dispatch(setTopic(topic.id))
                            dispatch(setTopicName(topic.name))
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