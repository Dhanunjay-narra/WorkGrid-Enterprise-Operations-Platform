export const IotFirmwareAssignmentGqlTypeDefs = `
  type IotFirmwareAssignment {
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
    getIotFirmwareAssignment(id: ID!): IotFirmwareAssignment
    listIotFirmwareAssignments(tenantId: String!, limit: Int): [IotFirmwareAssignment!]!
  }

  extend type Mutation {
    createIotFirmwareAssignment(tenantId: String!, code: String!, name: String!): IotFirmwareAssignment!
    deleteIotFirmwareAssignment(id: ID!): Boolean!
  }
`;

export const IotFirmwareAssignmentGqlResolvers = {
  Query: {
    getIotFirmwareAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
