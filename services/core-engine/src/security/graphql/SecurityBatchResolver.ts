export const SecurityBatchGqlTypeDefs = `
  type SecurityBatch {
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
    getSecurityBatch(id: ID!): SecurityBatch
    listSecurityBatchs(tenantId: String!, limit: Int): [SecurityBatch!]!
  }

  extend type Mutation {
    createSecurityBatch(tenantId: String!, code: String!, name: String!): SecurityBatch!
    deleteSecurityBatch(id: ID!): Boolean!
  }
`;

export const SecurityBatchGqlResolvers = {
  Query: {
    getSecurityBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
