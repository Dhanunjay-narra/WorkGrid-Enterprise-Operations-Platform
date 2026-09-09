export const WorkflowCronsMappingGqlTypeDefs = `
  type WorkflowCronsMapping {
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
    getWorkflowCronsMapping(id: ID!): WorkflowCronsMapping
    listWorkflowCronsMappings(tenantId: String!, limit: Int): [WorkflowCronsMapping!]!
  }

  extend type Mutation {
    createWorkflowCronsMapping(tenantId: String!, code: String!, name: String!): WorkflowCronsMapping!
    deleteWorkflowCronsMapping(id: ID!): Boolean!
  }
`;

export const WorkflowCronsMappingGqlResolvers = {
  Query: {
    getWorkflowCronsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
