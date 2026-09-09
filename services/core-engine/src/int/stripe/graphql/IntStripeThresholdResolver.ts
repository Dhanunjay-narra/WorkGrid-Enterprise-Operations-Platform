export const IntStripeThresholdGqlTypeDefs = `
  type IntStripeThreshold {
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
    getIntStripeThreshold(id: ID!): IntStripeThreshold
    listIntStripeThresholds(tenantId: String!, limit: Int): [IntStripeThreshold!]!
  }

  extend type Mutation {
    createIntStripeThreshold(tenantId: String!, code: String!, name: String!): IntStripeThreshold!
    deleteIntStripeThreshold(id: ID!): Boolean!
  }
`;

export const IntStripeThresholdGqlResolvers = {
  Query: {
    getIntStripeThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
