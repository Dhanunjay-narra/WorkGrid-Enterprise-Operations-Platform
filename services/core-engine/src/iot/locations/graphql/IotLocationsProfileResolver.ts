export const IotLocationsProfileGqlTypeDefs = `
  type IotLocationsProfile {
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
    getIotLocationsProfile(id: ID!): IotLocationsProfile
    listIotLocationsProfiles(tenantId: String!, limit: Int): [IotLocationsProfile!]!
  }

  extend type Mutation {
    createIotLocationsProfile(tenantId: String!, code: String!, name: String!): IotLocationsProfile!
    deleteIotLocationsProfile(id: ID!): Boolean!
  }
`;

export const IotLocationsProfileGqlResolvers = {
  Query: {
    getIotLocationsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
