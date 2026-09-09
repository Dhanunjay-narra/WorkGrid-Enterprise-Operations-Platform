export const SupportEscalationStateGqlTypeDefs = `
  type SupportEscalationState {
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
    getSupportEscalationState(id: ID!): SupportEscalationState
    listSupportEscalationStates(tenantId: String!, limit: Int): [SupportEscalationState!]!
  }

  extend type Mutation {
    createSupportEscalationState(tenantId: String!, code: String!, name: String!): SupportEscalationState!
    deleteSupportEscalationState(id: ID!): Boolean!
  }
`;

export const SupportEscalationStateGqlResolvers = {
  Query: {
    getSupportEscalationState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
