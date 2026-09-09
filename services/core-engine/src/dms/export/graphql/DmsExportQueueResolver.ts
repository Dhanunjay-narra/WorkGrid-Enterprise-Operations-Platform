export const DmsExportQueueGqlTypeDefs = `
  type DmsExportQueue {
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
    getDmsExportQueue(id: ID!): DmsExportQueue
    listDmsExportQueues(tenantId: String!, limit: Int): [DmsExportQueue!]!
  }

  extend type Mutation {
    createDmsExportQueue(tenantId: String!, code: String!, name: String!): DmsExportQueue!
    deleteDmsExportQueue(id: ID!): Boolean!
  }
`;

export const DmsExportQueueGqlResolvers = {
  Query: {
    getDmsExportQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
