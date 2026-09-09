export const AuthBatchGqlTypeDefs = `
  type AuthBatch {
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
    getAuthBatch(id: ID!): AuthBatch
    listAuthBatchs(tenantId: String!, limit: Int): [AuthBatch!]!
  }

  extend type Mutation {
    createAuthBatch(tenantId: String!, code: String!, name: String!): AuthBatch!
    deleteAuthBatch(id: ID!): Boolean!
  }
`;

export const AuthBatchGqlResolvers = {
  Query: {
    getAuthBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
