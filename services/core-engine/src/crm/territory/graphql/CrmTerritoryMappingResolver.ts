export const CrmTerritoryMappingGqlTypeDefs = `
  type CrmTerritoryMapping {
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
    getCrmTerritoryMapping(id: ID!): CrmTerritoryMapping
    listCrmTerritoryMappings(tenantId: String!, limit: Int): [CrmTerritoryMapping!]!
  }

  extend type Mutation {
    createCrmTerritoryMapping(tenantId: String!, code: String!, name: String!): CrmTerritoryMapping!
    deleteCrmTerritoryMapping(id: ID!): Boolean!
  }
`;

export const CrmTerritoryMappingGqlResolvers = {
  Query: {
    getCrmTerritoryMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
