export const WorkflowCronsPayloadGqlTypeDefs = `
  type WorkflowCronsPayload {
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
    getWorkflowCronsPayload(id: ID!): WorkflowCronsPayload
    listWorkflowCronsPayloads(tenantId: String!, limit: Int): [WorkflowCronsPayload!]!
  }

  extend type Mutation {
    createWorkflowCronsPayload(tenantId: String!, code: String!, name: String!): WorkflowCronsPayload!
    deleteWorkflowCronsPayload(id: ID!): Boolean!
  }
`;

export const WorkflowCronsPayloadGqlResolvers = {
  Query: {
    getWorkflowCronsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
