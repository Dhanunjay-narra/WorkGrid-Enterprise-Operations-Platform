export const CrmPipelineTransactionGqlTypeDefs = `
  type CrmPipelineTransaction {
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
    getCrmPipelineTransaction(id: ID!): CrmPipelineTransaction
    listCrmPipelineTransactions(tenantId: String!, limit: Int): [CrmPipelineTransaction!]!
  }

  extend type Mutation {
    createCrmPipelineTransaction(tenantId: String!, code: String!, name: String!): CrmPipelineTransaction!
    deleteCrmPipelineTransaction(id: ID!): Boolean!
  }
`;

export const CrmPipelineTransactionGqlResolvers = {
  Query: {
    getCrmPipelineTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
