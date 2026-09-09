export const ObsTracingEventGqlTypeDefs = `
  type ObsTracingEvent {
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
    getObsTracingEvent(id: ID!): ObsTracingEvent
    listObsTracingEvents(tenantId: String!, limit: Int): [ObsTracingEvent!]!
  }

  extend type Mutation {
    createObsTracingEvent(tenantId: String!, code: String!, name: String!): ObsTracingEvent!
    deleteObsTracingEvent(id: ID!): Boolean!
  }
`;

export const ObsTracingEventGqlResolvers = {
  Query: {
    getObsTracingEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
