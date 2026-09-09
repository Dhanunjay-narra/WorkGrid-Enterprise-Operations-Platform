export const SupportQueuesThresholdGqlTypeDefs = `
  type SupportQueuesThreshold {
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
    getSupportQueuesThreshold(id: ID!): SupportQueuesThreshold
    listSupportQueuesThresholds(tenantId: String!, limit: Int): [SupportQueuesThreshold!]!
  }

  extend type Mutation {
    createSupportQueuesThreshold(tenantId: String!, code: String!, name: String!): SupportQueuesThreshold!
    deleteSupportQueuesThreshold(id: ID!): Boolean!
  }
`;

export const SupportQueuesThresholdGqlResolvers = {
  Query: {
    getSupportQueuesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
