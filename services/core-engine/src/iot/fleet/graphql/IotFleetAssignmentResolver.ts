export const IotFleetAssignmentGqlTypeDefs = `
  type IotFleetAssignment {
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
    getIotFleetAssignment(id: ID!): IotFleetAssignment
    listIotFleetAssignments(tenantId: String!, limit: Int): [IotFleetAssignment!]!
  }

  extend type Mutation {
    createIotFleetAssignment(tenantId: String!, code: String!, name: String!): IotFleetAssignment!
    deleteIotFleetAssignment(id: ID!): Boolean!
  }
`;

export const IotFleetAssignmentGqlResolvers = {
  Query: {
    getIotFleetAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
