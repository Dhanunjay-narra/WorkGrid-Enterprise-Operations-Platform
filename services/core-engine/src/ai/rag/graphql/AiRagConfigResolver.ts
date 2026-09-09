export const AiRagConfigGqlTypeDefs = `
  type AiRagConfig {
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
    getAiRagConfig(id: ID!): AiRagConfig
    listAiRagConfigs(tenantId: String!, limit: Int): [AiRagConfig!]!
  }

  extend type Mutation {
    createAiRagConfig(tenantId: String!, code: String!, name: String!): AiRagConfig!
    deleteAiRagConfig(id: ID!): Boolean!
  }
`;

export const AiRagConfigGqlResolvers = {
  Query: {
    getAiRagConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
