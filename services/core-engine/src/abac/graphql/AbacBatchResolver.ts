export const AbacBatchGqlTypeDefs = `
  type AbacBatch {
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
    getAbacBatch(id: ID!): AbacBatch
    listAbacBatchs(tenantId: String!, limit: Int): [AbacBatch!]!
  }

  extend type Mutation {
    createAbacBatch(tenantId: String!, code: String!, name: String!): AbacBatch!
    deleteAbacBatch(id: ID!): Boolean!
  }
`;

export const AbacBatchGqlResolvers = {
  Query: {
    getAbacBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
