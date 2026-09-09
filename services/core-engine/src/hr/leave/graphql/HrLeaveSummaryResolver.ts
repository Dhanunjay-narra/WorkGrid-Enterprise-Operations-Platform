export const HrLeaveSummaryGqlTypeDefs = `
  type HrLeaveSummary {
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
    getHrLeaveSummary(id: ID!): HrLeaveSummary
    listHrLeaveSummarys(tenantId: String!, limit: Int): [HrLeaveSummary!]!
  }

  extend type Mutation {
    createHrLeaveSummary(tenantId: String!, code: String!, name: String!): HrLeaveSummary!
    deleteHrLeaveSummary(id: ID!): Boolean!
  }
`;

export const HrLeaveSummaryGqlResolvers = {
  Query: {
    getHrLeaveSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
