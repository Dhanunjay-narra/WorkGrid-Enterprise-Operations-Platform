export const BiDashboardsMappingGqlTypeDefs = `
  type BiDashboardsMapping {
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
    getBiDashboardsMapping(id: ID!): BiDashboardsMapping
    listBiDashboardsMappings(tenantId: String!, limit: Int): [BiDashboardsMapping!]!
  }

  extend type Mutation {
    createBiDashboardsMapping(tenantId: String!, code: String!, name: String!): BiDashboardsMapping!
    deleteBiDashboardsMapping(id: ID!): Boolean!
  }
`;

export const BiDashboardsMappingGqlResolvers = {
  Query: {
    getBiDashboardsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
