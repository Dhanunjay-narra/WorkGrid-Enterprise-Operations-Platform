export const CommMessagesThresholdGqlTypeDefs = `
  type CommMessagesThreshold {
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
    getCommMessagesThreshold(id: ID!): CommMessagesThreshold
    listCommMessagesThresholds(tenantId: String!, limit: Int): [CommMessagesThreshold!]!
  }

  extend type Mutation {
    createCommMessagesThreshold(tenantId: String!, code: String!, name: String!): CommMessagesThreshold!
    deleteCommMessagesThreshold(id: ID!): Boolean!
  }
`;

export const CommMessagesThresholdGqlResolvers = {
  Query: {
    getCommMessagesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
