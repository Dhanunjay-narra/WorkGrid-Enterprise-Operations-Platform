export const IotFleetPayloadGqlTypeDefs = `
  type IotFleetPayload {
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
    getIotFleetPayload(id: ID!): IotFleetPayload
    listIotFleetPayloads(tenantId: String!, limit: Int): [IotFleetPayload!]!
  }

  extend type Mutation {
    createIotFleetPayload(tenantId: String!, code: String!, name: String!): IotFleetPayload!
    deleteIotFleetPayload(id: ID!): Boolean!
  }
`;

export const IotFleetPayloadGqlResolvers = {
  Query: {
    getIotFleetPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
