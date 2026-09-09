export const CrmPipelineBatchGqlTypeDefs = `
  type CrmPipelineBatch {
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
    getCrmPipelineBatch(id: ID!): CrmPipelineBatch
    listCrmPipelineBatchs(tenantId: String!, limit: Int): [CrmPipelineBatch!]!
  }

  extend type Mutation {
    createCrmPipelineBatch(tenantId: String!, code: String!, name: String!): CrmPipelineBatch!
    deleteCrmPipelineBatch(id: ID!): Boolean!
  }
`;

export const CrmPipelineBatchGqlResolvers = {
  Query: {
    getCrmPipelineBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
