export const DmsOcrReportGqlTypeDefs = `
  type DmsOcrReport {
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
    getDmsOcrReport(id: ID!): DmsOcrReport
    listDmsOcrReports(tenantId: String!, limit: Int): [DmsOcrReport!]!
  }

  extend type Mutation {
    createDmsOcrReport(tenantId: String!, code: String!, name: String!): DmsOcrReport!
    deleteDmsOcrReport(id: ID!): Boolean!
  }
`;

export const DmsOcrReportGqlResolvers = {
  Query: {
    getDmsOcrReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
