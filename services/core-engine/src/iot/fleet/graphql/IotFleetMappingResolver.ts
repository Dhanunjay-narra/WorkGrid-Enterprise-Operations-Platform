export const IotFleetMappingGqlTypeDefs = `
  type IotFleetMapping {
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
    getIotFleetMapping(id: ID!): IotFleetMapping
    listIotFleetMappings(tenantId: String!, limit: Int): [IotFleetMapping!]!
  }

  extend type Mutation {
    createIotFleetMapping(tenantId: String!, code: String!, name: String!): IotFleetMapping!
    deleteIotFleetMapping(id: ID!): Boolean!
  }
`;

export const IotFleetMappingGqlResolvers = {
  Query: {
    getIotFleetMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
