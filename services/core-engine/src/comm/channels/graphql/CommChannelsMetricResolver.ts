export const CommChannelsMetricGqlTypeDefs = `
  type CommChannelsMetric {
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
    getCommChannelsMetric(id: ID!): CommChannelsMetric
    listCommChannelsMetrics(tenantId: String!, limit: Int): [CommChannelsMetric!]!
  }

  extend type Mutation {
    createCommChannelsMetric(tenantId: String!, code: String!, name: String!): CommChannelsMetric!
    deleteCommChannelsMetric(id: ID!): Boolean!
  }
`;

export const CommChannelsMetricGqlResolvers = {
  Query: {
    getCommChannelsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
