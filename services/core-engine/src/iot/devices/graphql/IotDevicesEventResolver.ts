export const IotDevicesEventGqlTypeDefs = `
  type IotDevicesEvent {
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
    getIotDevicesEvent(id: ID!): IotDevicesEvent
    listIotDevicesEvents(tenantId: String!, limit: Int): [IotDevicesEvent!]!
  }

  extend type Mutation {
    createIotDevicesEvent(tenantId: String!, code: String!, name: String!): IotDevicesEvent!
    deleteIotDevicesEvent(id: ID!): Boolean!
  }
`;

export const IotDevicesEventGqlResolvers = {
  Query: {
    getIotDevicesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
