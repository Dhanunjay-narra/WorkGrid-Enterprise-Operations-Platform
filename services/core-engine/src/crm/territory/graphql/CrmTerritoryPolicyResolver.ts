export const CrmTerritoryPolicyGqlTypeDefs = `
  type CrmTerritoryPolicy {
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
    getCrmTerritoryPolicy(id: ID!): CrmTerritoryPolicy
    listCrmTerritoryPolicys(tenantId: String!, limit: Int): [CrmTerritoryPolicy!]!
  }

  extend type Mutation {
    createCrmTerritoryPolicy(tenantId: String!, code: String!, name: String!): CrmTerritoryPolicy!
    deleteCrmTerritoryPolicy(id: ID!): Boolean!
  }
`;

export const CrmTerritoryPolicyGqlResolvers = {
  Query: {
    getCrmTerritoryPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
