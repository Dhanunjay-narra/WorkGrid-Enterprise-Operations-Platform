export const RbacBatchGqlTypeDefs = `
  type RbacBatch {
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
    getRbacBatch(id: ID!): RbacBatch
    listRbacBatchs(tenantId: String!, limit: Int): [RbacBatch!]!
  }

  extend type Mutation {
    createRbacBatch(tenantId: String!, code: String!, name: String!): RbacBatch!
    deleteRbacBatch(id: ID!): Boolean!
  }
`;

export const RbacBatchGqlResolvers = {
  Query: {
    getRbacBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
