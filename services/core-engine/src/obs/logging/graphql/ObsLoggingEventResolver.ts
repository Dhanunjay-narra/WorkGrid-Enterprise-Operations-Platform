export const ObsLoggingEventGqlTypeDefs = `
  type ObsLoggingEvent {
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
    getObsLoggingEvent(id: ID!): ObsLoggingEvent
    listObsLoggingEvents(tenantId: String!, limit: Int): [ObsLoggingEvent!]!
  }

  extend type Mutation {
    createObsLoggingEvent(tenantId: String!, code: String!, name: String!): ObsLoggingEvent!
    deleteObsLoggingEvent(id: ID!): Boolean!
  }
`;

export const ObsLoggingEventGqlResolvers = {
  Query: {
    getObsLoggingEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
