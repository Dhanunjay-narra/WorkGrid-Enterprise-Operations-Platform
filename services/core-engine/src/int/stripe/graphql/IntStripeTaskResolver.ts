export const IntStripeTaskGqlTypeDefs = `
  type IntStripeTask {
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
    getIntStripeTask(id: ID!): IntStripeTask
    listIntStripeTasks(tenantId: String!, limit: Int): [IntStripeTask!]!
  }

  extend type Mutation {
    createIntStripeTask(tenantId: String!, code: String!, name: String!): IntStripeTask!
    deleteIntStripeTask(id: ID!): Boolean!
  }
`;

export const IntStripeTaskGqlResolvers = {
  Query: {
    getIntStripeTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
