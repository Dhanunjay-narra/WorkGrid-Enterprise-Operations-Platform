export const SecurityPayloadGqlTypeDefs = `
  type SecurityPayload {
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
    getSecurityPayload(id: ID!): SecurityPayload
    listSecurityPayloads(tenantId: String!, limit: Int): [SecurityPayload!]!
  }

  extend type Mutation {
    createSecurityPayload(tenantId: String!, code: String!, name: String!): SecurityPayload!
    deleteSecurityPayload(id: ID!): Boolean!
  }
`;

export const SecurityPayloadGqlResolvers = {
  Query: {
    getSecurityPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
