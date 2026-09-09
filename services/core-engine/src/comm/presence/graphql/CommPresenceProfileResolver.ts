export const CommPresenceProfileGqlTypeDefs = `
  type CommPresenceProfile {
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
    getCommPresenceProfile(id: ID!): CommPresenceProfile
    listCommPresenceProfiles(tenantId: String!, limit: Int): [CommPresenceProfile!]!
  }

  extend type Mutation {
    createCommPresenceProfile(tenantId: String!, code: String!, name: String!): CommPresenceProfile!
    deleteCommPresenceProfile(id: ID!): Boolean!
  }
`;

export const CommPresenceProfileGqlResolvers = {
  Query: {
    getCommPresenceProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
