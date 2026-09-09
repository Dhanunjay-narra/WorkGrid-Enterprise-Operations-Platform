export const IotCommandsPayloadGqlTypeDefs = `
  type IotCommandsPayload {
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
    getIotCommandsPayload(id: ID!): IotCommandsPayload
    listIotCommandsPayloads(tenantId: String!, limit: Int): [IotCommandsPayload!]!
  }

  extend type Mutation {
    createIotCommandsPayload(tenantId: String!, code: String!, name: String!): IotCommandsPayload!
    deleteIotCommandsPayload(id: ID!): Boolean!
  }
`;

export const IotCommandsPayloadGqlResolvers = {
  Query: {
    getIotCommandsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
