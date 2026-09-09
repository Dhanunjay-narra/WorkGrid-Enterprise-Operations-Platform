export const CrmPipelineSessionGqlTypeDefs = `
  type CrmPipelineSession {
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
    getCrmPipelineSession(id: ID!): CrmPipelineSession
    listCrmPipelineSessions(tenantId: String!, limit: Int): [CrmPipelineSession!]!
  }

  extend type Mutation {
    createCrmPipelineSession(tenantId: String!, code: String!, name: String!): CrmPipelineSession!
    deleteCrmPipelineSession(id: ID!): Boolean!
  }
`;

export const CrmPipelineSessionGqlResolvers = {
  Query: {
    getCrmPipelineSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
