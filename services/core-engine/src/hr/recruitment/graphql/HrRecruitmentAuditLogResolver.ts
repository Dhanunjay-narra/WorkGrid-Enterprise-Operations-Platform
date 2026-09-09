export const HrRecruitmentAuditLogGqlTypeDefs = `
  type HrRecruitmentAuditLog {
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
    getHrRecruitmentAuditLog(id: ID!): HrRecruitmentAuditLog
    listHrRecruitmentAuditLogs(tenantId: String!, limit: Int): [HrRecruitmentAuditLog!]!
  }

  extend type Mutation {
    createHrRecruitmentAuditLog(tenantId: String!, code: String!, name: String!): HrRecruitmentAuditLog!
    deleteHrRecruitmentAuditLog(id: ID!): Boolean!
  }
`;

export const HrRecruitmentAuditLogGqlResolvers = {
  Query: {
    getHrRecruitmentAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
