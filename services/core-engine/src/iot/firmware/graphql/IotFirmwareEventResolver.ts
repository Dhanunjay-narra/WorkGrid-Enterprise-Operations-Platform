export const IotFirmwareEventGqlTypeDefs = `
  type IotFirmwareEvent {
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
    getIotFirmwareEvent(id: ID!): IotFirmwareEvent
    listIotFirmwareEvents(tenantId: String!, limit: Int): [IotFirmwareEvent!]!
  }

  extend type Mutation {
    createIotFirmwareEvent(tenantId: String!, code: String!, name: String!): IotFirmwareEvent!
    deleteIotFirmwareEvent(id: ID!): Boolean!
  }
`;

export const IotFirmwareEventGqlResolvers = {
  Query: {
    getIotFirmwareEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
