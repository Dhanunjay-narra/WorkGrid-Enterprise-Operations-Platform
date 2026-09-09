export const CrmForecastingSummaryGqlTypeDefs = `
  type CrmForecastingSummary {
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
    getCrmForecastingSummary(id: ID!): CrmForecastingSummary
    listCrmForecastingSummarys(tenantId: String!, limit: Int): [CrmForecastingSummary!]!
  }

  extend type Mutation {
    createCrmForecastingSummary(tenantId: String!, code: String!, name: String!): CrmForecastingSummary!
    deleteCrmForecastingSummary(id: ID!): Boolean!
  }
`;

export const CrmForecastingSummaryGqlResolvers = {
  Query: {
    getCrmForecastingSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
