export const SupportAgentsStateGqlTypeDefs = `
  type SupportAgentsState {
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
    getSupportAgentsState(id: ID!): SupportAgentsState
    listSupportAgentsStates(tenantId: String!, limit: Int): [SupportAgentsState!]!
  }

  extend type Mutation {
    createSupportAgentsState(tenantId: String!, code: String!, name: String!): SupportAgentsState!
    deleteSupportAgentsState(id: ID!): Boolean!
  }
`;

export const SupportAgentsStateGqlResolvers = {
  Query: {
    getSupportAgentsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
