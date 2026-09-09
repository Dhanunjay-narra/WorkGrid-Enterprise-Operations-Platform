export const CommMessagesBatchGqlTypeDefs = `
  type CommMessagesBatch {
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
    getCommMessagesBatch(id: ID!): CommMessagesBatch
    listCommMessagesBatchs(tenantId: String!, limit: Int): [CommMessagesBatch!]!
  }

  extend type Mutation {
    createCommMessagesBatch(tenantId: String!, code: String!, name: String!): CommMessagesBatch!
    deleteCommMessagesBatch(id: ID!): Boolean!
  }
`;

export const CommMessagesBatchGqlResolvers = {
  Query: {
    getCommMessagesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
