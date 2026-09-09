export const CrmTerritoryStateGqlTypeDefs = `
  type CrmTerritoryState {
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
    getCrmTerritoryState(id: ID!): CrmTerritoryState
    listCrmTerritoryStates(tenantId: String!, limit: Int): [CrmTerritoryState!]!
  }

  extend type Mutation {
    createCrmTerritoryState(tenantId: String!, code: String!, name: String!): CrmTerritoryState!
    deleteCrmTerritoryState(id: ID!): Boolean!
  }
`;

export const CrmTerritoryStateGqlResolvers = {
  Query: {
    getCrmTerritoryState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
