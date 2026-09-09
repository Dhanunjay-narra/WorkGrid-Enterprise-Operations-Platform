export const CrmPipelineEventGqlTypeDefs = `
  type CrmPipelineEvent {
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
    getCrmPipelineEvent(id: ID!): CrmPipelineEvent
    listCrmPipelineEvents(tenantId: String!, limit: Int): [CrmPipelineEvent!]!
  }

  extend type Mutation {
    createCrmPipelineEvent(tenantId: String!, code: String!, name: String!): CrmPipelineEvent!
    deleteCrmPipelineEvent(id: ID!): Boolean!
  }
`;

export const CrmPipelineEventGqlResolvers = {
  Query: {
    getCrmPipelineEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
