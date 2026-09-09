export const IotThresholdsItemGqlTypeDefs = `
  type IotThresholdsItem {
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
    getIotThresholdsItem(id: ID!): IotThresholdsItem
    listIotThresholdsItems(tenantId: String!, limit: Int): [IotThresholdsItem!]!
  }

  extend type Mutation {
    createIotThresholdsItem(tenantId: String!, code: String!, name: String!): IotThresholdsItem!
    deleteIotThresholdsItem(id: ID!): Boolean!
  }
`;

export const IotThresholdsItemGqlResolvers = {
  Query: {
    getIotThresholdsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
