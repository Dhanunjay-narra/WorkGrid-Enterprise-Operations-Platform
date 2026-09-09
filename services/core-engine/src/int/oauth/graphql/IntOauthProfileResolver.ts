export const IntOauthProfileGqlTypeDefs = `
  type IntOauthProfile {
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
    getIntOauthProfile(id: ID!): IntOauthProfile
    listIntOauthProfiles(tenantId: String!, limit: Int): [IntOauthProfile!]!
  }

  extend type Mutation {
    createIntOauthProfile(tenantId: String!, code: String!, name: String!): IntOauthProfile!
    deleteIntOauthProfile(id: ID!): Boolean!
  }
`;

export const IntOauthProfileGqlResolvers = {
  Query: {
    getIntOauthProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
