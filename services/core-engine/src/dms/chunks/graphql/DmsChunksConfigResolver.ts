export const DmsChunksConfigGqlTypeDefs = `
  type DmsChunksConfig {
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
    getDmsChunksConfig(id: ID!): DmsChunksConfig
    listDmsChunksConfigs(tenantId: String!, limit: Int): [DmsChunksConfig!]!
  }

  extend type Mutation {
    createDmsChunksConfig(tenantId: String!, code: String!, name: String!): DmsChunksConfig!
    deleteDmsChunksConfig(id: ID!): Boolean!
  }
`;

export const DmsChunksConfigGqlResolvers = {
  Query: {
    getDmsChunksConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
