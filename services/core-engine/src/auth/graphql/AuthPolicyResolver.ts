export const AuthPolicyGqlTypeDefs = `
  type AuthPolicy {
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
    getAuthPolicy(id: ID!): AuthPolicy
    listAuthPolicys(tenantId: String!, limit: Int): [AuthPolicy!]!
  }

  extend type Mutation {
    createAuthPolicy(tenantId: String!, code: String!, name: String!): AuthPolicy!
    deleteAuthPolicy(id: ID!): Boolean!
  }
`;

export const AuthPolicyGqlResolvers = {
  Query: {
    getAuthPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
