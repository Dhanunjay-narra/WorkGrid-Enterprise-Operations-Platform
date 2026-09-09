export const HrShiftsSummaryGqlTypeDefs = `
  type HrShiftsSummary {
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
    getHrShiftsSummary(id: ID!): HrShiftsSummary
    listHrShiftsSummarys(tenantId: String!, limit: Int): [HrShiftsSummary!]!
  }

  extend type Mutation {
    createHrShiftsSummary(tenantId: String!, code: String!, name: String!): HrShiftsSummary!
    deleteHrShiftsSummary(id: ID!): Boolean!
  }
`;

export const HrShiftsSummaryGqlResolvers = {
  Query: {
    getHrShiftsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
