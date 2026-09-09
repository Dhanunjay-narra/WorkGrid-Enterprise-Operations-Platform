export const WorkflowCronsProfileGqlTypeDefs = `
  type WorkflowCronsProfile {
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
    getWorkflowCronsProfile(id: ID!): WorkflowCronsProfile
    listWorkflowCronsProfiles(tenantId: String!, limit: Int): [WorkflowCronsProfile!]!
  }

  extend type Mutation {
    createWorkflowCronsProfile(tenantId: String!, code: String!, name: String!): WorkflowCronsProfile!
    deleteWorkflowCronsProfile(id: ID!): Boolean!
  }
`;

export const WorkflowCronsProfileGqlResolvers = {
  Query: {
    getWorkflowCronsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
