export const BiDashboardsPolicyGqlTypeDefs = `
  type BiDashboardsPolicy {
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
    getBiDashboardsPolicy(id: ID!): BiDashboardsPolicy
    listBiDashboardsPolicys(tenantId: String!, limit: Int): [BiDashboardsPolicy!]!
  }

  extend type Mutation {
    createBiDashboardsPolicy(tenantId: String!, code: String!, name: String!): BiDashboardsPolicy!
    deleteBiDashboardsPolicy(id: ID!): Boolean!
  }
`;

export const BiDashboardsPolicyGqlResolvers = {
  Query: {
    getBiDashboardsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
