export const CommCallsConfigGqlTypeDefs = `
  type CommCallsConfig {
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
    getCommCallsConfig(id: ID!): CommCallsConfig
    listCommCallsConfigs(tenantId: String!, limit: Int): [CommCallsConfig!]!
  }

  extend type Mutation {
    createCommCallsConfig(tenantId: String!, code: String!, name: String!): CommCallsConfig!
    deleteCommCallsConfig(id: ID!): Boolean!
  }
`;

export const CommCallsConfigGqlResolvers = {
  Query: {
    getCommCallsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
