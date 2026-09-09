export const CommNotificationsPayloadGqlTypeDefs = `
  type CommNotificationsPayload {
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
    getCommNotificationsPayload(id: ID!): CommNotificationsPayload
    listCommNotificationsPayloads(tenantId: String!, limit: Int): [CommNotificationsPayload!]!
  }

  extend type Mutation {
    createCommNotificationsPayload(tenantId: String!, code: String!, name: String!): CommNotificationsPayload!
    deleteCommNotificationsPayload(id: ID!): Boolean!
  }
`;

export const CommNotificationsPayloadGqlResolvers = {
  Query: {
    getCommNotificationsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
