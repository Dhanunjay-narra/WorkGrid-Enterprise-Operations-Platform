export const CrmTerritoryNodeGqlTypeDefs = `
  type CrmTerritoryNode {
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
    getCrmTerritoryNode(id: ID!): CrmTerritoryNode
    listCrmTerritoryNodes(tenantId: String!, limit: Int): [CrmTerritoryNode!]!
  }

  extend type Mutation {
    createCrmTerritoryNode(tenantId: String!, code: String!, name: String!): CrmTerritoryNode!
    deleteCrmTerritoryNode(id: ID!): Boolean!
  }
`;

export const CrmTerritoryNodeGqlResolvers = {
  Query: {
    getCrmTerritoryNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
