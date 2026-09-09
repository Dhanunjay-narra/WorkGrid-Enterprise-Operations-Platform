export const TenancyBatchGqlTypeDefs = `
  type TenancyBatch {
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
    getTenancyBatch(id: ID!): TenancyBatch
    listTenancyBatchs(tenantId: String!, limit: Int): [TenancyBatch!]!
  }

  extend type Mutation {
    createTenancyBatch(tenantId: String!, code: String!, name: String!): TenancyBatch!
    deleteTenancyBatch(id: ID!): Boolean!
  }
`;

export const TenancyBatchGqlResolvers = {
  Query: {
    getTenancyBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
