export const SupportEscalationEventGqlTypeDefs = `
  type SupportEscalationEvent {
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
    getSupportEscalationEvent(id: ID!): SupportEscalationEvent
    listSupportEscalationEvents(tenantId: String!, limit: Int): [SupportEscalationEvent!]!
  }

  extend type Mutation {
    createSupportEscalationEvent(tenantId: String!, code: String!, name: String!): SupportEscalationEvent!
    deleteSupportEscalationEvent(id: ID!): Boolean!
  }
`;

export const SupportEscalationEventGqlResolvers = {
  Query: {
    getSupportEscalationEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
