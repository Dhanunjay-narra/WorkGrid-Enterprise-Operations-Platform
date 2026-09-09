export const DmsChunksPolicyGqlTypeDefs = `
  type DmsChunksPolicy {
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
    getDmsChunksPolicy(id: ID!): DmsChunksPolicy
    listDmsChunksPolicys(tenantId: String!, limit: Int): [DmsChunksPolicy!]!
  }

  extend type Mutation {
    createDmsChunksPolicy(tenantId: String!, code: String!, name: String!): DmsChunksPolicy!
    deleteDmsChunksPolicy(id: ID!): Boolean!
  }
`;

export const DmsChunksPolicyGqlResolvers = {
  Query: {
    getDmsChunksPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
