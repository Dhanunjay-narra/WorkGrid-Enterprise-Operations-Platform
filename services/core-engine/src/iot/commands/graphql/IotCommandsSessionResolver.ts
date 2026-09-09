export const IotCommandsSessionGqlTypeDefs = `
  type IotCommandsSession {
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
    getIotCommandsSession(id: ID!): IotCommandsSession
    listIotCommandsSessions(tenantId: String!, limit: Int): [IotCommandsSession!]!
  }

  extend type Mutation {
    createIotCommandsSession(tenantId: String!, code: String!, name: String!): IotCommandsSession!
    deleteIotCommandsSession(id: ID!): Boolean!
  }
`;

export const IotCommandsSessionGqlResolvers = {
  Query: {
    getIotCommandsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
