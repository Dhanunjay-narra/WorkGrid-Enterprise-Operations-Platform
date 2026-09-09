export const SupportCsatConfigGqlTypeDefs = `
  type SupportCsatConfig {
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
    getSupportCsatConfig(id: ID!): SupportCsatConfig
    listSupportCsatConfigs(tenantId: String!, limit: Int): [SupportCsatConfig!]!
  }

  extend type Mutation {
    createSupportCsatConfig(tenantId: String!, code: String!, name: String!): SupportCsatConfig!
    deleteSupportCsatConfig(id: ID!): Boolean!
  }
`;

export const SupportCsatConfigGqlResolvers = {
  Query: {
    getSupportCsatConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
