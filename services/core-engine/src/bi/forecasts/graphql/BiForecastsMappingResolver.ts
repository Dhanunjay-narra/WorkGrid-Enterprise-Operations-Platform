export const BiForecastsMappingGqlTypeDefs = `
  type BiForecastsMapping {
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
    getBiForecastsMapping(id: ID!): BiForecastsMapping
    listBiForecastsMappings(tenantId: String!, limit: Int): [BiForecastsMapping!]!
  }

  extend type Mutation {
    createBiForecastsMapping(tenantId: String!, code: String!, name: String!): BiForecastsMapping!
    deleteBiForecastsMapping(id: ID!): Boolean!
  }
`;

export const BiForecastsMappingGqlResolvers = {
  Query: {
    getBiForecastsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
