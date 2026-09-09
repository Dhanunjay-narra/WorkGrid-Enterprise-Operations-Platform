export const CrmTerritoryAssignmentGqlTypeDefs = `
  type CrmTerritoryAssignment {
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
    getCrmTerritoryAssignment(id: ID!): CrmTerritoryAssignment
    listCrmTerritoryAssignments(tenantId: String!, limit: Int): [CrmTerritoryAssignment!]!
  }

  extend type Mutation {
    createCrmTerritoryAssignment(tenantId: String!, code: String!, name: String!): CrmTerritoryAssignment!
    deleteCrmTerritoryAssignment(id: ID!): Boolean!
  }
`;

export const CrmTerritoryAssignmentGqlResolvers = {
  Query: {
    getCrmTerritoryAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
