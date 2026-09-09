export const IotTelemetryReportGqlTypeDefs = `
  type IotTelemetryReport {
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
    getIotTelemetryReport(id: ID!): IotTelemetryReport
    listIotTelemetryReports(tenantId: String!, limit: Int): [IotTelemetryReport!]!
  }

  extend type Mutation {
    createIotTelemetryReport(tenantId: String!, code: String!, name: String!): IotTelemetryReport!
    deleteIotTelemetryReport(id: ID!): Boolean!
  }
`;

export const IotTelemetryReportGqlResolvers = {
  Query: {
    getIotTelemetryReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
