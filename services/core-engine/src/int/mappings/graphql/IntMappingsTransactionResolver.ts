export const IntMappingsTransactionGqlTypeDefs = `
  type IntMappingsTransaction {
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
    getIntMappingsTransaction(id: ID!): IntMappingsTransaction
    listIntMappingsTransactions(tenantId: String!, limit: Int): [IntMappingsTransaction!]!
  }

  extend type Mutation {
    createIntMappingsTransaction(tenantId: String!, code: String!, name: String!): IntMappingsTransaction!
    deleteIntMappingsTransaction(id: ID!): Boolean!
  }
`;

export const IntMappingsTransactionGqlResolvers = {
  Query: {
    getIntMappingsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntMappingsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
