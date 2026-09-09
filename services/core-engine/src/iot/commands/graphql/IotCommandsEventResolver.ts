export const IotCommandsEventGqlTypeDefs = `
  type IotCommandsEvent {
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
    getIotCommandsEvent(id: ID!): IotCommandsEvent
    listIotCommandsEvents(tenantId: String!, limit: Int): [IotCommandsEvent!]!
  }

  extend type Mutation {
    createIotCommandsEvent(tenantId: String!, code: String!, name: String!): IotCommandsEvent!
    deleteIotCommandsEvent(id: ID!): Boolean!
  }
`;

export const IotCommandsEventGqlResolvers = {
  Query: {
    getIotCommandsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
