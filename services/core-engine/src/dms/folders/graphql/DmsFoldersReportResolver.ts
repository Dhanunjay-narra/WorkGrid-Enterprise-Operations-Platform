export const DmsFoldersReportGqlTypeDefs = `
  type DmsFoldersReport {
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
    getDmsFoldersReport(id: ID!): DmsFoldersReport
    listDmsFoldersReports(tenantId: String!, limit: Int): [DmsFoldersReport!]!
  }

  extend type Mutation {
    createDmsFoldersReport(tenantId: String!, code: String!, name: String!): DmsFoldersReport!
    deleteDmsFoldersReport(id: ID!): Boolean!
  }
`;

export const DmsFoldersReportGqlResolvers = {
  Query: {
    getDmsFoldersReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
