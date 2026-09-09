export const CrmForecastingBatchGqlTypeDefs = `
  type CrmForecastingBatch {
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
    getCrmForecastingBatch(id: ID!): CrmForecastingBatch
    listCrmForecastingBatchs(tenantId: String!, limit: Int): [CrmForecastingBatch!]!
  }

  extend type Mutation {
    createCrmForecastingBatch(tenantId: String!, code: String!, name: String!): CrmForecastingBatch!
    deleteCrmForecastingBatch(id: ID!): Boolean!
  }
`;

export const CrmForecastingBatchGqlResolvers = {
  Query: {
    getCrmForecastingBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
