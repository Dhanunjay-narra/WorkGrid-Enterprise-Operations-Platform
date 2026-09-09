export const DmsChunksStateGqlTypeDefs = `
  type DmsChunksState {
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
    getDmsChunksState(id: ID!): DmsChunksState
    listDmsChunksStates(tenantId: String!, limit: Int): [DmsChunksState!]!
  }

  extend type Mutation {
    createDmsChunksState(tenantId: String!, code: String!, name: String!): DmsChunksState!
    deleteDmsChunksState(id: ID!): Boolean!
  }
`;

export const DmsChunksStateGqlResolvers = {
  Query: {
    getDmsChunksState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
