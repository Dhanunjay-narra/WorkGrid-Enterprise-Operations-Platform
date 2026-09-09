export const IntStripeStateGqlTypeDefs = `
  type IntStripeState {
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
    getIntStripeState(id: ID!): IntStripeState
    listIntStripeStates(tenantId: String!, limit: Int): [IntStripeState!]!
  }

  extend type Mutation {
    createIntStripeState(tenantId: String!, code: String!, name: String!): IntStripeState!
    deleteIntStripeState(id: ID!): Boolean!
  }
`;

export const IntStripeStateGqlResolvers = {
  Query: {
    getIntStripeState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
