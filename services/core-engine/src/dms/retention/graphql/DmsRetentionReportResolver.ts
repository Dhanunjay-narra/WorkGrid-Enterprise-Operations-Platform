export const DmsRetentionReportGqlTypeDefs = `
  type DmsRetentionReport {
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
    getDmsRetentionReport(id: ID!): DmsRetentionReport
    listDmsRetentionReports(tenantId: String!, limit: Int): [DmsRetentionReport!]!
  }

  extend type Mutation {
    createDmsRetentionReport(tenantId: String!, code: String!, name: String!): DmsRetentionReport!
    deleteDmsRetentionReport(id: ID!): Boolean!
  }
`;

export const DmsRetentionReportGqlResolvers = {
  Query: {
    getDmsRetentionReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
