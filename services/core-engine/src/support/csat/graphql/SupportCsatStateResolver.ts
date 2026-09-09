export const SupportCsatStateGqlTypeDefs = `
  type SupportCsatState {
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
    getSupportCsatState(id: ID!): SupportCsatState
    listSupportCsatStates(tenantId: String!, limit: Int): [SupportCsatState!]!
  }

  extend type Mutation {
    createSupportCsatState(tenantId: String!, code: String!, name: String!): SupportCsatState!
    deleteSupportCsatState(id: ID!): Boolean!
  }
`;

export const SupportCsatStateGqlResolvers = {
  Query: {
    getSupportCsatState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
