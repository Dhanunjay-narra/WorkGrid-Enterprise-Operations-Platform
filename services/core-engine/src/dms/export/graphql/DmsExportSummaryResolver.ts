export const DmsExportSummaryGqlTypeDefs = `
  type DmsExportSummary {
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
    getDmsExportSummary(id: ID!): DmsExportSummary
    listDmsExportSummarys(tenantId: String!, limit: Int): [DmsExportSummary!]!
  }

  extend type Mutation {
    createDmsExportSummary(tenantId: String!, code: String!, name: String!): DmsExportSummary!
    deleteDmsExportSummary(id: ID!): Boolean!
  }
`;

export const DmsExportSummaryGqlResolvers = {
  Query: {
    getDmsExportSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
