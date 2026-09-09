export const ObsMetricsSessionGqlTypeDefs = `
  type ObsMetricsSession {
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
    getObsMetricsSession(id: ID!): ObsMetricsSession
    listObsMetricsSessions(tenantId: String!, limit: Int): [ObsMetricsSession!]!
  }

  extend type Mutation {
    createObsMetricsSession(tenantId: String!, code: String!, name: String!): ObsMetricsSession!
    deleteObsMetricsSession(id: ID!): Boolean!
  }
`;

export const ObsMetricsSessionGqlResolvers = {
  Query: {
    getObsMetricsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
