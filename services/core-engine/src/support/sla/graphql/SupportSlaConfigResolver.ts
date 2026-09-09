export const SupportSlaConfigGqlTypeDefs = `
  type SupportSlaConfig {
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
    getSupportSlaConfig(id: ID!): SupportSlaConfig
    listSupportSlaConfigs(tenantId: String!, limit: Int): [SupportSlaConfig!]!
  }

  extend type Mutation {
    createSupportSlaConfig(tenantId: String!, code: String!, name: String!): SupportSlaConfig!
    deleteSupportSlaConfig(id: ID!): Boolean!
  }
`;

export const SupportSlaConfigGqlResolvers = {
  Query: {
    getSupportSlaConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
