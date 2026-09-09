export const IntStripePayloadGqlTypeDefs = `
  type IntStripePayload {
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
    getIntStripePayload(id: ID!): IntStripePayload
    listIntStripePayloads(tenantId: String!, limit: Int): [IntStripePayload!]!
  }

  extend type Mutation {
    createIntStripePayload(tenantId: String!, code: String!, name: String!): IntStripePayload!
    deleteIntStripePayload(id: ID!): Boolean!
  }
`;

export const IntStripePayloadGqlResolvers = {
  Query: {
    getIntStripePayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripePayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
