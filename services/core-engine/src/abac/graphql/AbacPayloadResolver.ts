export const AbacPayloadGqlTypeDefs = `
  type AbacPayload {
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
    getAbacPayload(id: ID!): AbacPayload
    listAbacPayloads(tenantId: String!, limit: Int): [AbacPayload!]!
  }

  extend type Mutation {
    createAbacPayload(tenantId: String!, code: String!, name: String!): AbacPayload!
    deleteAbacPayload(id: ID!): Boolean!
  }
`;

export const AbacPayloadGqlResolvers = {
  Query: {
    getAbacPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
