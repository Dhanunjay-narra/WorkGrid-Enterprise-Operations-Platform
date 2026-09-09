export const IotThresholdsProfileGqlTypeDefs = `
  type IotThresholdsProfile {
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
    getIotThresholdsProfile(id: ID!): IotThresholdsProfile
    listIotThresholdsProfiles(tenantId: String!, limit: Int): [IotThresholdsProfile!]!
  }

  extend type Mutation {
    createIotThresholdsProfile(tenantId: String!, code: String!, name: String!): IotThresholdsProfile!
    deleteIotThresholdsProfile(id: ID!): Boolean!
  }
`;

export const IotThresholdsProfileGqlResolvers = {
  Query: {
    getIotThresholdsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
