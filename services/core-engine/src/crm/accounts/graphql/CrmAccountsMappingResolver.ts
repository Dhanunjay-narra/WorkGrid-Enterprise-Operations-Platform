export const CrmAccountsMappingGqlTypeDefs = `
  type CrmAccountsMapping {
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
    getCrmAccountsMapping(id: ID!): CrmAccountsMapping
    listCrmAccountsMappings(tenantId: String!, limit: Int): [CrmAccountsMapping!]!
  }

  extend type Mutation {
    createCrmAccountsMapping(tenantId: String!, code: String!, name: String!): CrmAccountsMapping!
    deleteCrmAccountsMapping(id: ID!): Boolean!
  }
`;

export const CrmAccountsMappingGqlResolvers = {
  Query: {
    getCrmAccountsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
