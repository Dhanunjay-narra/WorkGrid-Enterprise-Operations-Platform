export const IntSlackConfigGqlTypeDefs = `
  type IntSlackConfig {
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
    getIntSlackConfig(id: ID!): IntSlackConfig
    listIntSlackConfigs(tenantId: String!, limit: Int): [IntSlackConfig!]!
  }

  extend type Mutation {
    createIntSlackConfig(tenantId: String!, code: String!, name: String!): IntSlackConfig!
    deleteIntSlackConfig(id: ID!): Boolean!
  }
`;

export const IntSlackConfigGqlResolvers = {
  Query: {
    getIntSlackConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
