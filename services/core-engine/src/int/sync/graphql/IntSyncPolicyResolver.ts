export const IntSyncPolicyGqlTypeDefs = `
  type IntSyncPolicy {
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
    getIntSyncPolicy(id: ID!): IntSyncPolicy
    listIntSyncPolicys(tenantId: String!, limit: Int): [IntSyncPolicy!]!
  }

  extend type Mutation {
    createIntSyncPolicy(tenantId: String!, code: String!, name: String!): IntSyncPolicy!
    deleteIntSyncPolicy(id: ID!): Boolean!
  }
`;

export const IntSyncPolicyGqlResolvers = {
  Query: {
    getIntSyncPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
