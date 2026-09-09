export const SupportQueuesTaskGqlTypeDefs = `
  type SupportQueuesTask {
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
    getSupportQueuesTask(id: ID!): SupportQueuesTask
    listSupportQueuesTasks(tenantId: String!, limit: Int): [SupportQueuesTask!]!
  }

  extend type Mutation {
    createSupportQueuesTask(tenantId: String!, code: String!, name: String!): SupportQueuesTask!
    deleteSupportQueuesTask(id: ID!): Boolean!
  }
`;

export const SupportQueuesTaskGqlResolvers = {
  Query: {
    getSupportQueuesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
