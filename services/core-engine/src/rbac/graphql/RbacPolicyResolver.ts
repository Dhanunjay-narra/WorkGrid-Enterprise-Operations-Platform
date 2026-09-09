export const RbacPolicyGqlTypeDefs = `
  type RbacPolicy {
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
    getRbacPolicy(id: ID!): RbacPolicy
    listRbacPolicys(tenantId: String!, limit: Int): [RbacPolicy!]!
  }

  extend type Mutation {
    createRbacPolicy(tenantId: String!, code: String!, name: String!): RbacPolicy!
    deleteRbacPolicy(id: ID!): Boolean!
  }
`;

export const RbacPolicyGqlResolvers = {
  Query: {
    getRbacPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
