export const IotCommandsAssignmentGqlTypeDefs = `
  type IotCommandsAssignment {
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
    getIotCommandsAssignment(id: ID!): IotCommandsAssignment
    listIotCommandsAssignments(tenantId: String!, limit: Int): [IotCommandsAssignment!]!
  }

  extend type Mutation {
    createIotCommandsAssignment(tenantId: String!, code: String!, name: String!): IotCommandsAssignment!
    deleteIotCommandsAssignment(id: ID!): Boolean!
  }
`;

export const IotCommandsAssignmentGqlResolvers = {
  Query: {
    getIotCommandsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
