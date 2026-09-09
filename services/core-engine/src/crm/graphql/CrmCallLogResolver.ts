export const CrmCallLogTypeDefs = `
  type CrmCallLog {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmCallLog(id: ID!): CrmCallLog
    listCrmCallLogs(tenantId: String!): [CrmCallLog!]!
  }
`;

export const CrmCallLogResolvers = {
  Query: {
    getCrmCallLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmCallLog", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmCallLogs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmCallLog", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
