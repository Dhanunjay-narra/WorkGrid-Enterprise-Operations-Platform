export const AiEvaluationsThresholdGqlTypeDefs = `
  type AiEvaluationsThreshold {
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
    getAiEvaluationsThreshold(id: ID!): AiEvaluationsThreshold
    listAiEvaluationsThresholds(tenantId: String!, limit: Int): [AiEvaluationsThreshold!]!
  }

  extend type Mutation {
    createAiEvaluationsThreshold(tenantId: String!, code: String!, name: String!): AiEvaluationsThreshold!
    deleteAiEvaluationsThreshold(id: ID!): Boolean!
  }
`;

export const AiEvaluationsThresholdGqlResolvers = {
  Query: {
    getAiEvaluationsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEvaluationsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
