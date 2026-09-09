export const CommThreadsConfigGqlTypeDefs = `
  type CommThreadsConfig {
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
    getCommThreadsConfig(id: ID!): CommThreadsConfig
    listCommThreadsConfigs(tenantId: String!, limit: Int): [CommThreadsConfig!]!
  }

  extend type Mutation {
    createCommThreadsConfig(tenantId: String!, code: String!, name: String!): CommThreadsConfig!
    deleteCommThreadsConfig(id: ID!): Boolean!
  }
`;

export const CommThreadsConfigGqlResolvers = {
  Query: {
    getCommThreadsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
