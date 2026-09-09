export const DmsExportReportGqlTypeDefs = `
  type DmsExportReport {
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
    getDmsExportReport(id: ID!): DmsExportReport
    listDmsExportReports(tenantId: String!, limit: Int): [DmsExportReport!]!
  }

  extend type Mutation {
    createDmsExportReport(tenantId: String!, code: String!, name: String!): DmsExportReport!
    deleteDmsExportReport(id: ID!): Boolean!
  }
`;

export const DmsExportReportGqlResolvers = {
  Query: {
    getDmsExportReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
