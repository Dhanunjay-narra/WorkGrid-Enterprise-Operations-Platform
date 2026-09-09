export const AuthStateGqlTypeDefs = `
  type AuthState {
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
    getAuthState(id: ID!): AuthState
    listAuthStates(tenantId: String!, limit: Int): [AuthState!]!
  }

  extend type Mutation {
    createAuthState(tenantId: String!, code: String!, name: String!): AuthState!
    deleteAuthState(id: ID!): Boolean!
  }
`;

export const AuthStateGqlResolvers = {
  Query: {
    getAuthState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
