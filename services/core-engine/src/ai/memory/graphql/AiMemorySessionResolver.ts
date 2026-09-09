export const AiMemorySessionGqlTypeDefs = `
  type AiMemorySession {
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
    getAiMemorySession(id: ID!): AiMemorySession
    listAiMemorySessions(tenantId: String!, limit: Int): [AiMemorySession!]!
  }

  extend type Mutation {
    createAiMemorySession(tenantId: String!, code: String!, name: String!): AiMemorySession!
    deleteAiMemorySession(id: ID!): Boolean!
  }
`;

export const AiMemorySessionGqlResolvers = {
  Query: {
    getAiMemorySession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemorySession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
