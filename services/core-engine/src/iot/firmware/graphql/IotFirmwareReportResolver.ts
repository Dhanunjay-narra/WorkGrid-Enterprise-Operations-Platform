export const IotFirmwareReportGqlTypeDefs = `
  type IotFirmwareReport {
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
    getIotFirmwareReport(id: ID!): IotFirmwareReport
    listIotFirmwareReports(tenantId: String!, limit: Int): [IotFirmwareReport!]!
  }

  extend type Mutation {
    createIotFirmwareReport(tenantId: String!, code: String!, name: String!): IotFirmwareReport!
    deleteIotFirmwareReport(id: ID!): Boolean!
  }
`;

export const IotFirmwareReportGqlResolvers = {
  Query: {
    getIotFirmwareReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
