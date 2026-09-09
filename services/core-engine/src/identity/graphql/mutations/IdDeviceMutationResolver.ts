export const IdDeviceMutationTypeDefs = `
  input CreateIdDeviceInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIdDevice(input: CreateIdDeviceInput!): IdDevice!
    deleteIdDevice(id: ID!): Boolean!
  }
`;

export const IdDeviceMutationResolvers = {
  Mutation: {
    createIdDevice: async (_: any, args: { input: any }) => {
      return {
        id: "ide_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIdDevice: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
