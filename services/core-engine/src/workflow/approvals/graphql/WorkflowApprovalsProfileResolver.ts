export const WorkflowApprovalsProfileGqlTypeDefs = `
  type WorkflowApprovalsProfile {
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
    getWorkflowApprovalsProfile(id: ID!): WorkflowApprovalsProfile
    listWorkflowApprovalsProfiles(tenantId: String!, limit: Int): [WorkflowApprovalsProfile!]!
  }

  extend type Mutation {
    createWorkflowApprovalsProfile(tenantId: String!, code: String!, name: String!): WorkflowApprovalsProfile!
    deleteWorkflowApprovalsProfile(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsProfileGqlResolvers = {
  Query: {
    getWorkflowApprovalsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
