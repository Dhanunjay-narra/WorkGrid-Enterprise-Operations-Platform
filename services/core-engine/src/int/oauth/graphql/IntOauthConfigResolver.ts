export const IntOauthConfigGqlTypeDefs = `
  type IntOauthConfig {
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
    getIntOauthConfig(id: ID!): IntOauthConfig
    listIntOauthConfigs(tenantId: String!, limit: Int): [IntOauthConfig!]!
  }

  extend type Mutation {
    createIntOauthConfig(tenantId: String!, code: String!, name: String!): IntOauthConfig!
    deleteIntOauthConfig(id: ID!): Boolean!
  }
`;

export const IntOauthConfigGqlResolvers = {
  Query: {
    getIntOauthConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
