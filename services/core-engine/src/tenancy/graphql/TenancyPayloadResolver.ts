export const TenancyPayloadGqlTypeDefs = `
  type TenancyPayload {
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
    getTenancyPayload(id: ID!): TenancyPayload
    listTenancyPayloads(tenantId: String!, limit: Int): [TenancyPayload!]!
  }

  extend type Mutation {
    createTenancyPayload(tenantId: String!, code: String!, name: String!): TenancyPayload!
    deleteTenancyPayload(id: ID!): Boolean!
  }
`;

export const TenancyPayloadGqlResolvers = {
  Query: {
    getTenancyPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
