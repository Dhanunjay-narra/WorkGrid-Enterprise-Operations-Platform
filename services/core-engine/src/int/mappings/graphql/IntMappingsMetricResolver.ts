export const IntMappingsMetricGqlTypeDefs = `
  type IntMappingsMetric {
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
    getIntMappingsMetric(id: ID!): IntMappingsMetric
    listIntMappingsMetrics(tenantId: String!, limit: Int): [IntMappingsMetric!]!
  }

  extend type Mutation {
    createIntMappingsMetric(tenantId: String!, code: String!, name: String!): IntMappingsMetric!
    deleteIntMappingsMetric(id: ID!): Boolean!
  }
`;

export const IntMappingsMetricGqlResolvers = {
  Query: {
    getIntMappingsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntMappingsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
