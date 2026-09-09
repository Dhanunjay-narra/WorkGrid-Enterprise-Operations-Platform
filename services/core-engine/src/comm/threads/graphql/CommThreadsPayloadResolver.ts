export const CommThreadsPayloadGqlTypeDefs = `
  type CommThreadsPayload {
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
    getCommThreadsPayload(id: ID!): CommThreadsPayload
    listCommThreadsPayloads(tenantId: String!, limit: Int): [CommThreadsPayload!]!
  }

  extend type Mutation {
    createCommThreadsPayload(tenantId: String!, code: String!, name: String!): CommThreadsPayload!
    deleteCommThreadsPayload(id: ID!): Boolean!
  }
`;

export const CommThreadsPayloadGqlResolvers = {
  Query: {
    getCommThreadsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
