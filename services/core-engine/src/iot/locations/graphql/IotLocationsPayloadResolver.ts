export const IotLocationsPayloadGqlTypeDefs = `
  type IotLocationsPayload {
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
    getIotLocationsPayload(id: ID!): IotLocationsPayload
    listIotLocationsPayloads(tenantId: String!, limit: Int): [IotLocationsPayload!]!
  }

  extend type Mutation {
    createIotLocationsPayload(tenantId: String!, code: String!, name: String!): IotLocationsPayload!
    deleteIotLocationsPayload(id: ID!): Boolean!
  }
`;

export const IotLocationsPayloadGqlResolvers = {
  Query: {
    getIotLocationsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
