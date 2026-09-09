export const CrmLeadsPayloadGqlTypeDefs = `
  type CrmLeadsPayload {
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
    getCrmLeadsPayload(id: ID!): CrmLeadsPayload
    listCrmLeadsPayloads(tenantId: String!, limit: Int): [CrmLeadsPayload!]!
  }

  extend type Mutation {
    createCrmLeadsPayload(tenantId: String!, code: String!, name: String!): CrmLeadsPayload!
    deleteCrmLeadsPayload(id: ID!): Boolean!
  }
`;

export const CrmLeadsPayloadGqlResolvers = {
  Query: {
    getCrmLeadsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
