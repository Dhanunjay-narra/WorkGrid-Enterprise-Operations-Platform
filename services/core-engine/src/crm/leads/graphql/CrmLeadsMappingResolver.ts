export const CrmLeadsMappingGqlTypeDefs = `
  type CrmLeadsMapping {
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
    getCrmLeadsMapping(id: ID!): CrmLeadsMapping
    listCrmLeadsMappings(tenantId: String!, limit: Int): [CrmLeadsMapping!]!
  }

  extend type Mutation {
    createCrmLeadsMapping(tenantId: String!, code: String!, name: String!): CrmLeadsMapping!
    deleteCrmLeadsMapping(id: ID!): Boolean!
  }
`;

export const CrmLeadsMappingGqlResolvers = {
  Query: {
    getCrmLeadsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
