export const IotFirmwareProfileGqlTypeDefs = `
  type IotFirmwareProfile {
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
    getIotFirmwareProfile(id: ID!): IotFirmwareProfile
    listIotFirmwareProfiles(tenantId: String!, limit: Int): [IotFirmwareProfile!]!
  }

  extend type Mutation {
    createIotFirmwareProfile(tenantId: String!, code: String!, name: String!): IotFirmwareProfile!
    deleteIotFirmwareProfile(id: ID!): Boolean!
  }
`;

export const IotFirmwareProfileGqlResolvers = {
  Query: {
    getIotFirmwareProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
