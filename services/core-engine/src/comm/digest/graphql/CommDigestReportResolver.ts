export const CommDigestReportGqlTypeDefs = `
  type CommDigestReport {
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
    getCommDigestReport(id: ID!): CommDigestReport
    listCommDigestReports(tenantId: String!, limit: Int): [CommDigestReport!]!
  }

  extend type Mutation {
    createCommDigestReport(tenantId: String!, code: String!, name: String!): CommDigestReport!
    deleteCommDigestReport(id: ID!): Boolean!
  }
`;

export const CommDigestReportGqlResolvers = {
  Query: {
    getCommDigestReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
