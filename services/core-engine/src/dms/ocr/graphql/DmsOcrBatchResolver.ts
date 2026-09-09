export const DmsOcrBatchGqlTypeDefs = `
  type DmsOcrBatch {
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
    getDmsOcrBatch(id: ID!): DmsOcrBatch
    listDmsOcrBatchs(tenantId: String!, limit: Int): [DmsOcrBatch!]!
  }

  extend type Mutation {
    createDmsOcrBatch(tenantId: String!, code: String!, name: String!): DmsOcrBatch!
    deleteDmsOcrBatch(id: ID!): Boolean!
  }
`;

export const DmsOcrBatchGqlResolvers = {
  Query: {
    getDmsOcrBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
