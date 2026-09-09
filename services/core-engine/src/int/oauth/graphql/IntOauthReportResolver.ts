export const IntOauthReportGqlTypeDefs = `
  type IntOauthReport {
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
    getIntOauthReport(id: ID!): IntOauthReport
    listIntOauthReports(tenantId: String!, limit: Int): [IntOauthReport!]!
  }

  extend type Mutation {
    createIntOauthReport(tenantId: String!, code: String!, name: String!): IntOauthReport!
    deleteIntOauthReport(id: ID!): Boolean!
  }
`;

export const IntOauthReportGqlResolvers = {
  Query: {
    getIntOauthReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
