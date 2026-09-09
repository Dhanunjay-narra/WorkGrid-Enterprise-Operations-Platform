export const CommCallsThresholdGqlTypeDefs = `
  type CommCallsThreshold {
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
    getCommCallsThreshold(id: ID!): CommCallsThreshold
    listCommCallsThresholds(tenantId: String!, limit: Int): [CommCallsThreshold!]!
  }

  extend type Mutation {
    createCommCallsThreshold(tenantId: String!, code: String!, name: String!): CommCallsThreshold!
    deleteCommCallsThreshold(id: ID!): Boolean!
  }
`;

export const CommCallsThresholdGqlResolvers = {
  Query: {
    getCommCallsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
