export const IntStripeEventGqlTypeDefs = `
  type IntStripeEvent {
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
    getIntStripeEvent(id: ID!): IntStripeEvent
    listIntStripeEvents(tenantId: String!, limit: Int): [IntStripeEvent!]!
  }

  extend type Mutation {
    createIntStripeEvent(tenantId: String!, code: String!, name: String!): IntStripeEvent!
    deleteIntStripeEvent(id: ID!): Boolean!
  }
`;

export const IntStripeEventGqlResolvers = {
  Query: {
    getIntStripeEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
