export const SupportAgentsConfigGqlTypeDefs = `
  type SupportAgentsConfig {
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
    getSupportAgentsConfig(id: ID!): SupportAgentsConfig
    listSupportAgentsConfigs(tenantId: String!, limit: Int): [SupportAgentsConfig!]!
  }

  extend type Mutation {
    createSupportAgentsConfig(tenantId: String!, code: String!, name: String!): SupportAgentsConfig!
    deleteSupportAgentsConfig(id: ID!): Boolean!
  }
`;

export const SupportAgentsConfigGqlResolvers = {
  Query: {
    getSupportAgentsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
