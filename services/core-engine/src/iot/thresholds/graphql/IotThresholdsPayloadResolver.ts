export const IotThresholdsPayloadGqlTypeDefs = `
  type IotThresholdsPayload {
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
    getIotThresholdsPayload(id: ID!): IotThresholdsPayload
    listIotThresholdsPayloads(tenantId: String!, limit: Int): [IotThresholdsPayload!]!
  }

  extend type Mutation {
    createIotThresholdsPayload(tenantId: String!, code: String!, name: String!): IotThresholdsPayload!
    deleteIotThresholdsPayload(id: ID!): Boolean!
  }
`;

export const IotThresholdsPayloadGqlResolvers = {
  Query: {
    getIotThresholdsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
