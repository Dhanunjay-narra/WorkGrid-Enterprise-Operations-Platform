export const BiKpisQueueGqlTypeDefs = `
  type BiKpisQueue {
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
    getBiKpisQueue(id: ID!): BiKpisQueue
    listBiKpisQueues(tenantId: String!, limit: Int): [BiKpisQueue!]!
  }

  extend type Mutation {
    createBiKpisQueue(tenantId: String!, code: String!, name: String!): BiKpisQueue!
    deleteBiKpisQueue(id: ID!): Boolean!
  }
`;

export const BiKpisQueueGqlResolvers = {
  Query: {
    getBiKpisQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
