export const IotFleetReportGqlTypeDefs = `
  type IotFleetReport {
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
    getIotFleetReport(id: ID!): IotFleetReport
    listIotFleetReports(tenantId: String!, limit: Int): [IotFleetReport!]!
  }

  extend type Mutation {
    createIotFleetReport(tenantId: String!, code: String!, name: String!): IotFleetReport!
    deleteIotFleetReport(id: ID!): Boolean!
  }
`;

export const IotFleetReportGqlResolvers = {
  Query: {
    getIotFleetReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
