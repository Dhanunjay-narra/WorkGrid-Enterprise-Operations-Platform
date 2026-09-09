export const CommDigestConfigGqlTypeDefs = `
  type CommDigestConfig {
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
    getCommDigestConfig(id: ID!): CommDigestConfig
    listCommDigestConfigs(tenantId: String!, limit: Int): [CommDigestConfig!]!
  }

  extend type Mutation {
    createCommDigestConfig(tenantId: String!, code: String!, name: String!): CommDigestConfig!
    deleteCommDigestConfig(id: ID!): Boolean!
  }
`;

export const CommDigestConfigGqlResolvers = {
  Query: {
    getCommDigestConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
