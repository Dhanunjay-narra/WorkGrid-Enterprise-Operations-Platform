export const DmsExportStateGqlTypeDefs = `
  type DmsExportState {
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
    getDmsExportState(id: ID!): DmsExportState
    listDmsExportStates(tenantId: String!, limit: Int): [DmsExportState!]!
  }

  extend type Mutation {
    createDmsExportState(tenantId: String!, code: String!, name: String!): DmsExportState!
    deleteDmsExportState(id: ID!): Boolean!
  }
`;

export const DmsExportStateGqlResolvers = {
  Query: {
    getDmsExportState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
