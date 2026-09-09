export const CrmTerritoryTypeDefs = `
  type CrmTerritory {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmTerritory(id: ID!): CrmTerritory
    listCrmTerritorys(tenantId: String!): [CrmTerritory!]!
  }
`;

export const CrmTerritoryResolvers = {
  Query: {
    getCrmTerritory: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmTerritory", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmTerritorys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmTerritory", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
