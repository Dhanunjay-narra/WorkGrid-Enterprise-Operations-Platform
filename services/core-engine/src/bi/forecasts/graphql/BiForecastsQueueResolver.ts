export const BiForecastsQueueGqlTypeDefs = `
  type BiForecastsQueue {
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
    getBiForecastsQueue(id: ID!): BiForecastsQueue
    listBiForecastsQueues(tenantId: String!, limit: Int): [BiForecastsQueue!]!
  }

  extend type Mutation {
    createBiForecastsQueue(tenantId: String!, code: String!, name: String!): BiForecastsQueue!
    deleteBiForecastsQueue(id: ID!): Boolean!
  }
`;

export const BiForecastsQueueGqlResolvers = {
  Query: {
    getBiForecastsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
