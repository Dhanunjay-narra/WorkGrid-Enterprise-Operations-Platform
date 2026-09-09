export const IotThresholdsReportGqlTypeDefs = `
  type IotThresholdsReport {
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
    getIotThresholdsReport(id: ID!): IotThresholdsReport
    listIotThresholdsReports(tenantId: String!, limit: Int): [IotThresholdsReport!]!
  }

  extend type Mutation {
    createIotThresholdsReport(tenantId: String!, code: String!, name: String!): IotThresholdsReport!
    deleteIotThresholdsReport(id: ID!): Boolean!
  }
`;

export const IotThresholdsReportGqlResolvers = {
  Query: {
    getIotThresholdsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
