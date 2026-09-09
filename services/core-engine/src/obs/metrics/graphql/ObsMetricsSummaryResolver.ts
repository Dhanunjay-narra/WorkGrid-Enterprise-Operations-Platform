export const ObsMetricsSummaryGqlTypeDefs = `
  type ObsMetricsSummary {
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
    getObsMetricsSummary(id: ID!): ObsMetricsSummary
    listObsMetricsSummarys(tenantId: String!, limit: Int): [ObsMetricsSummary!]!
  }

  extend type Mutation {
    createObsMetricsSummary(tenantId: String!, code: String!, name: String!): ObsMetricsSummary!
    deleteObsMetricsSummary(id: ID!): Boolean!
  }
`;

export const ObsMetricsSummaryGqlResolvers = {
  Query: {
    getObsMetricsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
