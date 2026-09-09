export const ComplianceTaskGqlTypeDefs = `
  type ComplianceTask {
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
    getComplianceTask(id: ID!): ComplianceTask
    listComplianceTasks(tenantId: String!, limit: Int): [ComplianceTask!]!
  }

  extend type Mutation {
    createComplianceTask(tenantId: String!, code: String!, name: String!): ComplianceTask!
    deleteComplianceTask(id: ID!): Boolean!
  }
`;

export const ComplianceTaskGqlResolvers = {
  Query: {
    getComplianceTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
