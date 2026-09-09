export const AbacQueueGqlTypeDefs = `
  type AbacQueue {
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
    getAbacQueue(id: ID!): AbacQueue
    listAbacQueues(tenantId: String!, limit: Int): [AbacQueue!]!
  }

  extend type Mutation {
    createAbacQueue(tenantId: String!, code: String!, name: String!): AbacQueue!
    deleteAbacQueue(id: ID!): Boolean!
  }
`;

export const AbacQueueGqlResolvers = {
  Query: {
    getAbacQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
