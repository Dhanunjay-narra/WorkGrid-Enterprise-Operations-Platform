export const BiDashboardsThresholdGqlTypeDefs = `
  type BiDashboardsThreshold {
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
    getBiDashboardsThreshold(id: ID!): BiDashboardsThreshold
    listBiDashboardsThresholds(tenantId: String!, limit: Int): [BiDashboardsThreshold!]!
  }

  extend type Mutation {
    createBiDashboardsThreshold(tenantId: String!, code: String!, name: String!): BiDashboardsThreshold!
    deleteBiDashboardsThreshold(id: ID!): Boolean!
  }
`;

export const BiDashboardsThresholdGqlResolvers = {
  Query: {
    getBiDashboardsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
