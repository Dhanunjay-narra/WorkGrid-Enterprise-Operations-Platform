export const EventsSchemaSummaryGqlTypeDefs = `
  type EventsSchemaSummary {
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
    getEventsSchemaSummary(id: ID!): EventsSchemaSummary
    listEventsSchemaSummarys(tenantId: String!, limit: Int): [EventsSchemaSummary!]!
  }

  extend type Mutation {
    createEventsSchemaSummary(tenantId: String!, code: String!, name: String!): EventsSchemaSummary!
    deleteEventsSchemaSummary(id: ID!): Boolean!
  }
`;

export const EventsSchemaSummaryGqlResolvers = {
  Query: {
    getEventsSchemaSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
