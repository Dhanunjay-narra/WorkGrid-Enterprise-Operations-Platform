export const IotCommandsReportGqlTypeDefs = `
  type IotCommandsReport {
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
    getIotCommandsReport(id: ID!): IotCommandsReport
    listIotCommandsReports(tenantId: String!, limit: Int): [IotCommandsReport!]!
  }

  extend type Mutation {
    createIotCommandsReport(tenantId: String!, code: String!, name: String!): IotCommandsReport!
    deleteIotCommandsReport(id: ID!): Boolean!
  }
`;

export const IotCommandsReportGqlResolvers = {
  Query: {
    getIotCommandsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
