export const CrmDealsMappingGqlTypeDefs = `
  type CrmDealsMapping {
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
    getCrmDealsMapping(id: ID!): CrmDealsMapping
    listCrmDealsMappings(tenantId: String!, limit: Int): [CrmDealsMapping!]!
  }

  extend type Mutation {
    createCrmDealsMapping(tenantId: String!, code: String!, name: String!): CrmDealsMapping!
    deleteCrmDealsMapping(id: ID!): Boolean!
  }
`;

export const CrmDealsMappingGqlResolvers = {
  Query: {
    getCrmDealsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
