export const IntOauthBatchGqlTypeDefs = `
  type IntOauthBatch {
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
    getIntOauthBatch(id: ID!): IntOauthBatch
    listIntOauthBatchs(tenantId: String!, limit: Int): [IntOauthBatch!]!
  }

  extend type Mutation {
    createIntOauthBatch(tenantId: String!, code: String!, name: String!): IntOauthBatch!
    deleteIntOauthBatch(id: ID!): Boolean!
  }
`;

export const IntOauthBatchGqlResolvers = {
  Query: {
    getIntOauthBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
