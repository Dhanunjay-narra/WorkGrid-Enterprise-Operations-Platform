export const TenancyConfigGqlTypeDefs = `
  type TenancyConfig {
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
    getTenancyConfig(id: ID!): TenancyConfig
    listTenancyConfigs(tenantId: String!, limit: Int): [TenancyConfig!]!
  }

  extend type Mutation {
    createTenancyConfig(tenantId: String!, code: String!, name: String!): TenancyConfig!
    deleteTenancyConfig(id: ID!): Boolean!
  }
`;

export const TenancyConfigGqlResolvers = {
  Query: {
    getTenancyConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
