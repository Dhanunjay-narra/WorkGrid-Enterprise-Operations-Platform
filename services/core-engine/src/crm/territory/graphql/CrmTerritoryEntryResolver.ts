export const CrmTerritoryEntryGqlTypeDefs = `
  type CrmTerritoryEntry {
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
    getCrmTerritoryEntry(id: ID!): CrmTerritoryEntry
    listCrmTerritoryEntrys(tenantId: String!, limit: Int): [CrmTerritoryEntry!]!
  }

  extend type Mutation {
    createCrmTerritoryEntry(tenantId: String!, code: String!, name: String!): CrmTerritoryEntry!
    deleteCrmTerritoryEntry(id: ID!): Boolean!
  }
`;

export const CrmTerritoryEntryGqlResolvers = {
  Query: {
    getCrmTerritoryEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
