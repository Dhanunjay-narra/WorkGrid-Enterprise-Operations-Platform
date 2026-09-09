export const CommNotificationsReportGqlTypeDefs = `
  type CommNotificationsReport {
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
    getCommNotificationsReport(id: ID!): CommNotificationsReport
    listCommNotificationsReports(tenantId: String!, limit: Int): [CommNotificationsReport!]!
  }

  extend type Mutation {
    createCommNotificationsReport(tenantId: String!, code: String!, name: String!): CommNotificationsReport!
    deleteCommNotificationsReport(id: ID!): Boolean!
  }
`;

export const CommNotificationsReportGqlResolvers = {
  Query: {
    getCommNotificationsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
