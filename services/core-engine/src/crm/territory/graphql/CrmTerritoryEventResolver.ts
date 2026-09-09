export const CrmTerritoryEventGqlTypeDefs = `
  type CrmTerritoryEvent {
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
    getCrmTerritoryEvent(id: ID!): CrmTerritoryEvent
    listCrmTerritoryEvents(tenantId: String!, limit: Int): [CrmTerritoryEvent!]!
  }

  extend type Mutation {
    createCrmTerritoryEvent(tenantId: String!, code: String!, name: String!): CrmTerritoryEvent!
    deleteCrmTerritoryEvent(id: ID!): Boolean!
  }
`;

export const CrmTerritoryEventGqlResolvers = {
  Query: {
    getCrmTerritoryEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
