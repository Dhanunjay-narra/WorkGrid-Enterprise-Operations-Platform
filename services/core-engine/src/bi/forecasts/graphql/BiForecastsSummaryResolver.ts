export const BiForecastsSummaryGqlTypeDefs = `
  type BiForecastsSummary {
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
    getBiForecastsSummary(id: ID!): BiForecastsSummary
    listBiForecastsSummarys(tenantId: String!, limit: Int): [BiForecastsSummary!]!
  }

  extend type Mutation {
    createBiForecastsSummary(tenantId: String!, code: String!, name: String!): BiForecastsSummary!
    deleteBiForecastsSummary(id: ID!): Boolean!
  }
`;

export const BiForecastsSummaryGqlResolvers = {
  Query: {
    getBiForecastsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
