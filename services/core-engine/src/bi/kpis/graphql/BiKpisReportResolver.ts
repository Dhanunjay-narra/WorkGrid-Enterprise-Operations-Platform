export const BiKpisReportGqlTypeDefs = `
  type BiKpisReport {
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
    getBiKpisReport(id: ID!): BiKpisReport
    listBiKpisReports(tenantId: String!, limit: Int): [BiKpisReport!]!
  }

  extend type Mutation {
    createBiKpisReport(tenantId: String!, code: String!, name: String!): BiKpisReport!
    deleteBiKpisReport(id: ID!): Boolean!
  }
`;

export const BiKpisReportGqlResolvers = {
  Query: {
    getBiKpisReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
