export const ObsMetricsBatchGqlTypeDefs = `
  type ObsMetricsBatch {
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
    getObsMetricsBatch(id: ID!): ObsMetricsBatch
    listObsMetricsBatchs(tenantId: String!, limit: Int): [ObsMetricsBatch!]!
  }

  extend type Mutation {
    createObsMetricsBatch(tenantId: String!, code: String!, name: String!): ObsMetricsBatch!
    deleteObsMetricsBatch(id: ID!): Boolean!
  }
`;

export const ObsMetricsBatchGqlResolvers = {
  Query: {
    getObsMetricsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
