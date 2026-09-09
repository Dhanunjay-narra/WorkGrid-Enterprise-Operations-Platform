export const AuditReportGqlTypeDefs = `
  type AuditReport {
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
    getAuditReport(id: ID!): AuditReport
    listAuditReports(tenantId: String!, limit: Int): [AuditReport!]!
  }

  extend type Mutation {
    createAuditReport(tenantId: String!, code: String!, name: String!): AuditReport!
    deleteAuditReport(id: ID!): Boolean!
  }
`;

export const AuditReportGqlResolvers = {
  Query: {
    getAuditReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
