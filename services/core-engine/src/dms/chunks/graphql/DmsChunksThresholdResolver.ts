export const DmsChunksThresholdGqlTypeDefs = `
  type DmsChunksThreshold {
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
    getDmsChunksThreshold(id: ID!): DmsChunksThreshold
    listDmsChunksThresholds(tenantId: String!, limit: Int): [DmsChunksThreshold!]!
  }

  extend type Mutation {
    createDmsChunksThreshold(tenantId: String!, code: String!, name: String!): DmsChunksThreshold!
    deleteDmsChunksThreshold(id: ID!): Boolean!
  }
`;

export const DmsChunksThresholdGqlResolvers = {
  Query: {
    getDmsChunksThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
