export const BiReportQueryTypeDefs = `
  type BiReportQuery {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiReportQuery(id: ID!): BiReportQuery
    listBiReportQuerys(tenantId: String!): [BiReportQuery!]!
  }
`;

export const BiReportQueryResolvers = {
  Query: {
    getBiReportQuery: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiReportQuery", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiReportQuerys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiReportQuery", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
