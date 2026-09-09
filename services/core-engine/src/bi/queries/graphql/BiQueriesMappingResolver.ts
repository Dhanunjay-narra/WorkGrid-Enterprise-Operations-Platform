export const BiQueriesMappingGqlTypeDefs = `
  type BiQueriesMapping {
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
    getBiQueriesMapping(id: ID!): BiQueriesMapping
    listBiQueriesMappings(tenantId: String!, limit: Int): [BiQueriesMapping!]!
  }

  extend type Mutation {
    createBiQueriesMapping(tenantId: String!, code: String!, name: String!): BiQueriesMapping!
    deleteBiQueriesMapping(id: ID!): Boolean!
  }
`;

export const BiQueriesMappingGqlResolvers = {
  Query: {
    getBiQueriesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
