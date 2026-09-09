export const BiExportsThresholdGqlTypeDefs = `
  type BiExportsThreshold {
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
    getBiExportsThreshold(id: ID!): BiExportsThreshold
    listBiExportsThresholds(tenantId: String!, limit: Int): [BiExportsThreshold!]!
  }

  extend type Mutation {
    createBiExportsThreshold(tenantId: String!, code: String!, name: String!): BiExportsThreshold!
    deleteBiExportsThreshold(id: ID!): Boolean!
  }
`;

export const BiExportsThresholdGqlResolvers = {
  Query: {
    getBiExportsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiExportsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
