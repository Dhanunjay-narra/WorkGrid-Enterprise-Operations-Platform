export const DmsRetentionStateGqlTypeDefs = `
  type DmsRetentionState {
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
    getDmsRetentionState(id: ID!): DmsRetentionState
    listDmsRetentionStates(tenantId: String!, limit: Int): [DmsRetentionState!]!
  }

  extend type Mutation {
    createDmsRetentionState(tenantId: String!, code: String!, name: String!): DmsRetentionState!
    deleteDmsRetentionState(id: ID!): Boolean!
  }
`;

export const DmsRetentionStateGqlResolvers = {
  Query: {
    getDmsRetentionState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
