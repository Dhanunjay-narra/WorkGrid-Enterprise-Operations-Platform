export const IotCommandsEntryGqlTypeDefs = `
  type IotCommandsEntry {
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
    getIotCommandsEntry(id: ID!): IotCommandsEntry
    listIotCommandsEntrys(tenantId: String!, limit: Int): [IotCommandsEntry!]!
  }

  extend type Mutation {
    createIotCommandsEntry(tenantId: String!, code: String!, name: String!): IotCommandsEntry!
    deleteIotCommandsEntry(id: ID!): Boolean!
  }
`;

export const IotCommandsEntryGqlResolvers = {
  Query: {
    getIotCommandsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
