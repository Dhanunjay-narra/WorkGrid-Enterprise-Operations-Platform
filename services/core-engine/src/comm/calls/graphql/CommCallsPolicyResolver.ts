export const CommCallsPolicyGqlTypeDefs = `
  type CommCallsPolicy {
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
    getCommCallsPolicy(id: ID!): CommCallsPolicy
    listCommCallsPolicys(tenantId: String!, limit: Int): [CommCallsPolicy!]!
  }

  extend type Mutation {
    createCommCallsPolicy(tenantId: String!, code: String!, name: String!): CommCallsPolicy!
    deleteCommCallsPolicy(id: ID!): Boolean!
  }
`;

export const CommCallsPolicyGqlResolvers = {
  Query: {
    getCommCallsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
