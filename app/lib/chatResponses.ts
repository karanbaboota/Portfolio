// Types for structured chat responses
export type ResponseType = 'text' | 'about' | 'projects' | 'skills' | 'contact' | 'location' | 'flow' | 'project-detail'

export interface ChatResponse {
  type: ResponseType
  content: any
  options?: Array<{ label: string; actionId: string }>
}

// Import conversation tree
import { getNodeByActionId, getWelcomeNode, ConversationNode } from './conversationFlows'

// Convert conversation node to chat response
function nodeToResponse(node: ConversationNode): ChatResponse {
  return {
    type: node.responseType,
    content: node.responseData,
    options: node.options
  }
}

// Simple action-ID based lookup
export const getChatResponse = (actionId: string): ChatResponse => {
  // If actionId is empty or 'welcome', return welcome node
  if (!actionId || actionId === 'welcome') {
    return nodeToResponse(getWelcomeNode())
  }

  // Look up node by action ID
  const node = getNodeByActionId(actionId)
  
  if (node) {
    return nodeToResponse(node)
  }

  // Fallback to welcome if action ID not found
  return nodeToResponse(getWelcomeNode())
}

// Map old query-based nav items to action IDs (for backward compatibility with NavCards)
export const mapQueryToActionId = (query: string): string => {
  const lowerQuery = query.toLowerCase().trim()
  
  if (lowerQuery.includes('who are you') || lowerQuery.includes('about') || lowerQuery.includes('me')) {
    return 'about'
  }
  if (lowerQuery.includes('project')) {
    return 'projects-list'
  }
  if (lowerQuery.includes('skill')) {
    return 'skills'
  }
  if (lowerQuery.includes('contact')) {
    return 'contact'
  }
  if (lowerQuery.includes('location') || lowerQuery.includes('where')) {
    return 'location'
  }
  
  return 'welcome'
}
