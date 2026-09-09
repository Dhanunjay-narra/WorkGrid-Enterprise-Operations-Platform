export const IotCommandExecutionLogTypeDefs = `
  type IotCommandExecutionLog {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotCommandExecutionLog(id: ID!): IotCommandExecutionLog
    listIotCommandExecutionLogs(tenantId: String!): [IotCommandExecutionLog!]!
  }
`;

export const IotCommandExecutionLogResolvers = {
  Query: {
    getIotCommandExecutionLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotCommandExecutionLog", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotCommandExecutionLogs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotCommandExecutionLog", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
