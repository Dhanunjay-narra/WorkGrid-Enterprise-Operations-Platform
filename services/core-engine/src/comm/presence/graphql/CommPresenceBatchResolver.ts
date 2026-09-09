export const CommPresenceBatchGqlTypeDefs = `
  type CommPresenceBatch {
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
    getCommPresenceBatch(id: ID!): CommPresenceBatch
    listCommPresenceBatchs(tenantId: String!, limit: Int): [CommPresenceBatch!]!
  }

  extend type Mutation {
    createCommPresenceBatch(tenantId: String!, code: String!, name: String!): CommPresenceBatch!
    deleteCommPresenceBatch(id: ID!): Boolean!
  }
`;

export const CommPresenceBatchGqlResolvers = {
  Query: {
    getCommPresenceBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
