export const BiAnomaliesPolicyGqlTypeDefs = `
  type BiAnomaliesPolicy {
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
    getBiAnomaliesPolicy(id: ID!): BiAnomaliesPolicy
    listBiAnomaliesPolicys(tenantId: String!, limit: Int): [BiAnomaliesPolicy!]!
  }

  extend type Mutation {
    createBiAnomaliesPolicy(tenantId: String!, code: String!, name: String!): BiAnomaliesPolicy!
    deleteBiAnomaliesPolicy(id: ID!): Boolean!
  }
`;

export const BiAnomaliesPolicyGqlResolvers = {
  Query: {
    getBiAnomaliesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
