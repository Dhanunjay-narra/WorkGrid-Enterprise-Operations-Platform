export const HrDepartmentsSummaryGqlTypeDefs = `
  type HrDepartmentsSummary {
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
    getHrDepartmentsSummary(id: ID!): HrDepartmentsSummary
    listHrDepartmentsSummarys(tenantId: String!, limit: Int): [HrDepartmentsSummary!]!
  }

  extend type Mutation {
    createHrDepartmentsSummary(tenantId: String!, code: String!, name: String!): HrDepartmentsSummary!
    deleteHrDepartmentsSummary(id: ID!): Boolean!
  }
`;

export const HrDepartmentsSummaryGqlResolvers = {
  Query: {
    getHrDepartmentsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
