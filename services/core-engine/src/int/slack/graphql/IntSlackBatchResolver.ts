export const IntSlackBatchGqlTypeDefs = `
  type IntSlackBatch {
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
    getIntSlackBatch(id: ID!): IntSlackBatch
    listIntSlackBatchs(tenantId: String!, limit: Int): [IntSlackBatch!]!
  }

  extend type Mutation {
    createIntSlackBatch(tenantId: String!, code: String!, name: String!): IntSlackBatch!
    deleteIntSlackBatch(id: ID!): Boolean!
  }
`;

export const IntSlackBatchGqlResolvers = {
  Query: {
    getIntSlackBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
