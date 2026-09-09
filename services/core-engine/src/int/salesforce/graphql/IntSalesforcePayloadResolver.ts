export const IntSalesforcePayloadGqlTypeDefs = `
  type IntSalesforcePayload {
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
    getIntSalesforcePayload(id: ID!): IntSalesforcePayload
    listIntSalesforcePayloads(tenantId: String!, limit: Int): [IntSalesforcePayload!]!
  }

  extend type Mutation {
    createIntSalesforcePayload(tenantId: String!, code: String!, name: String!): IntSalesforcePayload!
    deleteIntSalesforcePayload(id: ID!): Boolean!
  }
`;

export const IntSalesforcePayloadGqlResolvers = {
  Query: {
    getIntSalesforcePayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforcePayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
