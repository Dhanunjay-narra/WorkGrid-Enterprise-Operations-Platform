export const CrmTerritorySessionGqlTypeDefs = `
  type CrmTerritorySession {
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
    getCrmTerritorySession(id: ID!): CrmTerritorySession
    listCrmTerritorySessions(tenantId: String!, limit: Int): [CrmTerritorySession!]!
  }

  extend type Mutation {
    createCrmTerritorySession(tenantId: String!, code: String!, name: String!): CrmTerritorySession!
    deleteCrmTerritorySession(id: ID!): Boolean!
  }
`;

export const CrmTerritorySessionGqlResolvers = {
  Query: {
    getCrmTerritorySession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritorySession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
