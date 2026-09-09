export const IotCommandsMappingGqlTypeDefs = `
  type IotCommandsMapping {
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
    getIotCommandsMapping(id: ID!): IotCommandsMapping
    listIotCommandsMappings(tenantId: String!, limit: Int): [IotCommandsMapping!]!
  }

  extend type Mutation {
    createIotCommandsMapping(tenantId: String!, code: String!, name: String!): IotCommandsMapping!
    deleteIotCommandsMapping(id: ID!): Boolean!
  }
`;

export const IotCommandsMappingGqlResolvers = {
  Query: {
    getIotCommandsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
