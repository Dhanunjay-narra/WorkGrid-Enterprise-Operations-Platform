export const IotThresholdsEntryGqlTypeDefs = `
  type IotThresholdsEntry {
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
    getIotThresholdsEntry(id: ID!): IotThresholdsEntry
    listIotThresholdsEntrys(tenantId: String!, limit: Int): [IotThresholdsEntry!]!
  }

  extend type Mutation {
    createIotThresholdsEntry(tenantId: String!, code: String!, name: String!): IotThresholdsEntry!
    deleteIotThresholdsEntry(id: ID!): Boolean!
  }
`;

export const IotThresholdsEntryGqlResolvers = {
  Query: {
    getIotThresholdsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
