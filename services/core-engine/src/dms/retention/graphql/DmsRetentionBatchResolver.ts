export const DmsRetentionBatchGqlTypeDefs = `
  type DmsRetentionBatch {
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
    getDmsRetentionBatch(id: ID!): DmsRetentionBatch
    listDmsRetentionBatchs(tenantId: String!, limit: Int): [DmsRetentionBatch!]!
  }

  extend type Mutation {
    createDmsRetentionBatch(tenantId: String!, code: String!, name: String!): DmsRetentionBatch!
    deleteDmsRetentionBatch(id: ID!): Boolean!
  }
`;

export const DmsRetentionBatchGqlResolvers = {
  Query: {
    getDmsRetentionBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
