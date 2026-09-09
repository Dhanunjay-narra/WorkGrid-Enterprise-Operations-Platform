export const DmsChunksMappingGqlTypeDefs = `
  type DmsChunksMapping {
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
    getDmsChunksMapping(id: ID!): DmsChunksMapping
    listDmsChunksMappings(tenantId: String!, limit: Int): [DmsChunksMapping!]!
  }

  extend type Mutation {
    createDmsChunksMapping(tenantId: String!, code: String!, name: String!): DmsChunksMapping!
    deleteDmsChunksMapping(id: ID!): Boolean!
  }
`;

export const DmsChunksMappingGqlResolvers = {
  Query: {
    getDmsChunksMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
