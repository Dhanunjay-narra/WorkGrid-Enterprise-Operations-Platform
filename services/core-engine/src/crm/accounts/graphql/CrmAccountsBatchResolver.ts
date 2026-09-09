export const CrmAccountsBatchGqlTypeDefs = `
  type CrmAccountsBatch {
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
    getCrmAccountsBatch(id: ID!): CrmAccountsBatch
    listCrmAccountsBatchs(tenantId: String!, limit: Int): [CrmAccountsBatch!]!
  }

  extend type Mutation {
    createCrmAccountsBatch(tenantId: String!, code: String!, name: String!): CrmAccountsBatch!
    deleteCrmAccountsBatch(id: ID!): Boolean!
  }
`;

export const CrmAccountsBatchGqlResolvers = {
  Query: {
    getCrmAccountsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
