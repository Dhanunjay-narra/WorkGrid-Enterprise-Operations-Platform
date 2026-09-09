export const HrPayrollSummaryGqlTypeDefs = `
  type HrPayrollSummary {
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
    getHrPayrollSummary(id: ID!): HrPayrollSummary
    listHrPayrollSummarys(tenantId: String!, limit: Int): [HrPayrollSummary!]!
  }

  extend type Mutation {
    createHrPayrollSummary(tenantId: String!, code: String!, name: String!): HrPayrollSummary!
    deleteHrPayrollSummary(id: ID!): Boolean!
  }
`;

export const HrPayrollSummaryGqlResolvers = {
  Query: {
    getHrPayrollSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
