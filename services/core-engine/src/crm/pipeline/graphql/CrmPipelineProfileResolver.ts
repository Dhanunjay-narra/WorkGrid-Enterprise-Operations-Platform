export const CrmPipelineProfileGqlTypeDefs = `
  type CrmPipelineProfile {
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
    getCrmPipelineProfile(id: ID!): CrmPipelineProfile
    listCrmPipelineProfiles(tenantId: String!, limit: Int): [CrmPipelineProfile!]!
  }

  extend type Mutation {
    createCrmPipelineProfile(tenantId: String!, code: String!, name: String!): CrmPipelineProfile!
    deleteCrmPipelineProfile(id: ID!): Boolean!
  }
`;

export const CrmPipelineProfileGqlResolvers = {
  Query: {
    getCrmPipelineProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
