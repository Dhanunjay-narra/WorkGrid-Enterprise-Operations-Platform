export const SupportSlaPolicyGqlTypeDefs = `
  type SupportSlaPolicy {
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
    getSupportSlaPolicy(id: ID!): SupportSlaPolicy
    listSupportSlaPolicys(tenantId: String!, limit: Int): [SupportSlaPolicy!]!
  }

  extend type Mutation {
    createSupportSlaPolicy(tenantId: String!, code: String!, name: String!): SupportSlaPolicy!
    deleteSupportSlaPolicy(id: ID!): Boolean!
  }
`;

export const SupportSlaPolicyGqlResolvers = {
  Query: {
    getSupportSlaPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
