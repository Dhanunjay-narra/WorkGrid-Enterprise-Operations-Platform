export const IotLocationsMappingGqlTypeDefs = `
  type IotLocationsMapping {
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
    getIotLocationsMapping(id: ID!): IotLocationsMapping
    listIotLocationsMappings(tenantId: String!, limit: Int): [IotLocationsMapping!]!
  }

  extend type Mutation {
    createIotLocationsMapping(tenantId: String!, code: String!, name: String!): IotLocationsMapping!
    deleteIotLocationsMapping(id: ID!): Boolean!
  }
`;

export const IotLocationsMappingGqlResolvers = {
  Query: {
    getIotLocationsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
