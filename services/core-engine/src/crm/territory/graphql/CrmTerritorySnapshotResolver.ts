export const CrmTerritorySnapshotGqlTypeDefs = `
  type CrmTerritorySnapshot {
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
    getCrmTerritorySnapshot(id: ID!): CrmTerritorySnapshot
    listCrmTerritorySnapshots(tenantId: String!, limit: Int): [CrmTerritorySnapshot!]!
  }

  extend type Mutation {
    createCrmTerritorySnapshot(tenantId: String!, code: String!, name: String!): CrmTerritorySnapshot!
    deleteCrmTerritorySnapshot(id: ID!): Boolean!
  }
`;

export const CrmTerritorySnapshotGqlResolvers = {
  Query: {
    getCrmTerritorySnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritorySnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
