export const AiEvaluationsPolicyGqlTypeDefs = `
  type AiEvaluationsPolicy {
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
    getAiEvaluationsPolicy(id: ID!): AiEvaluationsPolicy
    listAiEvaluationsPolicys(tenantId: String!, limit: Int): [AiEvaluationsPolicy!]!
  }

  extend type Mutation {
    createAiEvaluationsPolicy(tenantId: String!, code: String!, name: String!): AiEvaluationsPolicy!
    deleteAiEvaluationsPolicy(id: ID!): Boolean!
  }
`;

export const AiEvaluationsPolicyGqlResolvers = {
  Query: {
    getAiEvaluationsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEvaluationsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
