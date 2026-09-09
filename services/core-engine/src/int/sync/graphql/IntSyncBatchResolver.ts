export const IntSyncBatchGqlTypeDefs = `
  type IntSyncBatch {
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
    getIntSyncBatch(id: ID!): IntSyncBatch
    listIntSyncBatchs(tenantId: String!, limit: Int): [IntSyncBatch!]!
  }

  extend type Mutation {
    createIntSyncBatch(tenantId: String!, code: String!, name: String!): IntSyncBatch!
    deleteIntSyncBatch(id: ID!): Boolean!
  }
`;

export const IntSyncBatchGqlResolvers = {
  Query: {
    getIntSyncBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
