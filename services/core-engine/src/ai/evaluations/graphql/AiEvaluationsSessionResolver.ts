export const AiEvaluationsSessionGqlTypeDefs = `
  type AiEvaluationsSession {
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
    getAiEvaluationsSession(id: ID!): AiEvaluationsSession
    listAiEvaluationsSessions(tenantId: String!, limit: Int): [AiEvaluationsSession!]!
  }

  extend type Mutation {
    createAiEvaluationsSession(tenantId: String!, code: String!, name: String!): AiEvaluationsSession!
    deleteAiEvaluationsSession(id: ID!): Boolean!
  }
`;

export const AiEvaluationsSessionGqlResolvers = {
  Query: {
    getAiEvaluationsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEvaluationsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
