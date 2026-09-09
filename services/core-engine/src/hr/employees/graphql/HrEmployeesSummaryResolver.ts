export const HrEmployeesSummaryGqlTypeDefs = `
  type HrEmployeesSummary {
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
    getHrEmployeesSummary(id: ID!): HrEmployeesSummary
    listHrEmployeesSummarys(tenantId: String!, limit: Int): [HrEmployeesSummary!]!
  }

  extend type Mutation {
    createHrEmployeesSummary(tenantId: String!, code: String!, name: String!): HrEmployeesSummary!
    deleteHrEmployeesSummary(id: ID!): Boolean!
  }
`;

export const HrEmployeesSummaryGqlResolvers = {
  Query: {
    getHrEmployeesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
