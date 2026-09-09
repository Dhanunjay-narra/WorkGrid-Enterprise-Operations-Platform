export const IntStripeEntryGqlTypeDefs = `
  type IntStripeEntry {
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
    getIntStripeEntry(id: ID!): IntStripeEntry
    listIntStripeEntrys(tenantId: String!, limit: Int): [IntStripeEntry!]!
  }

  extend type Mutation {
    createIntStripeEntry(tenantId: String!, code: String!, name: String!): IntStripeEntry!
    deleteIntStripeEntry(id: ID!): Boolean!
  }
`;

export const IntStripeEntryGqlResolvers = {
  Query: {
    getIntStripeEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
