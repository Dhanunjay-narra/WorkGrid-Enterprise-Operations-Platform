export const IotFirmwareSessionGqlTypeDefs = `
  type IotFirmwareSession {
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
    getIotFirmwareSession(id: ID!): IotFirmwareSession
    listIotFirmwareSessions(tenantId: String!, limit: Int): [IotFirmwareSession!]!
  }

  extend type Mutation {
    createIotFirmwareSession(tenantId: String!, code: String!, name: String!): IotFirmwareSession!
    deleteIotFirmwareSession(id: ID!): Boolean!
  }
`;

export const IotFirmwareSessionGqlResolvers = {
  Query: {
    getIotFirmwareSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
