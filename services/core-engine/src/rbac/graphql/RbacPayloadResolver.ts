export const RbacPayloadGqlTypeDefs = `
  type RbacPayload {
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
    getRbacPayload(id: ID!): RbacPayload
    listRbacPayloads(tenantId: String!, limit: Int): [RbacPayload!]!
  }

  extend type Mutation {
    createRbacPayload(tenantId: String!, code: String!, name: String!): RbacPayload!
    deleteRbacPayload(id: ID!): Boolean!
  }
`;

export const RbacPayloadGqlResolvers = {
  Query: {
    getRbacPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
