export const CommCallsProfileGqlTypeDefs = `
  type CommCallsProfile {
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
    getCommCallsProfile(id: ID!): CommCallsProfile
    listCommCallsProfiles(tenantId: String!, limit: Int): [CommCallsProfile!]!
  }

  extend type Mutation {
    createCommCallsProfile(tenantId: String!, code: String!, name: String!): CommCallsProfile!
    deleteCommCallsProfile(id: ID!): Boolean!
  }
`;

export const CommCallsProfileGqlResolvers = {
  Query: {
    getCommCallsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
