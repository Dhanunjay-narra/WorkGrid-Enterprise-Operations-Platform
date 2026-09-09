export const BiWidgetsQueueGqlTypeDefs = `
  type BiWidgetsQueue {
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
    getBiWidgetsQueue(id: ID!): BiWidgetsQueue
    listBiWidgetsQueues(tenantId: String!, limit: Int): [BiWidgetsQueue!]!
  }

  extend type Mutation {
    createBiWidgetsQueue(tenantId: String!, code: String!, name: String!): BiWidgetsQueue!
    deleteBiWidgetsQueue(id: ID!): Boolean!
  }
`;

export const BiWidgetsQueueGqlResolvers = {
  Query: {
    getBiWidgetsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
