export const IotCommandsItemGqlTypeDefs = `
  type IotCommandsItem {
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
    getIotCommandsItem(id: ID!): IotCommandsItem
    listIotCommandsItems(tenantId: String!, limit: Int): [IotCommandsItem!]!
  }

  extend type Mutation {
    createIotCommandsItem(tenantId: String!, code: String!, name: String!): IotCommandsItem!
    deleteIotCommandsItem(id: ID!): Boolean!
  }
`;

export const IotCommandsItemGqlResolvers = {
  Query: {
    getIotCommandsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
