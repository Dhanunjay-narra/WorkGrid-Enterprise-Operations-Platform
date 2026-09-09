export const IntSlackPayloadGqlTypeDefs = `
  type IntSlackPayload {
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
    getIntSlackPayload(id: ID!): IntSlackPayload
    listIntSlackPayloads(tenantId: String!, limit: Int): [IntSlackPayload!]!
  }

  extend type Mutation {
    createIntSlackPayload(tenantId: String!, code: String!, name: String!): IntSlackPayload!
    deleteIntSlackPayload(id: ID!): Boolean!
  }
`;

export const IntSlackPayloadGqlResolvers = {
  Query: {
    getIntSlackPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
