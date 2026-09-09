export const AuthProfileGqlTypeDefs = `
  type AuthProfile {
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
    getAuthProfile(id: ID!): AuthProfile
    listAuthProfiles(tenantId: String!, limit: Int): [AuthProfile!]!
  }

  extend type Mutation {
    createAuthProfile(tenantId: String!, code: String!, name: String!): AuthProfile!
    deleteAuthProfile(id: ID!): Boolean!
  }
`;

export const AuthProfileGqlResolvers = {
  Query: {
    getAuthProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
