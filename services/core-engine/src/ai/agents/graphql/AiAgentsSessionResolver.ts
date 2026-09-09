export const AiAgentsSessionGqlTypeDefs = `
  type AiAgentsSession {
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
    getAiAgentsSession(id: ID!): AiAgentsSession
    listAiAgentsSessions(tenantId: String!, limit: Int): [AiAgentsSession!]!
  }

  extend type Mutation {
    createAiAgentsSession(tenantId: String!, code: String!, name: String!): AiAgentsSession!
    deleteAiAgentsSession(id: ID!): Boolean!
  }
`;

export const AiAgentsSessionGqlResolvers = {
  Query: {
    getAiAgentsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
