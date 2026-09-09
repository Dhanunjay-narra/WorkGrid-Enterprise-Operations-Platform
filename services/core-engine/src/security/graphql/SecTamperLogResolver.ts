export const SecTamperLogTypeDefs = `
  type SecTamperLog {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSecTamperLog(id: ID!): SecTamperLog
    listSecTamperLogs(tenantId: String!): [SecTamperLog!]!
  }
`;

export const SecTamperLogResolvers = {
  Query: {
    getSecTamperLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SecTamperLog", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSecTamperLogs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SecTamperLog", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
