export const IdentityBatchGqlTypeDefs = `
  type IdentityBatch {
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
    getIdentityBatch(id: ID!): IdentityBatch
    listIdentityBatchs(tenantId: String!, limit: Int): [IdentityBatch!]!
  }

  extend type Mutation {
    createIdentityBatch(tenantId: String!, code: String!, name: String!): IdentityBatch!
    deleteIdentityBatch(id: ID!): Boolean!
  }
`;

export const IdentityBatchGqlResolvers = {
  Query: {
    getIdentityBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
