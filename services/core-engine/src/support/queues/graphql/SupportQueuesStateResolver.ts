export const SupportQueuesStateGqlTypeDefs = `
  type SupportQueuesState {
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
    getSupportQueuesState(id: ID!): SupportQueuesState
    listSupportQueuesStates(tenantId: String!, limit: Int): [SupportQueuesState!]!
  }

  extend type Mutation {
    createSupportQueuesState(tenantId: String!, code: String!, name: String!): SupportQueuesState!
    deleteSupportQueuesState(id: ID!): Boolean!
  }
`;

export const SupportQueuesStateGqlResolvers = {
  Query: {
    getSupportQueuesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
