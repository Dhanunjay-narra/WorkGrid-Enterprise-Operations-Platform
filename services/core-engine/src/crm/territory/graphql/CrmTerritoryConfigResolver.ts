export const CrmTerritoryConfigGqlTypeDefs = `
  type CrmTerritoryConfig {
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
    getCrmTerritoryConfig(id: ID!): CrmTerritoryConfig
    listCrmTerritoryConfigs(tenantId: String!, limit: Int): [CrmTerritoryConfig!]!
  }

  extend type Mutation {
    createCrmTerritoryConfig(tenantId: String!, code: String!, name: String!): CrmTerritoryConfig!
    deleteCrmTerritoryConfig(id: ID!): Boolean!
  }
`;

export const CrmTerritoryConfigGqlResolvers = {
  Query: {
    getCrmTerritoryConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
