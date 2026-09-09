export const TenancyPolicyGqlTypeDefs = `
  type TenancyPolicy {
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
    getTenancyPolicy(id: ID!): TenancyPolicy
    listTenancyPolicys(tenantId: String!, limit: Int): [TenancyPolicy!]!
  }

  extend type Mutation {
    createTenancyPolicy(tenantId: String!, code: String!, name: String!): TenancyPolicy!
    deleteTenancyPolicy(id: ID!): Boolean!
  }
`;

export const TenancyPolicyGqlResolvers = {
  Query: {
    getTenancyPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
