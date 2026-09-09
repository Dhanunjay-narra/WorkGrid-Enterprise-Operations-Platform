export const AbacEventGqlTypeDefs = `
  type AbacEvent {
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
    getAbacEvent(id: ID!): AbacEvent
    listAbacEvents(tenantId: String!, limit: Int): [AbacEvent!]!
  }

  extend type Mutation {
    createAbacEvent(tenantId: String!, code: String!, name: String!): AbacEvent!
    deleteAbacEvent(id: ID!): Boolean!
  }
`;

export const AbacEventGqlResolvers = {
  Query: {
    getAbacEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
