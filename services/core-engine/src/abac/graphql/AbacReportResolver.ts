export const AbacReportGqlTypeDefs = `
  type AbacReport {
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
    getAbacReport(id: ID!): AbacReport
    listAbacReports(tenantId: String!, limit: Int): [AbacReport!]!
  }

  extend type Mutation {
    createAbacReport(tenantId: String!, code: String!, name: String!): AbacReport!
    deleteAbacReport(id: ID!): Boolean!
  }
`;

export const AbacReportGqlResolvers = {
  Query: {
    getAbacReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
