export const DmsFoldersStateGqlTypeDefs = `
  type DmsFoldersState {
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
    getDmsFoldersState(id: ID!): DmsFoldersState
    listDmsFoldersStates(tenantId: String!, limit: Int): [DmsFoldersState!]!
  }

  extend type Mutation {
    createDmsFoldersState(tenantId: String!, code: String!, name: String!): DmsFoldersState!
    deleteDmsFoldersState(id: ID!): Boolean!
  }
`;

export const DmsFoldersStateGqlResolvers = {
  Query: {
    getDmsFoldersState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
