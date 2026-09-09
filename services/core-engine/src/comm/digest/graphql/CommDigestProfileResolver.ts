export const CommDigestProfileGqlTypeDefs = `
  type CommDigestProfile {
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
    getCommDigestProfile(id: ID!): CommDigestProfile
    listCommDigestProfiles(tenantId: String!, limit: Int): [CommDigestProfile!]!
  }

  extend type Mutation {
    createCommDigestProfile(tenantId: String!, code: String!, name: String!): CommDigestProfile!
    deleteCommDigestProfile(id: ID!): Boolean!
  }
`;

export const CommDigestProfileGqlResolvers = {
  Query: {
    getCommDigestProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
