// Fully guided conversation tree system
export interface ConversationNode {
  id: string
  responseType: 'about' | 'projects' | 'skills' | 'contact' | 'location' | 'text' | 'project-detail'
  responseData: any
  options: Array<{ label: string; actionId: string }>
}

// Conversation tree - all possible states and transitions
export const conversationTree: Record<string, ConversationNode> = {
  // Root welcome node
  'welcome': {
    id: 'welcome',
    responseType: 'text',
    responseData: "Hi! I'm Karan Baboota, a Software Engineer at Oracle specializing in Generative AI Systems. What would you like to know?",
    options: [
      { label: 'About Me', actionId: 'about' },
      { label: 'My Projects', actionId: 'projects-list' },
      { label: 'Skills & Technologies', actionId: 'skills' },
      { label: 'Contact Info', actionId: 'contact' },
      { label: 'Location', actionId: 'location' }
    ]
  },

  // About Me
  'about': {
    id: 'about',
    responseType: 'about',
    responseData: {
      name: 'Karan Baboota',
      title: 'Software Engineer @ Oracle',
      description: "I'm a Software Engineer at Oracle specializing in Generative AI Systems. I'm passionate about building intelligent applications using Large Language Models, RAG systems, and agentic architectures.",
      details: [
        "Currently working at Oracle Bangalore, designing and implementing MCP servers, RAG pipelines, and AI-powered applications",
        "Building conversational AI bots and auto-generating test cases used by 1,000+ employees",
        "Passionate about leveraging LangChain, Ollama, and fine-tuned LLMs to create intelligent systems"
      ]
    },
    options: [
      { label: 'See My Projects', actionId: 'projects-list' },
      { label: 'View Skills', actionId: 'skills' },
      { label: 'Get in Touch', actionId: 'contact' },
      { label: 'Back to Topics', actionId: 'welcome' }
    ]
  },

  // Projects List
  'projects-list': {
    id: 'projects-list',
    responseType: 'projects',
    responseData: {
      projects: [
        {
          title: 'Inbox0 — AI-Powered Email Assistant',
          description: 'Built an end-to-end AI-powered email automation platform that analyzes, categorizes, and labels incoming emails in real time using autonomous AI agents.',
          tags: ['FastAPI', 'NextJS', 'Vercel', 'GPT APIs', 'AWS'],
          link: 'https://inbox0.app',
          linkText: 'View Website'
        },
        {
          title: 'GenAI4Test Initiative',
          description: 'Built an agentic framework with RAG pipelines (LangChain, Ollama) and fine-tuned LLMs to auto-generate Exadata-specific test cases, accelerating issue resolution by at least 50%.',
          tags: ['LangChain', 'Ollama', 'RAG', 'Python', 'FastAPI'],
          link: null,
          linkText: null
        },
        {
          title: 'BookIIIT',
          description: 'Developed an end-to-end room booking system for classes, activities, and events at IIITD. Automated booking approval and conflict checking.',
          tags: ['ReactJS', 'NextJS', 'Redis'],
          link: 'https://github.com/karan20210/BookIIIT',
          linkText: 'View on GitHub'
        },
        {
          title: 'RAFT-based Consensus',
          description: 'Implemented the Raft consensus algorithm with leader lease modification for faster reads, simulating production-grade distributed systems.',
          tags: ['Python', 'gRPC', 'Google Cloud'],
          link: 'https://github.com/karan20210/raft-consensus',
          linkText: 'View on GitHub'
        }
      ]
    },
    options: [
      { label: 'Learn about Inbox0', actionId: 'project-inbox0' },
      { label: 'Learn about GenAI4Test', actionId: 'project-genai4test' },
      { label: 'Learn about BookIIIT', actionId: 'project-bookiiit' },
      { label: 'Learn about RAFT Consensus', actionId: 'project-raft' },
      { label: 'About Me', actionId: 'about' },
      { label: 'Back to Topics', actionId: 'welcome' }
    ]
  },

  // Individual Project Details
  'project-inbox0': {
    id: 'project-inbox0',
    responseType: 'project-detail',
    responseData: {
      title: 'Inbox0 — AI-Powered Email Assistant',
      description: 'Built an end-to-end AI-powered email automation platform that analyzes, categorizes, and labels incoming emails in real time using autonomous AI agents.',
      tags: ['FastAPI', 'NextJS', 'Vercel', 'GPT APIs', 'AWS'],
      link: 'https://inbox0.app',
      linkText: 'View Website',
      details: [
        'Real-time email analysis and categorization',
        'Autonomous AI agents for email processing',
        'Built with modern web technologies and cloud infrastructure'
      ]
    },
    options: [
      { label: 'View All Projects', actionId: 'projects-list' },
      { label: 'See My Skills', actionId: 'skills' },
      { label: 'Back to Topics', actionId: 'welcome' }
    ]
  },

  'project-genai4test': {
    id: 'project-genai4test',
    responseType: 'project-detail',
    responseData: {
      title: 'GenAI4Test Initiative',
      description: 'Built an agentic framework with RAG pipelines (LangChain, Ollama) and fine-tuned LLMs to auto-generate Exadata-specific test cases, accelerating issue resolution by at least 50%.',
      tags: ['LangChain', 'Ollama', 'RAG', 'Python', 'FastAPI'],
      link: null,
      linkText: null,
      details: [
        'Agentic framework for automated test case generation',
        'RAG pipelines using LangChain and Ollama',
        'Fine-tuned LLMs for Exadata-specific scenarios',
        '50%+ improvement in issue resolution time'
      ]
    },
    options: [
      { label: 'View All Projects', actionId: 'projects-list' },
      { label: 'See My Skills', actionId: 'skills' },
      { label: 'Back to Topics', actionId: 'welcome' }
    ]
  },

  'project-bookiiit': {
    id: 'project-bookiiit',
    responseType: 'project-detail',
    responseData: {
      title: 'BookIIIT',
      description: 'Developed an end-to-end room booking system for classes, activities, and events at IIITD. Automated booking approval and conflict checking.',
      tags: ['ReactJS', 'NextJS', 'Redis'],
      link: 'https://github.com/karan20210/BookIIIT',
      linkText: 'View on GitHub',
      details: [
        'End-to-end room booking system',
        'Automated approval workflows',
        'Conflict detection and resolution',
        'Built for IIIT Delhi campus'
      ]
    },
    options: [
      { label: 'View All Projects', actionId: 'projects-list' },
      { label: 'See My Skills', actionId: 'skills' },
      { label: 'Back to Topics', actionId: 'welcome' }
    ]
  },

  'project-raft': {
    id: 'project-raft',
    responseType: 'project-detail',
    responseData: {
      title: 'RAFT-based Consensus',
      description: 'Implemented the Raft consensus algorithm with leader lease modification for faster reads, simulating production-grade distributed systems.',
      tags: ['Python', 'gRPC', 'Google Cloud'],
      link: 'https://github.com/karan20210/raft-consensus',
      linkText: 'View on GitHub',
      details: [
        'Raft consensus algorithm implementation',
        'Leader lease modification for performance',
        'Production-grade distributed systems simulation',
        'Built with Python and gRPC'
      ]
    },
    options: [
      { label: 'View All Projects', actionId: 'projects-list' },
      { label: 'See My Skills', actionId: 'skills' },
      { label: 'Back to Topics', actionId: 'welcome' }
    ]
  },

  // Skills
  'skills': {
    id: 'skills',
    responseType: 'skills',
    responseData: {
      categories: [
        {
          title: 'Languages',
          skills: ['Python', 'Java', 'JavaScript', 'C++', 'C', 'Bash']
        },
        {
          title: 'Frameworks & Libraries',
          skills: ['LangChain', 'FastAPI', 'ReactJS', 'NodeJS', 'NextJS', 'Django', 'FAISS']
        },
        {
          title: 'Databases',
          skills: ['Oracle DB', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
        },
        {
          title: 'Technologies',
          skills: ['MCP', 'RAGs', 'gRPC', 'Hugging Face', 'Ollama', 'REST APIs', 'Git', 'Docker']
        }
      ]
    },
    options: [
      { label: 'See My Projects', actionId: 'projects-list' },
      { label: 'About Me', actionId: 'about' },
      { label: 'Get in Touch', actionId: 'contact' },
      { label: 'Back to Topics', actionId: 'welcome' }
    ]
  },

  // Contact
  'contact': {
    id: 'contact',
    responseType: 'contact',
    responseData: {
      email: 'karanbaboota@gmail.com',
      phone: '+91-7291070242',
      github: 'https://github.com/karan20210',
      linkedin: 'https://www.linkedin.com/in/karan-baboota',
      message: "I'm always open to discussing new opportunities, collaborations, or interesting AI projects. Feel free to drop me a message!"
    },
    options: [
      { label: 'See My Projects', actionId: 'projects-list' },
      { label: 'View Skills', actionId: 'skills' },
      { label: 'About Me', actionId: 'about' },
      { label: 'Back to Topics', actionId: 'welcome' }
    ]
  },

  // Location
  'location': {
    id: 'location',
    responseType: 'location',
    responseData: {
      city: 'Delhi',
      country: 'India',
      company: 'Oracle',
      remote: true,
      message: "I'm currently based in Delhi, India, working as a Software Engineer at Oracle. I'm open to remote opportunities and collaborations worldwide!"
    },
    options: [
      { label: 'Get in Touch', actionId: 'contact' },
      { label: 'See My Projects', actionId: 'projects-list' },
      { label: 'About Me', actionId: 'about' },
      { label: 'Back to Topics', actionId: 'welcome' }
    ]
  }
}

// Get node by action ID
export function getNodeByActionId(actionId: string): ConversationNode | null {
  return conversationTree[actionId] || null
}

// Get welcome node (root)
export function getWelcomeNode(): ConversationNode {
  return conversationTree['welcome']
}
