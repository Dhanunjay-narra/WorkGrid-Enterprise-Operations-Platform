export const IntStripePolicyGqlTypeDefs = `
  type IntStripePolicy {
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
    getIntStripePolicy(id: ID!): IntStripePolicy
    listIntStripePolicys(tenantId: String!, limit: Int): [IntStripePolicy!]!
  }

  extend type Mutation {
    createIntStripePolicy(tenantId: String!, code: String!, name: String!): IntStripePolicy!
    deleteIntStripePolicy(id: ID!): Boolean!
  }
`;

export const IntStripePolicyGqlResolvers = {
  Query: {
    getIntStripePolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripePolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
