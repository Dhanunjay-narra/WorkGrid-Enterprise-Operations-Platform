export const DmsFoldersQueueGqlTypeDefs = `
  type DmsFoldersQueue {
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
    getDmsFoldersQueue(id: ID!): DmsFoldersQueue
    listDmsFoldersQueues(tenantId: String!, limit: Int): [DmsFoldersQueue!]!
  }

  extend type Mutation {
    createDmsFoldersQueue(tenantId: String!, code: String!, name: String!): DmsFoldersQueue!
    deleteDmsFoldersQueue(id: ID!): Boolean!
  }
`;

export const DmsFoldersQueueGqlResolvers = {
  Query: {
    getDmsFoldersQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
