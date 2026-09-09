export const BiAnomaliesMappingGqlTypeDefs = `
  type BiAnomaliesMapping {
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
    getBiAnomaliesMapping(id: ID!): BiAnomaliesMapping
    listBiAnomaliesMappings(tenantId: String!, limit: Int): [BiAnomaliesMapping!]!
  }

  extend type Mutation {
    createBiAnomaliesMapping(tenantId: String!, code: String!, name: String!): BiAnomaliesMapping!
    deleteBiAnomaliesMapping(id: ID!): Boolean!
  }
`;

export const BiAnomaliesMappingGqlResolvers = {
  Query: {
    getBiAnomaliesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
