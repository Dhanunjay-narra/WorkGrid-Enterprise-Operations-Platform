export const IntSyncMappingGqlTypeDefs = `
  type IntSyncMapping {
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
    getIntSyncMapping(id: ID!): IntSyncMapping
    listIntSyncMappings(tenantId: String!, limit: Int): [IntSyncMapping!]!
  }

  extend type Mutation {
    createIntSyncMapping(tenantId: String!, code: String!, name: String!): IntSyncMapping!
    deleteIntSyncMapping(id: ID!): Boolean!
  }
`;

export const IntSyncMappingGqlResolvers = {
  Query: {
    getIntSyncMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
