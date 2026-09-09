export const HrPerformanceSummaryGqlTypeDefs = `
  type HrPerformanceSummary {
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
    getHrPerformanceSummary(id: ID!): HrPerformanceSummary
    listHrPerformanceSummarys(tenantId: String!, limit: Int): [HrPerformanceSummary!]!
  }

  extend type Mutation {
    createHrPerformanceSummary(tenantId: String!, code: String!, name: String!): HrPerformanceSummary!
    deleteHrPerformanceSummary(id: ID!): Boolean!
  }
`;

export const HrPerformanceSummaryGqlResolvers = {
  Query: {
    getHrPerformanceSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
