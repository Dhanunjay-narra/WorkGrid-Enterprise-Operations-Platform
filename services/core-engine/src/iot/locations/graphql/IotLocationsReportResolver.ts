export const IotLocationsReportGqlTypeDefs = `
  type IotLocationsReport {
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
    getIotLocationsReport(id: ID!): IotLocationsReport
    listIotLocationsReports(tenantId: String!, limit: Int): [IotLocationsReport!]!
  }

  extend type Mutation {
    createIotLocationsReport(tenantId: String!, code: String!, name: String!): IotLocationsReport!
    deleteIotLocationsReport(id: ID!): Boolean!
  }
`;

export const IotLocationsReportGqlResolvers = {
  Query: {
    getIotLocationsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
