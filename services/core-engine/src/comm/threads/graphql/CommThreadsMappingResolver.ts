export const CommThreadsMappingGqlTypeDefs = `
  type CommThreadsMapping {
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
    getCommThreadsMapping(id: ID!): CommThreadsMapping
    listCommThreadsMappings(tenantId: String!, limit: Int): [CommThreadsMapping!]!
  }

  extend type Mutation {
    createCommThreadsMapping(tenantId: String!, code: String!, name: String!): CommThreadsMapping!
    deleteCommThreadsMapping(id: ID!): Boolean!
  }
`;

export const CommThreadsMappingGqlResolvers = {
  Query: {
    getCommThreadsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
