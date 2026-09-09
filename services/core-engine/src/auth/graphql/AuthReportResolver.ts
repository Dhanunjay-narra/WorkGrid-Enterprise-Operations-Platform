export const AuthReportGqlTypeDefs = `
  type AuthReport {
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
    getAuthReport(id: ID!): AuthReport
    listAuthReports(tenantId: String!, limit: Int): [AuthReport!]!
  }

  extend type Mutation {
    createAuthReport(tenantId: String!, code: String!, name: String!): AuthReport!
    deleteAuthReport(id: ID!): Boolean!
  }
`;

export const AuthReportGqlResolvers = {
  Query: {
    getAuthReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
