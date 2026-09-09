export const IdentityMappingGqlTypeDefs = `
  type IdentityMapping {
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
    getIdentityMapping(id: ID!): IdentityMapping
    listIdentityMappings(tenantId: String!, limit: Int): [IdentityMapping!]!
  }

  extend type Mutation {
    createIdentityMapping(tenantId: String!, code: String!, name: String!): IdentityMapping!
    deleteIdentityMapping(id: ID!): Boolean!
  }
`;

export const IdentityMappingGqlResolvers = {
  Query: {
    getIdentityMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
