export const IntStripeBatchGqlTypeDefs = `
  type IntStripeBatch {
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
    getIntStripeBatch(id: ID!): IntStripeBatch
    listIntStripeBatchs(tenantId: String!, limit: Int): [IntStripeBatch!]!
  }

  extend type Mutation {
    createIntStripeBatch(tenantId: String!, code: String!, name: String!): IntStripeBatch!
    deleteIntStripeBatch(id: ID!): Boolean!
  }
`;

export const IntStripeBatchGqlResolvers = {
  Query: {
    getIntStripeBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
