export const RbacStateGqlTypeDefs = `
  type RbacState {
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
    getRbacState(id: ID!): RbacState
    listRbacStates(tenantId: String!, limit: Int): [RbacState!]!
  }

  extend type Mutation {
    createRbacState(tenantId: String!, code: String!, name: String!): RbacState!
    deleteRbacState(id: ID!): Boolean!
  }
`;

export const RbacStateGqlResolvers = {
  Query: {
    getRbacState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
