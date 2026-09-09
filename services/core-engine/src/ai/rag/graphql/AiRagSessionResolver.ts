export const AiRagSessionGqlTypeDefs = `
  type AiRagSession {
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
    getAiRagSession(id: ID!): AiRagSession
    listAiRagSessions(tenantId: String!, limit: Int): [AiRagSession!]!
  }

  extend type Mutation {
    createAiRagSession(tenantId: String!, code: String!, name: String!): AiRagSession!
    deleteAiRagSession(id: ID!): Boolean!
  }
`;

export const AiRagSessionGqlResolvers = {
  Query: {
    getAiRagSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
