export const TenancyMappingGqlTypeDefs = `
  type TenancyMapping {
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
    getTenancyMapping(id: ID!): TenancyMapping
    listTenancyMappings(tenantId: String!, limit: Int): [TenancyMapping!]!
  }

  extend type Mutation {
    createTenancyMapping(tenantId: String!, code: String!, name: String!): TenancyMapping!
    deleteTenancyMapping(id: ID!): Boolean!
  }
`;

export const TenancyMappingGqlResolvers = {
  Query: {
    getTenancyMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
