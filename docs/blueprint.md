# **App Name**: GoranAI Chat

## Core Features:

- User Message Input: An interactive input field for users to type and send messages to the AI assistant.
- AI Response Generation: Utilizes the Gemini API as a tool to process user queries and generate contextually relevant AI responses in Kurdish.
- Real-time Message Display: Dynamically display sent user messages and received AI responses in a chronological chat thread.
- Chat History Display: Persistent display of the current conversation history, allowing users to scroll through past messages.
- Typing/Loading Indicator: Provide visual feedback to the user while the AI is processing a request.
- Initial Empty State & Welcome: Display a friendly welcome message and guidance when no conversation has started, matching the Flutter app's feel.
- Basic Error Handling: Gracefully handle API and network errors, informing the user about connectivity issues or server problems.

## Style Guidelines:

- Color scheme: A sophisticated dark mode is employed, enhancing readability and reducing eye strain, suitable for extended use typical of chat applications.
- Primary color: A bold and dynamic blue (#2563EB) is used for interactive elements like the send button and user message bubbles, signifying AI interaction and user action.
- Background color: A deep, muted indigo (#16181D) forms the base of the interface, providing a calming backdrop that allows content to stand out while maintaining a consistent visual identity with the primary blue hue.
- Accent color: A soft aquamarine (#8CD9CD) serves as an accent, strategically placed for subtle highlights and complementary visual cues without overpowering the dark theme.
- Body and headline font: 'Inter' sans-serif, offering excellent readability and a modern, neutral aesthetic, well-suited for displaying conversational text and interface elements cleanly across various screen sizes.
- Utilize modern, symbolic icons for core actions like sending messages and AI representation, maintaining clarity and an uncluttered look.
- Responsive chat interface: A clean, two-panel layout with a scrollable message history, topped by a minimal header, and a persistent, bottom-anchored input area ensures an intuitive user experience on all devices.
- Subtle animations: Gentle fade-ins for new messages and a smooth linear progress indicator during AI response generation will enhance user feedback and perceived responsiveness.