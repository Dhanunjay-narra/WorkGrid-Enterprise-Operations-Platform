export const BiQueriesPolicyGqlTypeDefs = `
  type BiQueriesPolicy {
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
    getBiQueriesPolicy(id: ID!): BiQueriesPolicy
    listBiQueriesPolicys(tenantId: String!, limit: Int): [BiQueriesPolicy!]!
  }

  extend type Mutation {
    createBiQueriesPolicy(tenantId: String!, code: String!, name: String!): BiQueriesPolicy!
    deleteBiQueriesPolicy(id: ID!): Boolean!
  }
`;

export const BiQueriesPolicyGqlResolvers = {
  Query: {
    getBiQueriesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
