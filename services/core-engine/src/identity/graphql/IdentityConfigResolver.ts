export const IdentityConfigGqlTypeDefs = `
  type IdentityConfig {
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
    getIdentityConfig(id: ID!): IdentityConfig
    listIdentityConfigs(tenantId: String!, limit: Int): [IdentityConfig!]!
  }

  extend type Mutation {
    createIdentityConfig(tenantId: String!, code: String!, name: String!): IdentityConfig!
    deleteIdentityConfig(id: ID!): Boolean!
  }
`;

export const IdentityConfigGqlResolvers = {
  Query: {
    getIdentityConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
