export const IotFleetProfileGqlTypeDefs = `
  type IotFleetProfile {
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
    getIotFleetProfile(id: ID!): IotFleetProfile
    listIotFleetProfiles(tenantId: String!, limit: Int): [IotFleetProfile!]!
  }

  extend type Mutation {
    createIotFleetProfile(tenantId: String!, code: String!, name: String!): IotFleetProfile!
    deleteIotFleetProfile(id: ID!): Boolean!
  }
`;

export const IotFleetProfileGqlResolvers = {
  Query: {
    getIotFleetProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
