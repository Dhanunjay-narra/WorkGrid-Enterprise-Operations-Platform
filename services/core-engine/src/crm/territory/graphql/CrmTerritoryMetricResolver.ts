export const CrmTerritoryMetricGqlTypeDefs = `
  type CrmTerritoryMetric {
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
    getCrmTerritoryMetric(id: ID!): CrmTerritoryMetric
    listCrmTerritoryMetrics(tenantId: String!, limit: Int): [CrmTerritoryMetric!]!
  }

  extend type Mutation {
    createCrmTerritoryMetric(tenantId: String!, code: String!, name: String!): CrmTerritoryMetric!
    deleteCrmTerritoryMetric(id: ID!): Boolean!
  }
`;

export const CrmTerritoryMetricGqlResolvers = {
  Query: {
    getCrmTerritoryMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
