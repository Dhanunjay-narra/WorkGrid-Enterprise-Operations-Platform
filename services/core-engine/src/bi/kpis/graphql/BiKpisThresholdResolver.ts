export const BiKpisThresholdGqlTypeDefs = `
  type BiKpisThreshold {
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
    getBiKpisThreshold(id: ID!): BiKpisThreshold
    listBiKpisThresholds(tenantId: String!, limit: Int): [BiKpisThreshold!]!
  }

  extend type Mutation {
    createBiKpisThreshold(tenantId: String!, code: String!, name: String!): BiKpisThreshold!
    deleteBiKpisThreshold(id: ID!): Boolean!
  }
`;

export const BiKpisThresholdGqlResolvers = {
  Query: {
    getBiKpisThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
