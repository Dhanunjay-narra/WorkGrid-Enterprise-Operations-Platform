export const IntStripeItemGqlTypeDefs = `
  type IntStripeItem {
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
    getIntStripeItem(id: ID!): IntStripeItem
    listIntStripeItems(tenantId: String!, limit: Int): [IntStripeItem!]!
  }

  extend type Mutation {
    createIntStripeItem(tenantId: String!, code: String!, name: String!): IntStripeItem!
    deleteIntStripeItem(id: ID!): Boolean!
  }
`;

export const IntStripeItemGqlResolvers = {
  Query: {
    getIntStripeItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
