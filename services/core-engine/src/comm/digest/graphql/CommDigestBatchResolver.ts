export const CommDigestBatchGqlTypeDefs = `
  type CommDigestBatch {
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
    getCommDigestBatch(id: ID!): CommDigestBatch
    listCommDigestBatchs(tenantId: String!, limit: Int): [CommDigestBatch!]!
  }

  extend type Mutation {
    createCommDigestBatch(tenantId: String!, code: String!, name: String!): CommDigestBatch!
    deleteCommDigestBatch(id: ID!): Boolean!
  }
`;

export const CommDigestBatchGqlResolvers = {
  Query: {
    getCommDigestBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
