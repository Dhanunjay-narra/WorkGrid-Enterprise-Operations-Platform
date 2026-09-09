export const IotDevicesReportGqlTypeDefs = `
  type IotDevicesReport {
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
    getIotDevicesReport(id: ID!): IotDevicesReport
    listIotDevicesReports(tenantId: String!, limit: Int): [IotDevicesReport!]!
  }

  extend type Mutation {
    createIotDevicesReport(tenantId: String!, code: String!, name: String!): IotDevicesReport!
    deleteIotDevicesReport(id: ID!): Boolean!
  }
`;

export const IotDevicesReportGqlResolvers = {
  Query: {
    getIotDevicesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
