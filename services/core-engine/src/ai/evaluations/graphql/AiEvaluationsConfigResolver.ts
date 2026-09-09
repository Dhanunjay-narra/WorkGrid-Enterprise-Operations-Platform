export const AiEvaluationsConfigGqlTypeDefs = `
  type AiEvaluationsConfig {
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
    getAiEvaluationsConfig(id: ID!): AiEvaluationsConfig
    listAiEvaluationsConfigs(tenantId: String!, limit: Int): [AiEvaluationsConfig!]!
  }

  extend type Mutation {
    createAiEvaluationsConfig(tenantId: String!, code: String!, name: String!): AiEvaluationsConfig!
    deleteAiEvaluationsConfig(id: ID!): Boolean!
  }
`;

export const AiEvaluationsConfigGqlResolvers = {
  Query: {
    getAiEvaluationsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEvaluationsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
