export const DmsVersionsStateGqlTypeDefs = `
  type DmsVersionsState {
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
    getDmsVersionsState(id: ID!): DmsVersionsState
    listDmsVersionsStates(tenantId: String!, limit: Int): [DmsVersionsState!]!
  }

  extend type Mutation {
    createDmsVersionsState(tenantId: String!, code: String!, name: String!): DmsVersionsState!
    deleteDmsVersionsState(id: ID!): Boolean!
  }
`;

export const DmsVersionsStateGqlResolvers = {
  Query: {
    getDmsVersionsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
