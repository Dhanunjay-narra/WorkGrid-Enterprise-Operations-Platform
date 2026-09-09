export const SecurityPolicyGqlTypeDefs = `
  type SecurityPolicy {
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
    getSecurityPolicy(id: ID!): SecurityPolicy
    listSecurityPolicys(tenantId: String!, limit: Int): [SecurityPolicy!]!
  }

  extend type Mutation {
    createSecurityPolicy(tenantId: String!, code: String!, name: String!): SecurityPolicy!
    deleteSecurityPolicy(id: ID!): Boolean!
  }
`;

export const SecurityPolicyGqlResolvers = {
  Query: {
    getSecurityPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
