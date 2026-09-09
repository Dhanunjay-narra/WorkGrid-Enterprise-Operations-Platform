export const CrmTerritoryThresholdGqlTypeDefs = `
  type CrmTerritoryThreshold {
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
    getCrmTerritoryThreshold(id: ID!): CrmTerritoryThreshold
    listCrmTerritoryThresholds(tenantId: String!, limit: Int): [CrmTerritoryThreshold!]!
  }

  extend type Mutation {
    createCrmTerritoryThreshold(tenantId: String!, code: String!, name: String!): CrmTerritoryThreshold!
    deleteCrmTerritoryThreshold(id: ID!): Boolean!
  }
`;

export const CrmTerritoryThresholdGqlResolvers = {
  Query: {
    getCrmTerritoryThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
