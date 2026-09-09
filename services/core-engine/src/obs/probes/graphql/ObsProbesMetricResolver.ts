export const ObsProbesMetricGqlTypeDefs = `
  type ObsProbesMetric {
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
    getObsProbesMetric(id: ID!): ObsProbesMetric
    listObsProbesMetrics(tenantId: String!, limit: Int): [ObsProbesMetric!]!
  }

  extend type Mutation {
    createObsProbesMetric(tenantId: String!, code: String!, name: String!): ObsProbesMetric!
    deleteObsProbesMetric(id: ID!): Boolean!
  }
`;

export const ObsProbesMetricGqlResolvers = {
  Query: {
    getObsProbesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
