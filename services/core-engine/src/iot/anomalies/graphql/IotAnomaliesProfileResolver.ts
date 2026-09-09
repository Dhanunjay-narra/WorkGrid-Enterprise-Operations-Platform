export const IotAnomaliesProfileGqlTypeDefs = `
  type IotAnomaliesProfile {
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
    getIotAnomaliesProfile(id: ID!): IotAnomaliesProfile
    listIotAnomaliesProfiles(tenantId: String!, limit: Int): [IotAnomaliesProfile!]!
  }

  extend type Mutation {
    createIotAnomaliesProfile(tenantId: String!, code: String!, name: String!): IotAnomaliesProfile!
    deleteIotAnomaliesProfile(id: ID!): Boolean!
  }
`;

export const IotAnomaliesProfileGqlResolvers = {
  Query: {
    getIotAnomaliesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
