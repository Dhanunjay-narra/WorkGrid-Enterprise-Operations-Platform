export const CrmTerritoryPayloadGqlTypeDefs = `
  type CrmTerritoryPayload {
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
    getCrmTerritoryPayload(id: ID!): CrmTerritoryPayload
    listCrmTerritoryPayloads(tenantId: String!, limit: Int): [CrmTerritoryPayload!]!
  }

  extend type Mutation {
    createCrmTerritoryPayload(tenantId: String!, code: String!, name: String!): CrmTerritoryPayload!
    deleteCrmTerritoryPayload(id: ID!): Boolean!
  }
`;

export const CrmTerritoryPayloadGqlResolvers = {
  Query: {
    getCrmTerritoryPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
