export const IotLocationsAssignmentGqlTypeDefs = `
  type IotLocationsAssignment {
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
    getIotLocationsAssignment(id: ID!): IotLocationsAssignment
    listIotLocationsAssignments(tenantId: String!, limit: Int): [IotLocationsAssignment!]!
  }

  extend type Mutation {
    createIotLocationsAssignment(tenantId: String!, code: String!, name: String!): IotLocationsAssignment!
    deleteIotLocationsAssignment(id: ID!): Boolean!
  }
`;

export const IotLocationsAssignmentGqlResolvers = {
  Query: {
    getIotLocationsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
