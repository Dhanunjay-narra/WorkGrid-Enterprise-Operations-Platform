export const ComplianceNodeGqlTypeDefs = `
  type ComplianceNode {
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
    getComplianceNode(id: ID!): ComplianceNode
    listComplianceNodes(tenantId: String!, limit: Int): [ComplianceNode!]!
  }

  extend type Mutation {
    createComplianceNode(tenantId: String!, code: String!, name: String!): ComplianceNode!
    deleteComplianceNode(id: ID!): Boolean!
  }
`;

export const ComplianceNodeGqlResolvers = {
  Query: {
    getComplianceNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
