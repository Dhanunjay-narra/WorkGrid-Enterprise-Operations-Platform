export const DmsSignaturesReportGqlTypeDefs = `
  type DmsSignaturesReport {
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
    getDmsSignaturesReport(id: ID!): DmsSignaturesReport
    listDmsSignaturesReports(tenantId: String!, limit: Int): [DmsSignaturesReport!]!
  }

  extend type Mutation {
    createDmsSignaturesReport(tenantId: String!, code: String!, name: String!): DmsSignaturesReport!
    deleteDmsSignaturesReport(id: ID!): Boolean!
  }
`;

export const DmsSignaturesReportGqlResolvers = {
  Query: {
    getDmsSignaturesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
