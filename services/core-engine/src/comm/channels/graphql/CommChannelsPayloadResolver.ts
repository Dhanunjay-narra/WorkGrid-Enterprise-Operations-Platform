export const CommChannelsPayloadGqlTypeDefs = `
  type CommChannelsPayload {
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
    getCommChannelsPayload(id: ID!): CommChannelsPayload
    listCommChannelsPayloads(tenantId: String!, limit: Int): [CommChannelsPayload!]!
  }

  extend type Mutation {
    createCommChannelsPayload(tenantId: String!, code: String!, name: String!): CommChannelsPayload!
    deleteCommChannelsPayload(id: ID!): Boolean!
  }
`;

export const CommChannelsPayloadGqlResolvers = {
  Query: {
    getCommChannelsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
