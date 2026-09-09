export const CrmForecastingSnapshotGqlTypeDefs = `
  type CrmForecastingSnapshot {
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
    getCrmForecastingSnapshot(id: ID!): CrmForecastingSnapshot
    listCrmForecastingSnapshots(tenantId: String!, limit: Int): [CrmForecastingSnapshot!]!
  }

  extend type Mutation {
    createCrmForecastingSnapshot(tenantId: String!, code: String!, name: String!): CrmForecastingSnapshot!
    deleteCrmForecastingSnapshot(id: ID!): Boolean!
  }
`;

export const CrmForecastingSnapshotGqlResolvers = {
  Query: {
    getCrmForecastingSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
