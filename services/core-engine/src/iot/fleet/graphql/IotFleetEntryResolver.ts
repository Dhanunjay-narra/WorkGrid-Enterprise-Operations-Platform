export const IotFleetEntryGqlTypeDefs = `
  type IotFleetEntry {
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
    getIotFleetEntry(id: ID!): IotFleetEntry
    listIotFleetEntrys(tenantId: String!, limit: Int): [IotFleetEntry!]!
  }

  extend type Mutation {
    createIotFleetEntry(tenantId: String!, code: String!, name: String!): IotFleetEntry!
    deleteIotFleetEntry(id: ID!): Boolean!
  }
`;

export const IotFleetEntryGqlResolvers = {
  Query: {
    getIotFleetEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
