export const AbacMetricGqlTypeDefs = `
  type AbacMetric {
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
    getAbacMetric(id: ID!): AbacMetric
    listAbacMetrics(tenantId: String!, limit: Int): [AbacMetric!]!
  }

  extend type Mutation {
    createAbacMetric(tenantId: String!, code: String!, name: String!): AbacMetric!
    deleteAbacMetric(id: ID!): Boolean!
  }
`;

export const AbacMetricGqlResolvers = {
  Query: {
    getAbacMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
