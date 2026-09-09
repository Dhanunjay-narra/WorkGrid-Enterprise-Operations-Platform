export const CommDigestThresholdGqlTypeDefs = `
  type CommDigestThreshold {
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
    getCommDigestThreshold(id: ID!): CommDigestThreshold
    listCommDigestThresholds(tenantId: String!, limit: Int): [CommDigestThreshold!]!
  }

  extend type Mutation {
    createCommDigestThreshold(tenantId: String!, code: String!, name: String!): CommDigestThreshold!
    deleteCommDigestThreshold(id: ID!): Boolean!
  }
`;

export const CommDigestThresholdGqlResolvers = {
  Query: {
    getCommDigestThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
