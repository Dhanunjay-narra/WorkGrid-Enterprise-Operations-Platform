export const AiToolsSessionGqlTypeDefs = `
  type AiToolsSession {
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
    getAiToolsSession(id: ID!): AiToolsSession
    listAiToolsSessions(tenantId: String!, limit: Int): [AiToolsSession!]!
  }

  extend type Mutation {
    createAiToolsSession(tenantId: String!, code: String!, name: String!): AiToolsSession!
    deleteAiToolsSession(id: ID!): Boolean!
  }
`;

export const AiToolsSessionGqlResolvers = {
  Query: {
    getAiToolsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiToolsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
