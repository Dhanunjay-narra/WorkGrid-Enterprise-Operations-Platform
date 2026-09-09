export const SupportAgentsQueueGqlTypeDefs = `
  type SupportAgentsQueue {
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
    getSupportAgentsQueue(id: ID!): SupportAgentsQueue
    listSupportAgentsQueues(tenantId: String!, limit: Int): [SupportAgentsQueue!]!
  }

  extend type Mutation {
    createSupportAgentsQueue(tenantId: String!, code: String!, name: String!): SupportAgentsQueue!
    deleteSupportAgentsQueue(id: ID!): Boolean!
  }
`;

export const SupportAgentsQueueGqlResolvers = {
  Query: {
    getSupportAgentsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
