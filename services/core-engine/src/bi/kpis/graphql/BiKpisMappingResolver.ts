export const BiKpisMappingGqlTypeDefs = `
  type BiKpisMapping {
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
    getBiKpisMapping(id: ID!): BiKpisMapping
    listBiKpisMappings(tenantId: String!, limit: Int): [BiKpisMapping!]!
  }

  extend type Mutation {
    createBiKpisMapping(tenantId: String!, code: String!, name: String!): BiKpisMapping!
    deleteBiKpisMapping(id: ID!): Boolean!
  }
`;

export const BiKpisMappingGqlResolvers = {
  Query: {
    getBiKpisMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
