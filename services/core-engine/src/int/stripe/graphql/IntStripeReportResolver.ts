export const IntStripeReportGqlTypeDefs = `
  type IntStripeReport {
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
    getIntStripeReport(id: ID!): IntStripeReport
    listIntStripeReports(tenantId: String!, limit: Int): [IntStripeReport!]!
  }

  extend type Mutation {
    createIntStripeReport(tenantId: String!, code: String!, name: String!): IntStripeReport!
    deleteIntStripeReport(id: ID!): Boolean!
  }
`;

export const IntStripeReportGqlResolvers = {
  Query: {
    getIntStripeReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
