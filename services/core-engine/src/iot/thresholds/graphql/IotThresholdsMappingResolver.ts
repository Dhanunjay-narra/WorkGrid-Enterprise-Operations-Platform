export const IotThresholdsMappingGqlTypeDefs = `
  type IotThresholdsMapping {
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
    getIotThresholdsMapping(id: ID!): IotThresholdsMapping
    listIotThresholdsMappings(tenantId: String!, limit: Int): [IotThresholdsMapping!]!
  }

  extend type Mutation {
    createIotThresholdsMapping(tenantId: String!, code: String!, name: String!): IotThresholdsMapping!
    deleteIotThresholdsMapping(id: ID!): Boolean!
  }
`;

export const IotThresholdsMappingGqlResolvers = {
  Query: {
    getIotThresholdsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
