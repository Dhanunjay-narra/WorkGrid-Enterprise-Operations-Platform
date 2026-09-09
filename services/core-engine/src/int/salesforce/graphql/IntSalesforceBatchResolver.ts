export const IntSalesforceBatchGqlTypeDefs = `
  type IntSalesforceBatch {
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
    getIntSalesforceBatch(id: ID!): IntSalesforceBatch
    listIntSalesforceBatchs(tenantId: String!, limit: Int): [IntSalesforceBatch!]!
  }

  extend type Mutation {
    createIntSalesforceBatch(tenantId: String!, code: String!, name: String!): IntSalesforceBatch!
    deleteIntSalesforceBatch(id: ID!): Boolean!
  }
`;

export const IntSalesforceBatchGqlResolvers = {
  Query: {
    getIntSalesforceBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
