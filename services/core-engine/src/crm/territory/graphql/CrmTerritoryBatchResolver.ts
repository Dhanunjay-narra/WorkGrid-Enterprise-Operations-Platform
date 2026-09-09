export const CrmTerritoryBatchGqlTypeDefs = `
  type CrmTerritoryBatch {
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
    getCrmTerritoryBatch(id: ID!): CrmTerritoryBatch
    listCrmTerritoryBatchs(tenantId: String!, limit: Int): [CrmTerritoryBatch!]!
  }

  extend type Mutation {
    createCrmTerritoryBatch(tenantId: String!, code: String!, name: String!): CrmTerritoryBatch!
    deleteCrmTerritoryBatch(id: ID!): Boolean!
  }
`;

export const CrmTerritoryBatchGqlResolvers = {
  Query: {
    getCrmTerritoryBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
