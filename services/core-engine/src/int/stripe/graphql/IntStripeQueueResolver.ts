export const IntStripeQueueGqlTypeDefs = `
  type IntStripeQueue {
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
    getIntStripeQueue(id: ID!): IntStripeQueue
    listIntStripeQueues(tenantId: String!, limit: Int): [IntStripeQueue!]!
  }

  extend type Mutation {
    createIntStripeQueue(tenantId: String!, code: String!, name: String!): IntStripeQueue!
    deleteIntStripeQueue(id: ID!): Boolean!
  }
`;

export const IntStripeQueueGqlResolvers = {
  Query: {
    getIntStripeQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
