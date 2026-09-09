export const SupportEscalationNodeGqlTypeDefs = `
  type SupportEscalationNode {
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
    getSupportEscalationNode(id: ID!): SupportEscalationNode
    listSupportEscalationNodes(tenantId: String!, limit: Int): [SupportEscalationNode!]!
  }

  extend type Mutation {
    createSupportEscalationNode(tenantId: String!, code: String!, name: String!): SupportEscalationNode!
    deleteSupportEscalationNode(id: ID!): Boolean!
  }
`;

export const SupportEscalationNodeGqlResolvers = {
  Query: {
    getSupportEscalationNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
