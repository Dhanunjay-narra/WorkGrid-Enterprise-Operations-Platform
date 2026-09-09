export const SecurityReportGqlTypeDefs = `
  type SecurityReport {
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
    getSecurityReport(id: ID!): SecurityReport
    listSecurityReports(tenantId: String!, limit: Int): [SecurityReport!]!
  }

  extend type Mutation {
    createSecurityReport(tenantId: String!, code: String!, name: String!): SecurityReport!
    deleteSecurityReport(id: ID!): Boolean!
  }
`;

export const SecurityReportGqlResolvers = {
  Query: {
    getSecurityReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
