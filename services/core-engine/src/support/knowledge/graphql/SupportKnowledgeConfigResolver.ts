export const SupportKnowledgeConfigGqlTypeDefs = `
  type SupportKnowledgeConfig {
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
    getSupportKnowledgeConfig(id: ID!): SupportKnowledgeConfig
    listSupportKnowledgeConfigs(tenantId: String!, limit: Int): [SupportKnowledgeConfig!]!
  }

  extend type Mutation {
    createSupportKnowledgeConfig(tenantId: String!, code: String!, name: String!): SupportKnowledgeConfig!
    deleteSupportKnowledgeConfig(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeConfigGqlResolvers = {
  Query: {
    getSupportKnowledgeConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
