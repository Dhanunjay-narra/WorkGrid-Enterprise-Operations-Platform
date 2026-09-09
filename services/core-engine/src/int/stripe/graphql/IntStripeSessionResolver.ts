export const IntStripeSessionGqlTypeDefs = `
  type IntStripeSession {
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
    getIntStripeSession(id: ID!): IntStripeSession
    listIntStripeSessions(tenantId: String!, limit: Int): [IntStripeSession!]!
  }

  extend type Mutation {
    createIntStripeSession(tenantId: String!, code: String!, name: String!): IntStripeSession!
    deleteIntStripeSession(id: ID!): Boolean!
  }
`;

export const IntStripeSessionGqlResolvers = {
  Query: {
    getIntStripeSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
