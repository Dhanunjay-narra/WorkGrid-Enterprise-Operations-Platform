export const IotAnomaliesMappingGqlTypeDefs = `
  type IotAnomaliesMapping {
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
    getIotAnomaliesMapping(id: ID!): IotAnomaliesMapping
    listIotAnomaliesMappings(tenantId: String!, limit: Int): [IotAnomaliesMapping!]!
  }

  extend type Mutation {
    createIotAnomaliesMapping(tenantId: String!, code: String!, name: String!): IotAnomaliesMapping!
    deleteIotAnomaliesMapping(id: ID!): Boolean!
  }
`;

export const IotAnomaliesMappingGqlResolvers = {
  Query: {
    getIotAnomaliesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
