export const IotLocationsEntryGqlTypeDefs = `
  type IotLocationsEntry {
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
    getIotLocationsEntry(id: ID!): IotLocationsEntry
    listIotLocationsEntrys(tenantId: String!, limit: Int): [IotLocationsEntry!]!
  }

  extend type Mutation {
    createIotLocationsEntry(tenantId: String!, code: String!, name: String!): IotLocationsEntry!
    deleteIotLocationsEntry(id: ID!): Boolean!
  }
`;

export const IotLocationsEntryGqlResolvers = {
  Query: {
    getIotLocationsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
