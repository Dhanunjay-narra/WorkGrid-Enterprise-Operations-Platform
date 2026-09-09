export const CrmLeadsBatchGqlTypeDefs = `
  type CrmLeadsBatch {
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
    getCrmLeadsBatch(id: ID!): CrmLeadsBatch
    listCrmLeadsBatchs(tenantId: String!, limit: Int): [CrmLeadsBatch!]!
  }

  extend type Mutation {
    createCrmLeadsBatch(tenantId: String!, code: String!, name: String!): CrmLeadsBatch!
    deleteCrmLeadsBatch(id: ID!): Boolean!
  }
`;

export const CrmLeadsBatchGqlResolvers = {
  Query: {
    getCrmLeadsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
