export const BiCohortsReportGqlTypeDefs = `
  type BiCohortsReport {
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
    getBiCohortsReport(id: ID!): BiCohortsReport
    listBiCohortsReports(tenantId: String!, limit: Int): [BiCohortsReport!]!
  }

  extend type Mutation {
    createBiCohortsReport(tenantId: String!, code: String!, name: String!): BiCohortsReport!
    deleteBiCohortsReport(id: ID!): Boolean!
  }
`;

export const BiCohortsReportGqlResolvers = {
  Query: {
    getBiCohortsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
