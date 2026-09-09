export const BiWidgetsReportGqlTypeDefs = `
  type BiWidgetsReport {
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
    getBiWidgetsReport(id: ID!): BiWidgetsReport
    listBiWidgetsReports(tenantId: String!, limit: Int): [BiWidgetsReport!]!
  }

  extend type Mutation {
    createBiWidgetsReport(tenantId: String!, code: String!, name: String!): BiWidgetsReport!
    deleteBiWidgetsReport(id: ID!): Boolean!
  }
`;

export const BiWidgetsReportGqlResolvers = {
  Query: {
    getBiWidgetsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
