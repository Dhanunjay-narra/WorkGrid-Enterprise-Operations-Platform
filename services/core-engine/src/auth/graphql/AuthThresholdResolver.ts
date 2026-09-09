export const AuthThresholdGqlTypeDefs = `
  type AuthThreshold {
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
    getAuthThreshold(id: ID!): AuthThreshold
    listAuthThresholds(tenantId: String!, limit: Int): [AuthThreshold!]!
  }

  extend type Mutation {
    createAuthThreshold(tenantId: String!, code: String!, name: String!): AuthThreshold!
    deleteAuthThreshold(id: ID!): Boolean!
  }
`;

export const AuthThresholdGqlResolvers = {
  Query: {
    getAuthThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
