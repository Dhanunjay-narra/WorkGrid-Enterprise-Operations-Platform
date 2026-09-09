export const EventsSchemaProfileGqlTypeDefs = `
  type EventsSchemaProfile {
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
    getEventsSchemaProfile(id: ID!): EventsSchemaProfile
    listEventsSchemaProfiles(tenantId: String!, limit: Int): [EventsSchemaProfile!]!
  }

  extend type Mutation {
    createEventsSchemaProfile(tenantId: String!, code: String!, name: String!): EventsSchemaProfile!
    deleteEventsSchemaProfile(id: ID!): Boolean!
  }
`;

export const EventsSchemaProfileGqlResolvers = {
  Query: {
    getEventsSchemaProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
