export const DmsFilesReportGqlTypeDefs = `
  type DmsFilesReport {
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
    getDmsFilesReport(id: ID!): DmsFilesReport
    listDmsFilesReports(tenantId: String!, limit: Int): [DmsFilesReport!]!
  }

  extend type Mutation {
    createDmsFilesReport(tenantId: String!, code: String!, name: String!): DmsFilesReport!
    deleteDmsFilesReport(id: ID!): Boolean!
  }
`;

export const DmsFilesReportGqlResolvers = {
  Query: {
    getDmsFilesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
