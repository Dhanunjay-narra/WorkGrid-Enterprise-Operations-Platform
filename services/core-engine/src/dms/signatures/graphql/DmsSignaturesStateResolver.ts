export const DmsSignaturesStateGqlTypeDefs = `
  type DmsSignaturesState {
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
    getDmsSignaturesState(id: ID!): DmsSignaturesState
    listDmsSignaturesStates(tenantId: String!, limit: Int): [DmsSignaturesState!]!
  }

  extend type Mutation {
    createDmsSignaturesState(tenantId: String!, code: String!, name: String!): DmsSignaturesState!
    deleteDmsSignaturesState(id: ID!): Boolean!
  }
`;

export const DmsSignaturesStateGqlResolvers = {
  Query: {
    getDmsSignaturesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
