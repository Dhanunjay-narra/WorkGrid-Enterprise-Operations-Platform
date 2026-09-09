export const IntSyncConfigGqlTypeDefs = `
  type IntSyncConfig {
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
    getIntSyncConfig(id: ID!): IntSyncConfig
    listIntSyncConfigs(tenantId: String!, limit: Int): [IntSyncConfig!]!
  }

  extend type Mutation {
    createIntSyncConfig(tenantId: String!, code: String!, name: String!): IntSyncConfig!
    deleteIntSyncConfig(id: ID!): Boolean!
  }
`;

export const IntSyncConfigGqlResolvers = {
  Query: {
    getIntSyncConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
