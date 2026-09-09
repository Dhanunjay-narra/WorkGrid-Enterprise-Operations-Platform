export const IdentityPolicyGqlTypeDefs = `
  type IdentityPolicy {
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
    getIdentityPolicy(id: ID!): IdentityPolicy
    listIdentityPolicys(tenantId: String!, limit: Int): [IdentityPolicy!]!
  }

  extend type Mutation {
    createIdentityPolicy(tenantId: String!, code: String!, name: String!): IdentityPolicy!
    deleteIdentityPolicy(id: ID!): Boolean!
  }
`;

export const IdentityPolicyGqlResolvers = {
  Query: {
    getIdentityPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
