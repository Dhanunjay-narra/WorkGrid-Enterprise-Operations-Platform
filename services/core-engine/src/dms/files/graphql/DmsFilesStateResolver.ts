export const DmsFilesStateGqlTypeDefs = `
  type DmsFilesState {
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
    getDmsFilesState(id: ID!): DmsFilesState
    listDmsFilesStates(tenantId: String!, limit: Int): [DmsFilesState!]!
  }

  extend type Mutation {
    createDmsFilesState(tenantId: String!, code: String!, name: String!): DmsFilesState!
    deleteDmsFilesState(id: ID!): Boolean!
  }
`;

export const DmsFilesStateGqlResolvers = {
  Query: {
    getDmsFilesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
