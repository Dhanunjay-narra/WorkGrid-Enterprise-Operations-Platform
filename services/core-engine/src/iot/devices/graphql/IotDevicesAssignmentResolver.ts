export const IotDevicesAssignmentGqlTypeDefs = `
  type IotDevicesAssignment {
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
    getIotDevicesAssignment(id: ID!): IotDevicesAssignment
    listIotDevicesAssignments(tenantId: String!, limit: Int): [IotDevicesAssignment!]!
  }

  extend type Mutation {
    createIotDevicesAssignment(tenantId: String!, code: String!, name: String!): IotDevicesAssignment!
    deleteIotDevicesAssignment(id: ID!): Boolean!
  }
`;

export const IotDevicesAssignmentGqlResolvers = {
  Query: {
    getIotDevicesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
