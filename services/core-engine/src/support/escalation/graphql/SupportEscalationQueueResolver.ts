export const SupportEscalationQueueGqlTypeDefs = `
  type SupportEscalationQueue {
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
    getSupportEscalationQueue(id: ID!): SupportEscalationQueue
    listSupportEscalationQueues(tenantId: String!, limit: Int): [SupportEscalationQueue!]!
  }

  extend type Mutation {
    createSupportEscalationQueue(tenantId: String!, code: String!, name: String!): SupportEscalationQueue!
    deleteSupportEscalationQueue(id: ID!): Boolean!
  }
`;

export const SupportEscalationQueueGqlResolvers = {
  Query: {
    getSupportEscalationQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
