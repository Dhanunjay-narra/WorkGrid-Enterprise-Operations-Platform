export const CommDigestPolicyGqlTypeDefs = `
  type CommDigestPolicy {
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
    getCommDigestPolicy(id: ID!): CommDigestPolicy
    listCommDigestPolicys(tenantId: String!, limit: Int): [CommDigestPolicy!]!
  }

  extend type Mutation {
    createCommDigestPolicy(tenantId: String!, code: String!, name: String!): CommDigestPolicy!
    deleteCommDigestPolicy(id: ID!): Boolean!
  }
`;

export const CommDigestPolicyGqlResolvers = {
  Query: {
    getCommDigestPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
