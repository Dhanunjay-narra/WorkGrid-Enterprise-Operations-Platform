export const CommThreadsThresholdGqlTypeDefs = `
  type CommThreadsThreshold {
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
    getCommThreadsThreshold(id: ID!): CommThreadsThreshold
    listCommThreadsThresholds(tenantId: String!, limit: Int): [CommThreadsThreshold!]!
  }

  extend type Mutation {
    createCommThreadsThreshold(tenantId: String!, code: String!, name: String!): CommThreadsThreshold!
    deleteCommThreadsThreshold(id: ID!): Boolean!
  }
`;

export const CommThreadsThresholdGqlResolvers = {
  Query: {
    getCommThreadsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
