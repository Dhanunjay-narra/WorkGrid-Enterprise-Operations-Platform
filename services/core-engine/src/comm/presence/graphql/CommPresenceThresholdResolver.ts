export const CommPresenceThresholdGqlTypeDefs = `
  type CommPresenceThreshold {
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
    getCommPresenceThreshold(id: ID!): CommPresenceThreshold
    listCommPresenceThresholds(tenantId: String!, limit: Int): [CommPresenceThreshold!]!
  }

  extend type Mutation {
    createCommPresenceThreshold(tenantId: String!, code: String!, name: String!): CommPresenceThreshold!
    deleteCommPresenceThreshold(id: ID!): Boolean!
  }
`;

export const CommPresenceThresholdGqlResolvers = {
  Query: {
    getCommPresenceThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
