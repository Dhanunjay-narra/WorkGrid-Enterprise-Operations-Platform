export const CommPresencePolicyGqlTypeDefs = `
  type CommPresencePolicy {
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
    getCommPresencePolicy(id: ID!): CommPresencePolicy
    listCommPresencePolicys(tenantId: String!, limit: Int): [CommPresencePolicy!]!
  }

  extend type Mutation {
    createCommPresencePolicy(tenantId: String!, code: String!, name: String!): CommPresencePolicy!
    deleteCommPresencePolicy(id: ID!): Boolean!
  }
`;

export const CommPresencePolicyGqlResolvers = {
  Query: {
    getCommPresencePolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresencePolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
