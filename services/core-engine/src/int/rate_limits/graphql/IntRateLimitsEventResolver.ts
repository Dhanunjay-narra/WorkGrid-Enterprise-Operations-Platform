export const IntRateLimitsEventGqlTypeDefs = `
  type IntRateLimitsEvent {
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
    getIntRateLimitsEvent(id: ID!): IntRateLimitsEvent
    listIntRateLimitsEvents(tenantId: String!, limit: Int): [IntRateLimitsEvent!]!
  }

  extend type Mutation {
    createIntRateLimitsEvent(tenantId: String!, code: String!, name: String!): IntRateLimitsEvent!
    deleteIntRateLimitsEvent(id: ID!): Boolean!
  }
`;

export const IntRateLimitsEventGqlResolvers = {
  Query: {
    getIntRateLimitsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
