export const AuthConfigGqlTypeDefs = `
  type AuthConfig {
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
    getAuthConfig(id: ID!): AuthConfig
    listAuthConfigs(tenantId: String!, limit: Int): [AuthConfig!]!
  }

  extend type Mutation {
    createAuthConfig(tenantId: String!, code: String!, name: String!): AuthConfig!
    deleteAuthConfig(id: ID!): Boolean!
  }
`;

export const AuthConfigGqlResolvers = {
  Query: {
    getAuthConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
