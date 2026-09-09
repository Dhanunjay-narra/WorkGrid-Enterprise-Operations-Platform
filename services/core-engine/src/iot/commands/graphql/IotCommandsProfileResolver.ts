export const IotCommandsProfileGqlTypeDefs = `
  type IotCommandsProfile {
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
    getIotCommandsProfile(id: ID!): IotCommandsProfile
    listIotCommandsProfiles(tenantId: String!, limit: Int): [IotCommandsProfile!]!
  }

  extend type Mutation {
    createIotCommandsProfile(tenantId: String!, code: String!, name: String!): IotCommandsProfile!
    deleteIotCommandsProfile(id: ID!): Boolean!
  }
`;

export const IotCommandsProfileGqlResolvers = {
  Query: {
    getIotCommandsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
