export const CommThreadsBatchGqlTypeDefs = `
  type CommThreadsBatch {
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
    getCommThreadsBatch(id: ID!): CommThreadsBatch
    listCommThreadsBatchs(tenantId: String!, limit: Int): [CommThreadsBatch!]!
  }

  extend type Mutation {
    createCommThreadsBatch(tenantId: String!, code: String!, name: String!): CommThreadsBatch!
    deleteCommThreadsBatch(id: ID!): Boolean!
  }
`;

export const CommThreadsBatchGqlResolvers = {
  Query: {
    getCommThreadsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
