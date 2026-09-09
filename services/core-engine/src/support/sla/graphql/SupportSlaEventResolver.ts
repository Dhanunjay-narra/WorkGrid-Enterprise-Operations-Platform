export const SupportSlaEventGqlTypeDefs = `
  type SupportSlaEvent {
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
    getSupportSlaEvent(id: ID!): SupportSlaEvent
    listSupportSlaEvents(tenantId: String!, limit: Int): [SupportSlaEvent!]!
  }

  extend type Mutation {
    createSupportSlaEvent(tenantId: String!, code: String!, name: String!): SupportSlaEvent!
    deleteSupportSlaEvent(id: ID!): Boolean!
  }
`;

export const SupportSlaEventGqlResolvers = {
  Query: {
    getSupportSlaEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
