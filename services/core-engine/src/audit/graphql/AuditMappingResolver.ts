export const AuditMappingGqlTypeDefs = `
  type AuditMapping {
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
    getAuditMapping(id: ID!): AuditMapping
    listAuditMappings(tenantId: String!, limit: Int): [AuditMapping!]!
  }

  extend type Mutation {
    createAuditMapping(tenantId: String!, code: String!, name: String!): AuditMapping!
    deleteAuditMapping(id: ID!): Boolean!
  }
`;

export const AuditMappingGqlResolvers = {
  Query: {
    getAuditMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
