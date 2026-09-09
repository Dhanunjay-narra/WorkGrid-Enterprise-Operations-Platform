export const CommPresenceMetricGqlTypeDefs = `
  type CommPresenceMetric {
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
    getCommPresenceMetric(id: ID!): CommPresenceMetric
    listCommPresenceMetrics(tenantId: String!, limit: Int): [CommPresenceMetric!]!
  }

  extend type Mutation {
    createCommPresenceMetric(tenantId: String!, code: String!, name: String!): CommPresenceMetric!
    deleteCommPresenceMetric(id: ID!): Boolean!
  }
`;

export const CommPresenceMetricGqlResolvers = {
  Query: {
    getCommPresenceMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
