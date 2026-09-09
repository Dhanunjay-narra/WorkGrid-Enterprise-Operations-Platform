export const RbacReportGqlTypeDefs = `
  type RbacReport {
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
    getRbacReport(id: ID!): RbacReport
    listRbacReports(tenantId: String!, limit: Int): [RbacReport!]!
  }

  extend type Mutation {
    createRbacReport(tenantId: String!, code: String!, name: String!): RbacReport!
    deleteRbacReport(id: ID!): Boolean!
  }
`;

export const RbacReportGqlResolvers = {
  Query: {
    getRbacReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
