export const SupportEscalationBatchGqlTypeDefs = `
  type SupportEscalationBatch {
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
    getSupportEscalationBatch(id: ID!): SupportEscalationBatch
    listSupportEscalationBatchs(tenantId: String!, limit: Int): [SupportEscalationBatch!]!
  }

  extend type Mutation {
    createSupportEscalationBatch(tenantId: String!, code: String!, name: String!): SupportEscalationBatch!
    deleteSupportEscalationBatch(id: ID!): Boolean!
  }
`;

export const SupportEscalationBatchGqlResolvers = {
  Query: {
    getSupportEscalationBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
