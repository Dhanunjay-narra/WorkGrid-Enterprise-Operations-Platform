export const CommChannelsReportGqlTypeDefs = `
  type CommChannelsReport {
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
    getCommChannelsReport(id: ID!): CommChannelsReport
    listCommChannelsReports(tenantId: String!, limit: Int): [CommChannelsReport!]!
  }

  extend type Mutation {
    createCommChannelsReport(tenantId: String!, code: String!, name: String!): CommChannelsReport!
    deleteCommChannelsReport(id: ID!): Boolean!
  }
`;

export const CommChannelsReportGqlResolvers = {
  Query: {
    getCommChannelsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
