export const BiCohortsMappingGqlTypeDefs = `
  type BiCohortsMapping {
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
    getBiCohortsMapping(id: ID!): BiCohortsMapping
    listBiCohortsMappings(tenantId: String!, limit: Int): [BiCohortsMapping!]!
  }

  extend type Mutation {
    createBiCohortsMapping(tenantId: String!, code: String!, name: String!): BiCohortsMapping!
    deleteBiCohortsMapping(id: ID!): Boolean!
  }
`;

export const BiCohortsMappingGqlResolvers = {
  Query: {
    getBiCohortsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
