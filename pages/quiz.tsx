// pages/quiz.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
      "In a group setting, I’m most likely to...",
      "When stress hits, my natural response is to...",
      "I feel most confident when I...",
      "People often come to me for...",
      "My leadership style could be described as...",
      "When it comes to decision-making, I tend to...",
      "If there’s tension in a room, I usually...",
      "I believe the most powerful kind of leadership is...",
      "I sometimes feel underestimated because...",
      "When I think about my future as a leader, I feel...",
      "When leading others, I believe trust is built by...",
      "The best leadership decisions are often made...",
      "My presence as a leader is most felt when I...",
      "I define authenticity in leadership as...",
      "I connect most deeply with leaders who...",
      "When it comes to how I lead, I often feel:",
      "Others often expect me to lead by:",
      "I most admire leaders who:",
      "If I’m honest, I sometimes feel overlooked because:",
      "My leadership instinct is to:"
    ];

const options = [
      [ // Question 1
        "A. Keep things grounded and make sure everyone stays calm",
        "B. Listen carefully and offer a perspective others may not have considered",
        "C. Notice who hasn’t spoken and draw them in",
        "D. Keep the team on track with a clear sense of direction",
        "E. Stay quiet but speak up when something really matters"
      ],
      [ // Question 2
        "A. Stay steady and offer reassurance to others",
        "B. Take a step back and reflect before reacting",
        "C. Check in on how others are feeling",
        "D. Focus on what needs to get done and make a plan",
        "E. Feel the intensity, but push through with quiet determination"
      ],
      [ // Question 3
        "A. Help others feel safe and secure",
        "B. Notice something others didn’t see coming",
        "C. Create a moment of connection or understanding",
        "D. Solve a complex problem or make a thoughtful decision",
        "E. Take a stand for something I believe in, even if it's hard"
      ],
      [ // Question 4
        "A. Stability during chaotic times",
        "B. Advice when they want to understand something deeper",
        "C. Emotional support or a compassionate ear",
        "D. Clarity and structure",
        "E. Moral guidance or encouragement when they’re feeling lost" 
      ],
      [ // Question 5
        "A. Calm and dependable ",
        "B. Quietly insightful",
        "C. Empathetic and inclusive",
        "D. Intentional and strategic ",
        "E. Purposeful and principled"
      ],
      [ // Question 6
        "A. Help others feel comfortable with the choice",
        "B. Weigh all perspectives before moving forward ",
        "C. Consider how it will affect people personally",
        "D. Map out the risks and next steps clearly",
        "E. Choose what feels most aligned with my values"
      ],
      [ // Question 7
        "A. Keep my voice steady and lower the temperature",
        "B. Watch for subtle cues others might miss ",
        "C. Try to bring people together through understanding",
        "D. Offer a plan to move forward constructively",
        "E. Name the truth that’s going unspoken"
      ],
      [ // Question 8
        "A. Calm under pressure",
        "B. Intellectually and emotionally aware",
        "C. Deeply human and compassionate",
        "D. Clear-headed and purposeful ",
        "E. Values-driven and quietly bold"
      ],
      [ // Question 9
        "A. I don’t make a big deal of my contributions",
        "B. I observe more than I speak",
        "C. I prioritize people over performance",
        "D. I don’t push for credit—I just get things done",
        "E. I’m driven by quiet conviction, not visibility"
      ],
      [ // Question 10
        "A. Ready to offer calm in the chaos",
        "B. Excited to lead through insight and reflection",
        "C. Eager to create meaningful relationships and impact",
        "D. Motivated to lead with clarity and direction",
        "E. Called to lead with heart, even if it’s not flashy"
      ],
      [ // Question 11
        "A. Being consistent and emotionally grounded",
        "B. Making space for others’ voices to be heard",
        "C. Following through on quiet commitments and earning respect over time",
        "D. Asking thoughtful questions that show you’re listening",
        "E. Showing up as my whole self, not just my role"
      ],
      [ // Question 12
        "A. With awareness of how they’ll affect others emotionally ",
        "B. By tuning into your instincts as well as the data",
        "C. Through small experiments that reveal what actually works",
        "D. After pausing to reflect—not react—especially under pressure ",
        "E. By asking: does this reflect who I am and what I stand for?"
      ],
      [ // Question 13
        "A. Help people feel seen and understood ",
        "B. Offer a perspective that shifts how others see the problem",
        "C. Quietly guide the conversation in a more thoughtful direction",
        "D. Steady the group with calm and focus when emotions run high",
        "E. Show courage by being transparent and real"
      ],
      [ // Question 14
        "A. Staying grounded in your values, even under pressure",
        "B. Being honest about your doubts and limitations",
        "C. Leading in alignment with your actions, not just your words",
        "D. Letting people see who you are, even if you don’t have it all figured outg",
        "E. Leading in a way that reflects your character, not just your role"
      ],
      [ // Question 15
        "A. Are quietly strong and deeply human",
        "B. Lead by example, not ego",
        "C. Make room for others to shine instead of seeking the spotlight",
        "D. Earn trust by listening first and acting second",
        "E. Are vulnerable enough to admit they don’t have all the answers"
      ],
      [ // Question 16
        "A. Like I need to be more visible to be taken seriously", // T
        "B. Like I downplay my strengths because they’re not the 'typical' leadership traits", // U
        "C. Comfortable in my style, even if it’s different from the norm", // U
        "D. Pressured to be more assertive or vocal than I naturally am", // T
        "E. Like I’m still figuring out what kind of leader I want to be" // Neutral
      ],
      [ // Question 17
        "A. Taking charge and being decisive", // T
        "B. Listening and supporting the group", // U
        "C. Providing emotional stability and encouragement", // U
        "D. Setting goals and holding others accountable", // T
        "E. Explaining ideas with clarity and logic", // Neutral
      ],
      [ // Question 18
        "A. Speak with authority and inspire through presence", // T
        "B. Lead with empathy, even when it’s difficult", // U
        "C. Work behind the scenes to elevate others",
        "D. Make bold moves and take clear control", // T
        "E. Adapt my style based on what the situation or team needs" // Neutral
      ],
      [ // Question 19
        "A. I speak up early to make sure my ideas are heard", // T
        "B. I prefer to let others speak first", // U
        "C. I’m not flashy or outspoken in meetings", // U
        "D. I’m comfortable taking the lead in group settings", // T
        "E. None of these—I feel seen and heard" // Neutral
      ],
      [ // Question 20
        "A. Step in and organize others quickly", // T
        "B. Hold space and reflect before acting", // U
        "C. Provide calm and emotional steadiness", // U
        "D. Share a plan and set direction", // T
        "E. Encourage others to speak up first" // U
      ],
    ];
    const spectrumMap: Record<string, number> = {
      A: 1, // Traditional
      B: -1, // Unlikely
      C: -1, // Unlikely
      D: 1, // Traditional
      E: 0   // Neutral
    };

    const archetypeMap: Record<string, string> = {
      A: 'Steady Anchor',
      B: 'Insightful Observer',
      C: 'Rational Bridge',
      D: 'Quiet Strategist',
      E: 'Humble Fire'
    };

    function computeResults(answers: string[]) {
      let spectrumScore = 0;
      let modifierScore = 0;

      const archetypeTally: Record<string, number> = {
        'Steady Anchor': 0,
        'Insightful Observer': 0,
        'Rational Bridge': 0,
        'Quiet Strategist': 0,
        'Humble Fire': 0
      };

      // Questions 1–15: Archetype + Spectrum
      for (let i = 0; i < 15; i++) {
        const val = answers[i];
        spectrumScore += spectrumMap[val] ?? 0;
        archetypeTally[archetypeMap[val]]++;
      }

      // Questions 16–20: Modifier Spectrum Only
      for (let i = 15; i < 20; i++) {
        const val = answers[i];
        modifierScore += spectrumMap[val] ?? 0; // Use same mapping
      }

      const totalScore = spectrumScore + modifierScore;

      const spectrumType =
        totalScore <= -3 ? 'Unlikely-Aligned' :
        totalScore <= -1 ? 'Leaning Unlikely' :
        totalScore === 0 ? 'Integrated Blend' :
        totalScore <= 2 ? 'Leaning Traditional' :
        'Traditional-Aligned';

      const dominantArchetype = Object.entries(archetypeTally)
        .sort((a, b) => b[1] - a[1])[0][0];

      return {
        dominantArchetype,
        spectrumScore,
        modifierScore,
        totalScore,
        spectrumType
      };
    }

    export default function Quiz() {
      const router = useRouter();
      const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
      const [currentIndex, setCurrentIndex] = useState(0);

      const handleSelect = (val: string) => {
        const updated = [...answers];
        updated[currentIndex] = val;
        setAnswers(updated);
      };

      const next = () => {
        if (!answers[currentIndex]) return alert("Please select an answer.");
        if (currentIndex === questions.length - 1) {
          const {
            dominantArchetype,
            spectrumScore,
            modifierScore,
            totalScore,
            spectrumType
          } = computeResults(answers);

          localStorage.setItem("quizAnswers", JSON.stringify(answers));
          localStorage.setItem("dominantArchetype", dominantArchetype);
          localStorage.setItem("spectrumScore", spectrumScore.toString());
          localStorage.setItem("modifierScore", modifierScore.toString());
          localStorage.setItem("totalScore", totalScore.toString());
          localStorage.setItem("spectrumType", spectrumType);

          router.push('/results');
        } else {
          setCurrentIndex(i => i + 1);
        }
      };

      const back = () => setCurrentIndex(i => Math.max(0, i - 1));

      return (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded">
          <h2 className="text-xl font-bold mb-2">Question {currentIndex + 1}</h2>
          <p className="mb-4">{questions[currentIndex]}</p>
          <div className="space-y-2">
            {options[currentIndex].map(opt => (
              <label key={opt} className="block">
                <input
                  type="radio"
                  name={`q${currentIndex}`}
                  value={opt.charAt(0)}
                  checked={answers[currentIndex] === opt.charAt(0)}
                  onChange={() => handleSelect(opt.charAt(0))}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <button onClick={back} className="bg-gray-300 px-4 py-2 rounded">Back</button>
            <button onClick={next} className="bg-green-600 text-white px-4 py-2 rounded">
              {currentIndex === questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      );
    }
