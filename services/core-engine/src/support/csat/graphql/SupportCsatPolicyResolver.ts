export const SupportCsatPolicyGqlTypeDefs = `
  type SupportCsatPolicy {
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
    getSupportCsatPolicy(id: ID!): SupportCsatPolicy
    listSupportCsatPolicys(tenantId: String!, limit: Int): [SupportCsatPolicy!]!
  }

  extend type Mutation {
    createSupportCsatPolicy(tenantId: String!, code: String!, name: String!): SupportCsatPolicy!
    deleteSupportCsatPolicy(id: ID!): Boolean!
  }
`;

export const SupportCsatPolicyGqlResolvers = {
  Query: {
    getSupportCsatPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
