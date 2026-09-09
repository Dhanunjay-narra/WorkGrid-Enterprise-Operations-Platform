export const CommCallsPayloadGqlTypeDefs = `
  type CommCallsPayload {
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
    getCommCallsPayload(id: ID!): CommCallsPayload
    listCommCallsPayloads(tenantId: String!, limit: Int): [CommCallsPayload!]!
  }

  extend type Mutation {
    createCommCallsPayload(tenantId: String!, code: String!, name: String!): CommCallsPayload!
    deleteCommCallsPayload(id: ID!): Boolean!
  }
`;

export const CommCallsPayloadGqlResolvers = {
  Query: {
    getCommCallsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
