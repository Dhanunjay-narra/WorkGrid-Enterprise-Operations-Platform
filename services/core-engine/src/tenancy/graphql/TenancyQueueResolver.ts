export const TenancyQueueGqlTypeDefs = `
  type TenancyQueue {
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
    getTenancyQueue(id: ID!): TenancyQueue
    listTenancyQueues(tenantId: String!, limit: Int): [TenancyQueue!]!
  }

  extend type Mutation {
    createTenancyQueue(tenantId: String!, code: String!, name: String!): TenancyQueue!
    deleteTenancyQueue(id: ID!): Boolean!
  }
`;

export const TenancyQueueGqlResolvers = {
  Query: {
    getTenancyQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
