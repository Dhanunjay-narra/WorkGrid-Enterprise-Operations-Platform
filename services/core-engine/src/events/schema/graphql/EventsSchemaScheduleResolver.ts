export const EventsSchemaScheduleGqlTypeDefs = `
  type EventsSchemaSchedule {
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
    getEventsSchemaSchedule(id: ID!): EventsSchemaSchedule
    listEventsSchemaSchedules(tenantId: String!, limit: Int): [EventsSchemaSchedule!]!
  }

  extend type Mutation {
    createEventsSchemaSchedule(tenantId: String!, code: String!, name: String!): EventsSchemaSchedule!
    deleteEventsSchemaSchedule(id: ID!): Boolean!
  }
`;

export const EventsSchemaScheduleGqlResolvers = {
  Query: {
    getEventsSchemaSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
