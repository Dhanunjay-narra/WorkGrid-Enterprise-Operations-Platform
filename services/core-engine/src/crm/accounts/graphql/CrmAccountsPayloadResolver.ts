export const CrmAccountsPayloadGqlTypeDefs = `
  type CrmAccountsPayload {
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
    getCrmAccountsPayload(id: ID!): CrmAccountsPayload
    listCrmAccountsPayloads(tenantId: String!, limit: Int): [CrmAccountsPayload!]!
  }

  extend type Mutation {
    createCrmAccountsPayload(tenantId: String!, code: String!, name: String!): CrmAccountsPayload!
    deleteCrmAccountsPayload(id: ID!): Boolean!
  }
`;

export const CrmAccountsPayloadGqlResolvers = {
  Query: {
    getCrmAccountsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
