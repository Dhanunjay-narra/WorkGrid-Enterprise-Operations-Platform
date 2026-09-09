export const IotAnomaliesReportGqlTypeDefs = `
  type IotAnomaliesReport {
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
    getIotAnomaliesReport(id: ID!): IotAnomaliesReport
    listIotAnomaliesReports(tenantId: String!, limit: Int): [IotAnomaliesReport!]!
  }

  extend type Mutation {
    createIotAnomaliesReport(tenantId: String!, code: String!, name: String!): IotAnomaliesReport!
    deleteIotAnomaliesReport(id: ID!): Boolean!
  }
`;

export const IotAnomaliesReportGqlResolvers = {
  Query: {
    getIotAnomaliesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
