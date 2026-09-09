export const IotAnomaliesPayloadGqlTypeDefs = `
  type IotAnomaliesPayload {
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
    getIotAnomaliesPayload(id: ID!): IotAnomaliesPayload
    listIotAnomaliesPayloads(tenantId: String!, limit: Int): [IotAnomaliesPayload!]!
  }

  extend type Mutation {
    createIotAnomaliesPayload(tenantId: String!, code: String!, name: String!): IotAnomaliesPayload!
    deleteIotAnomaliesPayload(id: ID!): Boolean!
  }
`;

export const IotAnomaliesPayloadGqlResolvers = {
  Query: {
    getIotAnomaliesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
