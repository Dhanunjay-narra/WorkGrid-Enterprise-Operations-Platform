export const IntStripeSnapshotGqlTypeDefs = `
  type IntStripeSnapshot {
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
    getIntStripeSnapshot(id: ID!): IntStripeSnapshot
    listIntStripeSnapshots(tenantId: String!, limit: Int): [IntStripeSnapshot!]!
  }

  extend type Mutation {
    createIntStripeSnapshot(tenantId: String!, code: String!, name: String!): IntStripeSnapshot!
    deleteIntStripeSnapshot(id: ID!): Boolean!
  }
`;

export const IntStripeSnapshotGqlResolvers = {
  Query: {
    getIntStripeSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
