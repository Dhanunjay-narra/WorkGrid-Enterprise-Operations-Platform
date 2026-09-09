export const WorkflowVariablesMappingGqlTypeDefs = `
  type WorkflowVariablesMapping {
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
    getWorkflowVariablesMapping(id: ID!): WorkflowVariablesMapping
    listWorkflowVariablesMappings(tenantId: String!, limit: Int): [WorkflowVariablesMapping!]!
  }

  extend type Mutation {
    createWorkflowVariablesMapping(tenantId: String!, code: String!, name: String!): WorkflowVariablesMapping!
    deleteWorkflowVariablesMapping(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesMappingGqlResolvers = {
  Query: {
    getWorkflowVariablesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
