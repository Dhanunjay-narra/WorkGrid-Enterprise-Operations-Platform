export const CrmPipelineTaskGqlTypeDefs = `
  type CrmPipelineTask {
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
    getCrmPipelineTask(id: ID!): CrmPipelineTask
    listCrmPipelineTasks(tenantId: String!, limit: Int): [CrmPipelineTask!]!
  }

  extend type Mutation {
    createCrmPipelineTask(tenantId: String!, code: String!, name: String!): CrmPipelineTask!
    deleteCrmPipelineTask(id: ID!): Boolean!
  }
`;

export const CrmPipelineTaskGqlResolvers = {
  Query: {
    getCrmPipelineTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
