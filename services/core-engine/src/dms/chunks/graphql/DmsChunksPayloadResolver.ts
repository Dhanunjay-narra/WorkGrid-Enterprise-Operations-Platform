export const DmsChunksPayloadGqlTypeDefs = `
  type DmsChunksPayload {
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
    getDmsChunksPayload(id: ID!): DmsChunksPayload
    listDmsChunksPayloads(tenantId: String!, limit: Int): [DmsChunksPayload!]!
  }

  extend type Mutation {
    createDmsChunksPayload(tenantId: String!, code: String!, name: String!): DmsChunksPayload!
    deleteDmsChunksPayload(id: ID!): Boolean!
  }
`;

export const DmsChunksPayloadGqlResolvers = {
  Query: {
    getDmsChunksPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
