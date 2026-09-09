export const CommChannelsProfileGqlTypeDefs = `
  type CommChannelsProfile {
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
    getCommChannelsProfile(id: ID!): CommChannelsProfile
    listCommChannelsProfiles(tenantId: String!, limit: Int): [CommChannelsProfile!]!
  }

  extend type Mutation {
    createCommChannelsProfile(tenantId: String!, code: String!, name: String!): CommChannelsProfile!
    deleteCommChannelsProfile(id: ID!): Boolean!
  }
`;

export const CommChannelsProfileGqlResolvers = {
  Query: {
    getCommChannelsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
