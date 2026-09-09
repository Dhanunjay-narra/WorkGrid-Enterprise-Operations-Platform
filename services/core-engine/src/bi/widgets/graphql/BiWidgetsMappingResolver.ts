export const BiWidgetsMappingGqlTypeDefs = `
  type BiWidgetsMapping {
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
    getBiWidgetsMapping(id: ID!): BiWidgetsMapping
    listBiWidgetsMappings(tenantId: String!, limit: Int): [BiWidgetsMapping!]!
  }

  extend type Mutation {
    createBiWidgetsMapping(tenantId: String!, code: String!, name: String!): BiWidgetsMapping!
    deleteBiWidgetsMapping(id: ID!): Boolean!
  }
`;

export const BiWidgetsMappingGqlResolvers = {
  Query: {
    getBiWidgetsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
