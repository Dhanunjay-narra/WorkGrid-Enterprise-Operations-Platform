export const BiExecutiveSummaryTypeDefs = `
  type BiExecutiveSummary {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiExecutiveSummary(id: ID!): BiExecutiveSummary
    listBiExecutiveSummarys(tenantId: String!): [BiExecutiveSummary!]!
  }
`;

export const BiExecutiveSummaryResolvers = {
  Query: {
    getBiExecutiveSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiExecutiveSummary", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiExecutiveSummarys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiExecutiveSummary", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
