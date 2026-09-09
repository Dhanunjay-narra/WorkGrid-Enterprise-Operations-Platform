export const IotDeviceMutationTypeDefs = `
  input CreateIotDeviceInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIotDevice(input: CreateIotDeviceInput!): IotDevice!
    deleteIotDevice(id: ID!): Boolean!
  }
`;

export const IotDeviceMutationResolvers = {
  Mutation: {
    createIotDevice: async (_: any, args: { input: any }) => {
      return {
        id: "iot_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIotDevice: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
