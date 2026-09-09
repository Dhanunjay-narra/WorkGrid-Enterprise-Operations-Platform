export const IntOauthPolicyGqlTypeDefs = `
  type IntOauthPolicy {
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
    getIntOauthPolicy(id: ID!): IntOauthPolicy
    listIntOauthPolicys(tenantId: String!, limit: Int): [IntOauthPolicy!]!
  }

  extend type Mutation {
    createIntOauthPolicy(tenantId: String!, code: String!, name: String!): IntOauthPolicy!
    deleteIntOauthPolicy(id: ID!): Boolean!
  }
`;

export const IntOauthPolicyGqlResolvers = {
  Query: {
    getIntOauthPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
