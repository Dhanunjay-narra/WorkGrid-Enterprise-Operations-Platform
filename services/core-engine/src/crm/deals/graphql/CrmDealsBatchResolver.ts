export const CrmDealsBatchGqlTypeDefs = `
  type CrmDealsBatch {
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
    getCrmDealsBatch(id: ID!): CrmDealsBatch
    listCrmDealsBatchs(tenantId: String!, limit: Int): [CrmDealsBatch!]!
  }

  extend type Mutation {
    createCrmDealsBatch(tenantId: String!, code: String!, name: String!): CrmDealsBatch!
    deleteCrmDealsBatch(id: ID!): Boolean!
  }
`;

export const CrmDealsBatchGqlResolvers = {
  Query: {
    getCrmDealsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
