export const DmsSignaturesQueueGqlTypeDefs = `
  type DmsSignaturesQueue {
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
    getDmsSignaturesQueue(id: ID!): DmsSignaturesQueue
    listDmsSignaturesQueues(tenantId: String!, limit: Int): [DmsSignaturesQueue!]!
  }

  extend type Mutation {
    createDmsSignaturesQueue(tenantId: String!, code: String!, name: String!): DmsSignaturesQueue!
    deleteDmsSignaturesQueue(id: ID!): Boolean!
  }
`;

export const DmsSignaturesQueueGqlResolvers = {
  Query: {
    getDmsSignaturesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
