export const SupportTicketsQueueGqlTypeDefs = `
  type SupportTicketsQueue {
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
    getSupportTicketsQueue(id: ID!): SupportTicketsQueue
    listSupportTicketsQueues(tenantId: String!, limit: Int): [SupportTicketsQueue!]!
  }

  extend type Mutation {
    createSupportTicketsQueue(tenantId: String!, code: String!, name: String!): SupportTicketsQueue!
    deleteSupportTicketsQueue(id: ID!): Boolean!
  }
`;

export const SupportTicketsQueueGqlResolvers = {
  Query: {
    getSupportTicketsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
