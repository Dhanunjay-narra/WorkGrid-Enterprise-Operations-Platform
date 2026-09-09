export const BiAnomaliesQueueGqlTypeDefs = `
  type BiAnomaliesQueue {
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
    getBiAnomaliesQueue(id: ID!): BiAnomaliesQueue
    listBiAnomaliesQueues(tenantId: String!, limit: Int): [BiAnomaliesQueue!]!
  }

  extend type Mutation {
    createBiAnomaliesQueue(tenantId: String!, code: String!, name: String!): BiAnomaliesQueue!
    deleteBiAnomaliesQueue(id: ID!): Boolean!
  }
`;

export const BiAnomaliesQueueGqlResolvers = {
  Query: {
    getBiAnomaliesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
