export const DmsOcrStateGqlTypeDefs = `
  type DmsOcrState {
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
    getDmsOcrState(id: ID!): DmsOcrState
    listDmsOcrStates(tenantId: String!, limit: Int): [DmsOcrState!]!
  }

  extend type Mutation {
    createDmsOcrState(tenantId: String!, code: String!, name: String!): DmsOcrState!
    deleteDmsOcrState(id: ID!): Boolean!
  }
`;

export const DmsOcrStateGqlResolvers = {
  Query: {
    getDmsOcrState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
