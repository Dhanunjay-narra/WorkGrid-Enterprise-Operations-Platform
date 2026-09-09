export const CommCallsBatchGqlTypeDefs = `
  type CommCallsBatch {
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
    getCommCallsBatch(id: ID!): CommCallsBatch
    listCommCallsBatchs(tenantId: String!, limit: Int): [CommCallsBatch!]!
  }

  extend type Mutation {
    createCommCallsBatch(tenantId: String!, code: String!, name: String!): CommCallsBatch!
    deleteCommCallsBatch(id: ID!): Boolean!
  }
`;

export const CommCallsBatchGqlResolvers = {
  Query: {
    getCommCallsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
