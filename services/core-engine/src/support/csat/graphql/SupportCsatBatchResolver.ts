export const SupportCsatBatchGqlTypeDefs = `
  type SupportCsatBatch {
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
    getSupportCsatBatch(id: ID!): SupportCsatBatch
    listSupportCsatBatchs(tenantId: String!, limit: Int): [SupportCsatBatch!]!
  }

  extend type Mutation {
    createSupportCsatBatch(tenantId: String!, code: String!, name: String!): SupportCsatBatch!
    deleteSupportCsatBatch(id: ID!): Boolean!
  }
`;

export const SupportCsatBatchGqlResolvers = {
  Query: {
    getSupportCsatBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
