export const CrmDealsPayloadGqlTypeDefs = `
  type CrmDealsPayload {
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
    getCrmDealsPayload(id: ID!): CrmDealsPayload
    listCrmDealsPayloads(tenantId: String!, limit: Int): [CrmDealsPayload!]!
  }

  extend type Mutation {
    createCrmDealsPayload(tenantId: String!, code: String!, name: String!): CrmDealsPayload!
    deleteCrmDealsPayload(id: ID!): Boolean!
  }
`;

export const CrmDealsPayloadGqlResolvers = {
  Query: {
    getCrmDealsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
