export const ObsMetricsEventGqlTypeDefs = `
  type ObsMetricsEvent {
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
    getObsMetricsEvent(id: ID!): ObsMetricsEvent
    listObsMetricsEvents(tenantId: String!, limit: Int): [ObsMetricsEvent!]!
  }

  extend type Mutation {
    createObsMetricsEvent(tenantId: String!, code: String!, name: String!): ObsMetricsEvent!
    deleteObsMetricsEvent(id: ID!): Boolean!
  }
`;

export const ObsMetricsEventGqlResolvers = {
  Query: {
    getObsMetricsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
