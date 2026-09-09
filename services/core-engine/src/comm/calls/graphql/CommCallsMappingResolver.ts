export const CommCallsMappingGqlTypeDefs = `
  type CommCallsMapping {
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
    getCommCallsMapping(id: ID!): CommCallsMapping
    listCommCallsMappings(tenantId: String!, limit: Int): [CommCallsMapping!]!
  }

  extend type Mutation {
    createCommCallsMapping(tenantId: String!, code: String!, name: String!): CommCallsMapping!
    deleteCommCallsMapping(id: ID!): Boolean!
  }
`;

export const CommCallsMappingGqlResolvers = {
  Query: {
    getCommCallsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
