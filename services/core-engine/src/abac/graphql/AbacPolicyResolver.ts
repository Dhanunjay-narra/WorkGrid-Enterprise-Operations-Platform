export const AbacPolicyGqlTypeDefs = `
  type AbacPolicy {
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
    getAbacPolicy(id: ID!): AbacPolicy
    listAbacPolicys(tenantId: String!, limit: Int): [AbacPolicy!]!
  }

  extend type Mutation {
    createAbacPolicy(tenantId: String!, code: String!, name: String!): AbacPolicy!
    deleteAbacPolicy(id: ID!): Boolean!
  }
`;

export const AbacPolicyGqlResolvers = {
  Query: {
    getAbacPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
