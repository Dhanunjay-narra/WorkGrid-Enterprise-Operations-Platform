export const SupportQueuesPolicyGqlTypeDefs = `
  type SupportQueuesPolicy {
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
    getSupportQueuesPolicy(id: ID!): SupportQueuesPolicy
    listSupportQueuesPolicys(tenantId: String!, limit: Int): [SupportQueuesPolicy!]!
  }

  extend type Mutation {
    createSupportQueuesPolicy(tenantId: String!, code: String!, name: String!): SupportQueuesPolicy!
    deleteSupportQueuesPolicy(id: ID!): Boolean!
  }
`;

export const SupportQueuesPolicyGqlResolvers = {
  Query: {
    getSupportQueuesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
