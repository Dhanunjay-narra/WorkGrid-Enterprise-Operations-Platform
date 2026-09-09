export const CrmPipelinePayloadGqlTypeDefs = `
  type CrmPipelinePayload {
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
    getCrmPipelinePayload(id: ID!): CrmPipelinePayload
    listCrmPipelinePayloads(tenantId: String!, limit: Int): [CrmPipelinePayload!]!
  }

  extend type Mutation {
    createCrmPipelinePayload(tenantId: String!, code: String!, name: String!): CrmPipelinePayload!
    deleteCrmPipelinePayload(id: ID!): Boolean!
  }
`;

export const CrmPipelinePayloadGqlResolvers = {
  Query: {
    getCrmPipelinePayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelinePayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
