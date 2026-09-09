export const IntStripeNodeGqlTypeDefs = `
  type IntStripeNode {
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
    getIntStripeNode(id: ID!): IntStripeNode
    listIntStripeNodes(tenantId: String!, limit: Int): [IntStripeNode!]!
  }

  extend type Mutation {
    createIntStripeNode(tenantId: String!, code: String!, name: String!): IntStripeNode!
    deleteIntStripeNode(id: ID!): Boolean!
  }
`;

export const IntStripeNodeGqlResolvers = {
  Query: {
    getIntStripeNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
