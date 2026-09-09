export const CommMessagesPayloadGqlTypeDefs = `
  type CommMessagesPayload {
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
    getCommMessagesPayload(id: ID!): CommMessagesPayload
    listCommMessagesPayloads(tenantId: String!, limit: Int): [CommMessagesPayload!]!
  }

  extend type Mutation {
    createCommMessagesPayload(tenantId: String!, code: String!, name: String!): CommMessagesPayload!
    deleteCommMessagesPayload(id: ID!): Boolean!
  }
`;

export const CommMessagesPayloadGqlResolvers = {
  Query: {
    getCommMessagesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
