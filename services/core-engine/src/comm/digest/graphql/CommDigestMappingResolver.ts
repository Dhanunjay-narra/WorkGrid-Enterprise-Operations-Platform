export const CommDigestMappingGqlTypeDefs = `
  type CommDigestMapping {
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
    getCommDigestMapping(id: ID!): CommDigestMapping
    listCommDigestMappings(tenantId: String!, limit: Int): [CommDigestMapping!]!
  }

  extend type Mutation {
    createCommDigestMapping(tenantId: String!, code: String!, name: String!): CommDigestMapping!
    deleteCommDigestMapping(id: ID!): Boolean!
  }
`;

export const CommDigestMappingGqlResolvers = {
  Query: {
    getCommDigestMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
