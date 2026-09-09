export const SupportKnowledgeSessionGqlTypeDefs = `
  type SupportKnowledgeSession {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getSupportKnowledgeSession(id: ID!): SupportKnowledgeSession
    listSupportKnowledgeSessions(tenantId: String!, limit: Int): [SupportKnowledgeSession!]!
  }

  extend type Mutation {
    createSupportKnowledgeSession(tenantId: String!, code: String!, name: String!): SupportKnowledgeSession!
    deleteSupportKnowledgeSession(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeSessionGqlResolvers = {
  Query: {
    getSupportKnowledgeSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
