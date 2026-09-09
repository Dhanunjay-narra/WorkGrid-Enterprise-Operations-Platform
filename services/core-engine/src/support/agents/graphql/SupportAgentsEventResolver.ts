export const SupportAgentsEventGqlTypeDefs = `
  type SupportAgentsEvent {
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
    getSupportAgentsEvent(id: ID!): SupportAgentsEvent
    listSupportAgentsEvents(tenantId: String!, limit: Int): [SupportAgentsEvent!]!
  }

  extend type Mutation {
    createSupportAgentsEvent(tenantId: String!, code: String!, name: String!): SupportAgentsEvent!
    deleteSupportAgentsEvent(id: ID!): Boolean!
  }
`;

export const SupportAgentsEventGqlResolvers = {
  Query: {
    getSupportAgentsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
