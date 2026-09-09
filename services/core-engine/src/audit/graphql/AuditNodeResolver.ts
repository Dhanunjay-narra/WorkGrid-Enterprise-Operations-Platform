export const AuditNodeGqlTypeDefs = `
  type AuditNode {
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
    getAuditNode(id: ID!): AuditNode
    listAuditNodes(tenantId: String!, limit: Int): [AuditNode!]!
  }

  extend type Mutation {
    createAuditNode(tenantId: String!, code: String!, name: String!): AuditNode!
    deleteAuditNode(id: ID!): Boolean!
  }
`;

export const AuditNodeGqlResolvers = {
  Query: {
    getAuditNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
