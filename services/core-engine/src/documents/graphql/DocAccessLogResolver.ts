export const DocAccessLogTypeDefs = `
  type DocAccessLog {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocAccessLog(id: ID!): DocAccessLog
    listDocAccessLogs(tenantId: String!): [DocAccessLog!]!
  }
`;

export const DocAccessLogResolvers = {
  Query: {
    getDocAccessLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocAccessLog", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocAccessLogs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocAccessLog", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
