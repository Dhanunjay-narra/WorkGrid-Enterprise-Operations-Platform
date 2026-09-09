export const CommThreadsPolicyGqlTypeDefs = `
  type CommThreadsPolicy {
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
    getCommThreadsPolicy(id: ID!): CommThreadsPolicy
    listCommThreadsPolicys(tenantId: String!, limit: Int): [CommThreadsPolicy!]!
  }

  extend type Mutation {
    createCommThreadsPolicy(tenantId: String!, code: String!, name: String!): CommThreadsPolicy!
    deleteCommThreadsPolicy(id: ID!): Boolean!
  }
`;

export const CommThreadsPolicyGqlResolvers = {
  Query: {
    getCommThreadsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
