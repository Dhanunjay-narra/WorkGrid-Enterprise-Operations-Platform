export const AiAgentConversationSessionTypeDefs = `
  type AiAgentConversationSession {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getAiAgentConversationSession(id: ID!): AiAgentConversationSession
    listAiAgentConversationSessions(tenantId: String!): [AiAgentConversationSession!]!
  }
`;

export const AiAgentConversationSessionResolvers = {
  Query: {
    getAiAgentConversationSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "AiAgentConversationSession", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listAiAgentConversationSessions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "AiAgentConversationSession", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
