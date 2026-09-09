export const BiDashboardTypeDefs = `
  type BiDashboard {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiDashboard(id: ID!): BiDashboard
    listBiDashboards(tenantId: String!): [BiDashboard!]!
  }
`;

export const BiDashboardResolvers = {
  Query: {
    getBiDashboard: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiDashboard", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiDashboards: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiDashboard", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
